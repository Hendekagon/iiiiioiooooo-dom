(ns iiiiioiooooo.core.structure
  (:require
    ;[clojure.zip :as zip]
    [fast-zip.core :as zip]
    [cljs.core :as c]
    [cljs.analyzer :as ana]
    [cljs.compiler :as compiler]
    [cljs.reader :as reader]
    [garden.color :as color :refer [hsl rgb rgba]]
  )
)

(defn pp [f y] (fn [x] (f x y)))

(defn maybe [f x] (if x (f x) x))

(defn peek-first [p] (-> p (zip/down) (partial maybe zip/node) str))

(defn typee [b]
  (cond
    (list? b) :list
    (symbol? b) (str b)
    (vector? b) :vector
    (map? b) :map
    (seq? b) :seq
    :default :unknown
  )
)

(defn translate
  ([maxx maxy rfns f p]
    ;(println rfns)
    (reduce
      (fn [r [x c]]
          (if (> maxy 0)
            (conj r
              (if (and c (zip/branch? c))
                (if (and (or (nil? (meta (zip/node c))) (:open (meta (zip/node c))))
                					(not (:zip/make-node (meta (zip/node c)))))
                  ((get rfns (:render-fn (meta (zip/node c))) f)
                     c
                     (translate maxx (dec maxy)
                      rfns
                      (get rfns (:render-fn (meta (zip/node c))) f)
                      (zip/down c))) ; unfolded
                  (f (typee (zip/node (zip/down c))) 1 1) ; folded
                )
                (f [x maxy (zip/node c)]) ; leaf
              )
            )
            r
          )
      )
      []
      (map vector (range maxx) (take maxx (take-while identity (iterate zip/right p))))
    )
  )
)

(defn seq-map-zip [x]
  (zip/zipper
    (fn [n] (or (seq? n) (map? n) (vector? n))) ; can have children ?
    (fn [b] (if (map? b) (seq b) b))  ;return children of given node
    (fn [node children]
      ;(cond (or (vector? node) (map? node)) (println "zzz " children))
      (with-meta
        (cond
          (map? node) (apply hash-map (mapcat identity children))
          (vector? node) (vec children)
          :default children)
        (merge (or (meta node) {}) {:open true}))) ; return new branch of given children
    x))

(defn top
  ([z]  (top z (zip/up z)))
  ([z up] (if up (top up) z))
)

(defn path
  ([t] (path (top t) t))
  ([c t] (path t (zip/up t) (zip/left t) [] c))
  ([t p c] (path t (zip/up t) (zip/left t) p c))
  ([t u l p c]
   (if (or (nil? u) (= (zip/node (zip/next t)) (zip/node (zip/next c))))
      (if (and t (= (zip/node (zip/next t)) (zip/node (zip/next c)))) (cons :v p) p)
      (path (if l l u) (cons (if l :> :v) p) c)
    )
  )
)

(defn nodes [n]
  (take-while (complement zip/end?) (iterate zip/next n)))

(defn climb [p]
  (if
    (zip/branch? p)
    (map climb
      (take-while
        (complement nil?)
        (iterate zip/right
          (zip/down p))))
    (zip/node p)
  )
)

(defn push-history1 [x h]
  (top (if x (zip/append-child h (with-meta x (merge (meta x) {:open false :version (inc (count h))}))) h))
)

(defn push-history [state]
	(update-in state [:history] (fn [h] (conj h (apply dissoc state (:dont-record state)))))
	)

(defn kop [x] (update-in x [:keypath] (fn [p]  (if (zero? (count p)) [:keymap] (subvec p 0 (dec (count p)))))))

(defn safe [x]  (assoc x :keypath [:keymap]))

(defn descendents
  ([loc]
    (mapcat (fn [r] (if (zip/branch? r) (descendents r) [r])) (take-while identity (iterate zip/right (if (zip/branch? loc) (zip/down loc) loc))))
  )
)

(defn maybe-open
  ([loc meta]
   (zip/replace loc (with-meta (zip/node loc) (update-in (or meta {}) [:open] not)))
  )
  ([loc] (maybe-open loc (meta (zip/node loc))))
)

(defn maybe-open-fn [loc]
  (if (= (zip/node (zip/next loc)) 'defn)
    (last (map maybe-open (take 3 (reverse (descendents loc)))))
    loc
  )
)

(defn carefull [f] (fn [x] (if-let [nx (f x)] nx x)))

(defn stop-at-closed [f]
  (fn [x]
    (if
      (and x (or (nil? (meta (zip/node x))) (:open (meta (zip/node x)))))
      (f x)
      (if (and x (meta (zip/node x)))
        (zip/right x)
        x
      ))))

; this means that if the loc of the focus is itself a loc, then return the result of f on it, not loc
(defn forward-zipper [f] (fn [loc]
  (if (and loc (contains? (meta (zip/node loc)) :zip/branch?)) (f (zip/node loc)) (f loc))) )

(defn forward-to-zipper [f] (fn [x] (if (and x (contains? (meta (zip/node x)) :zip/branch?)) (f (zip/node x)) (f x))) )

(defn maybe-select [x y] (if (= (meta (zip/node (:focus x))) (meta (zip/node (:focus y))))
  (assoc x :action :select) (assoc x :action :modify :modified (:focus x))))

(defn selected
  ([f] (fn [s] (selected s f)))
  ([s f] (assoc
     (update-in s [:focus]
                (carefull (forward-zipper f))) :action :select)))

(defn nop [s] (assoc s :action :select))

(defn update-context [s] (assoc s :context (top (:focus s))))

(defn modified
  ([f] (fn [s] (modified s f)))
  ([s f] (modified s f (:focus s)))
  ([s f m]
   (update-context (assoc
      (update-in s [:focus] (carefull (forward-zipper f)))
      :modified m :action :modify :x (inc (or (:x s) 0)))))
)

;(defn resolve [x] x) ; for below - delete -   cljs-incljs

"
(defn apply-selected
  ([h x]
    (apply-selected h x (zip/node (first (:selected x)))
      [
        (list (zip/node (first (rest (:selected x)))) (map zip/node (rest (rest (:selected x)))))
        (apply
          (resolve (zip/node (first (rest (:selected x)))))
          (map zip/node (rest (rest (:selected x))))
          )
        (resolve (zip/node (first (rest (:selected x)))))
      ]
    )
  )
  ([h x rl r]
    (assoc x :result r :modified (first (:selected x)))
  )
)
"

(defn deeepest
  ([n]
   (first
    (last
      (take-while
        (fn [[n p]] (not (nil? n)))
        (iterate
          (fn [[n p]] (if n [(zip/down n) n] [n p]))
          [n n])))))
)

(defn left ^{:doc "previous"} [s] (selected s zip/left))

(defn right ^{:doc "next"} [s] (selected s zip/right))

(defn out ^{:doc "out"} [x] (selected x zip/up))

(defn in ^{:doc "in"} [x] (selected x (stop-at-closed zip/down)))

(defn depth-first-next ^{:doc "depth-first next"} [s] (selected s (stop-at-closed zip/next)))

(defn depth-first-previous ^{:doc "depth-first previous"} [s] (selected s zip/prev))

(defn expand ^{:doc "expand"} [x] (maybe-select (update-in x [:focus] (carefull maybe-open)) x))

(defn delete ^{:doc "delete"} [x] (modified x zip/remove))

(defn insert-left ^{:doc "insert left"} [x] (modified x (fn [c] (zip/insert-left c "+")) (zip/up (:focus x))))

(defn insert-right ^{:doc "insert right"} [x]  (modified x (fn [c] (zip/insert-right c "+")) (zip/up (:focus x))))

(defn rightmost ^{:doc "last"} [x] (selected x zip/rightmost))

(defn deepest ^{:doc "deepest"} [x] (selected x (stop-at-closed deeepest)))

(defn leftmost ^{:doc "first"} [x] (selected x zip/leftmost))

(defn add-keybinding [x path f] (assoc-in x (cons :keymap path) f))

(defn root ^{:doc "root"} [x] (selected x top))

(defn replace-parent ^{:doc "replace parent with child"} [x]
(println "replace parent with child")
  (modified x
    (fn [l]
      (zip/replace (zip/up l) (zip/node l))
    )
    (zip/up (:focus x))
  )
)

(defn split-into-children ^{:doc "split into children"} [x]
  (modified x (fn [n] (zip/replace n
                                   (zip/make-node n (zip/node n)
                                                  (zip/children (seq-map-zip (vec (str (zip/node n))))))
                                   )))
)

(defn fuse-into-parent ^{:doc "fuse into parent"} [x]
  (modified x (fn [n] (zip/replace n (symbol (apply str (zip/children n))))))
)

(defn to-string ^{:doc "make them a string"} [x]
  (modified x (fn [n] (zip/replace n (apply str (zip/children n)))))
)

(defn home [x] (update-in x [:focus] top))

(defn hfn ^{:doc "history switch"}
  ([h s]
    (println (str "history: " (count (zip/node h))))
   (modified
    (assoc s
      :context (top h)
      :focus
        h
        ) identity)
  )
)


(defn next-at [i c]
  (fn [loc]
    (or loc (first (filter (fn [l] (= c (nth (zip/node l) i))) (iterate zip/right loc))))
  )
)

(defn find-first ^{:doc "makes :focus of the current state the first thing found at thing"}
  ([thing] (fn [s x] (selected x (partial find-first thing))))
  ([x loc]
    (first (filter (comp (partial = x) zip/node) (nodes loc))))
)

(defn next-starting-with [c]
  (fn [s x] (selected x (next-at (dec (count (:keypath x))) c)))
)

(defn reset-keypath [s] (assoc s :keypath [:keymap]))

(defn latest-state [history]
  (-> history top zip/down zip/rightmost zip/node)
)

(defn ggg [x] x)

(defn focus-on-latest [h x]
  (selected x (fn [loc] (-> h top zip/down zip/rightmost))))

(defn default-keymap []
  {
   :i         {:i (fn [s] (modified s (comp zip/prev zip/next)))}
   :alt
              {
               :left  {:left left}
               :right {:right right}
               :up    {:up replace-parent}
               :down  {:down split-into-children}
               :i     {:i (fn [s] (modified s identity))}
               :alt   nop
               }
   :up        {:up out}
   :down      {:down in}
   :right     {:right depth-first-next
               :space {:space depth-first-next}}
   :h         {:h hfn}
   :left      {:left depth-first-previous}
   :backspace {:backspace delete}
   :ctrl
              {
               :left  {:left insert-left}
               :right {:right insert-right}
               :down  {:down deepest}
               :alt
                      {
                       :right {:right rightmost}
                       :left  {:left leftmost}
                       :up    {:up root}
                       :alt   nop
                       }
               :up    {:up fuse-into-parent}
               :ctrl  nop
               }
   :n         {:up {:up (modified (pp zip/edit inc))} :down {:down (modified (pp zip/edit dec))}}
   :shift     {:shift nop}
   :tab       {:tab hfn}
   :0         {:0 home}
   :default   nop
   :space     {:space expand}
   }
)


;"this happens for *every* key that's released: e.g. alt-e would result in 2 of these, 1 for alt, 1 for e"

(defn default-state
  ([]
    (default-state
      (with-meta
        {
         :history [{}]
         :aaa     (with-meta '(+ 1 3) {:open true :q 3})
         :styyle  [
                   [:body {:background "black" :display :flex :flex-flow "column wrap"}]
                   [:div {:display :flex :flex-flow "column wrap"}]
                   [:#root>.selected {:background "rgba(255,255,255,0.1)"}]
                   [:.sexp {:background    "rgba(255,255,255,0.1)"
                            :display       :flex :flex-flow "row wrap" :padding "0.5em"
                            :border-radius "4px" :margin "0.1em" :flex-shrink 1}]
                   [:.leaf {:background    (garden.color/rgba 255, 255, 255, 0.1)
                            :display       :flex :flex-flow "row wrap" :padding "0.5em"
                            :border-radius "4px" :margin "0.1em" :flex-shrink 1}]
                   [:.selected {:background (garden.color/rgba 200 255 200 0.9)}]
                   ]
         :style
                  '(iiiiioiooooo.ui/set-css!
                     [
                   [:body {:background "black" :display :flex :flex-flow "column wrap"}]
                   [:div {:display :flex :flex-flow "column wrap"}]
                   [:#root>.selected {:background "rgba(255,255,255,0.1)"}]
                   [:.sexp {:background    "rgba(255,255,255,0.1)"
                            :display       :flex :flex-flow "row wrap" :padding "0.5em"
                            :border-radius "4px" :margin "0.1em" :flex-shrink 1}]
                   [:.leaf {:background    (garden.color/rgba 255, 255, 255, 0.1)
                            :display       :flex :flex-flow "row wrap" :padding "0.5em"
                            :border-radius "4px" :margin "0.1em" :flex-shrink 1}]
                   [:.selected {:background (garden.color/rgba 200 255 200 0.9)}]
                   ])
         :keymap  (default-keymap)
         :keyup
                  {
                   :esc     safe
                   :default (fn keyup
                              ([s] (keyup s (get-in s (conj (:keypath s) (:key s)) identity)))
                              ([s f]
                               (or
                                 (f (assoc (kop s) :op (str f)))
                                 s)
                                )
                              )
                   }
         :keydown
                  {
                   :default (fn keydown [s] (update-in (push-history s) [:keypath] (fn [kp] (conj kp (:key s)))))
                   }
         :keypath [:keymap]
         :action  :select
         :focus   (seq-map-zip '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))))))
         :context (seq-map-zip '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))))))
         :eval-test
         ;'((fn [x] (cljs.core/cons 5 x)) [1 2 3])
                  '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x])))))
         :help
                  [
                   "iiiiioiooooo Clojure structure editor"
                   "This is an experiment in making a functional data structure editor"
                   ]

         :qwe     0
         :table1
                  [['x 'y 'z] [1 2 3] [4 5 6] [7 8 9]]
         }
        {:open true :q 1}
        )
    )
   )
   ([state]
    (assoc (push-history state)
      :focus (seq-map-zip (:style state))
      :context (seq-map-zip (:style state))
      :selected [(seq-map-zip '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))))))]
      :qwe 1 :poi "qwe")
   )
)

(defn fn-for-event [s e]
  (if (= e (select-keys s (keys e)))
    identity
    (get-in s [(:event e) (:key e)] (get-in s [(:event e) :default] identity))
  )
)

(defn update-state
  ([s e] (update-state (merge s e) e (fn-for-event s e)))
  ([s e f] (f s))
)

(defn update! [state e]
  (swap! state (fn [s] (update-state s e)))
)

