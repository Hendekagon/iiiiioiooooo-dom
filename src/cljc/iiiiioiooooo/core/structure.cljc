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
    (list? b) "list"
    (symbol? b) (str "symbol " b)
    (vector? b) "vector"
    (map? b) "map"
    (seq? b) "seq"
    (fn? b) "fn"
    (string? b) "string"
    (keyword? b) "keyword"
    :default ""
  )
)

(defn make-translate [g]
  (fn translate [maxx maxy rfns f p]
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
      (map vector (range maxx) (take maxx (filter g (take-while identity (iterate zip/right p)))))
    )
  )
)

(defn seq-map-zip [x]
  (zip/zipper
    (fn [n] (or (seq? n) (map? n) (vector? n))) ; can have children ?
    (fn [b] (if (map? b) (seq b) b))  ;return children of given node
    (fn [node children]
      ;(println (str "meta " node))
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
	(update-in state [:history] (fn [h] (conj h (apply dissoc state (:dont-record state))))))

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

(defn selected
  ([f] (fn [s] (selected s f)))
  ([s f]
    (assoc
     (update-in s [:focus]
      (carefull (forward-zipper f))) :action :select)))

(defn nop [s] (assoc s :action :select))

(defn update-context [s] (assoc s :context (top (:focus s))))

(defn modified
  ([f] (fn [s] (modified s f)))
  ([s f] (modified s f (:focus s)))
  ([s f m] (modified s f m identity))
  ([s f m g]
   (update-context (assoc
      (update-in s [:focus] (carefull (forward-zipper f)))
      :modified m :post-modf g
      :action :modify :x (inc (or (:x s) 0))))))

(defn maybe-select [x y]
  (if (= (meta (zip/node (:focus x))) (meta (zip/node (:focus y))))
    (assoc x :action :select)
    (assoc x :action :modify :modified (:focus x)
            :post-modf identity)))

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

(defn delete ^{:doc "delete"} [x] (modified x zip/remove (:focus x) zip/up))

(defn insert-left ^{:doc "insert left"} [x] (modified x (fn [c] (zip/insert-left c "+")) (zip/up (:focus x))))

(defn insert-right ^{:doc "insert right"} [x]  (modified x (fn [c] (zip/insert-right c "+")) (zip/up (:focus x))))

(defn insert-key-right ^{:doc "insert right"}
  ([k]
    (fn [x]
      (modified x (fn [c] (zip/right (zip/insert-right c k))) (:focus x) zip/up))))

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

(defn as-list [x]
  (cond
    (symbol? x) (seq (name x))
    (string? x) (seq x)
    (keyword? x) (seq (name x))
    :else (seq (str x))))

(defn to-list ^{:doc "split into children"} [x]
  (modified x
    (fn [n]
      (zip/replace n
       (zip/make-node n (with-meta (symbol (zip/node n)) {:dtype :to_list})
        (zip/children
          (seq-map-zip
            (vec (as-list (zip/node n))))))))))

(defn list-to-keyword ^{:doc "fuse into parent"} [x]
  (modified x (fn [n] (zip/replace n (keyword (apply str (zip/children n))))))
)

(defn list-to-symbol ^{:doc "fuse into parent"} [x]
  (modified x (fn [n] (zip/replace n (symbol (apply str (zip/children n))))))
)

(defn list-to-string ^{:doc "make them a string"} [x]
  (modified x
    (fn [n]
      (zip/replace n (apply str (zip/children n)))))
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
   :alt
              {
               :1 {:1 (fn [s] (println "add eval 1") (assoc-in s [:eval :1] (:focus s)))}
               :left  {:left left}
               :right {:right right}
               :up    {:up replace-parent}
               :i     {:i (fn [s] (modified s identity))}
               :l  {:l to-list}
               :apostrophe {:apostrophe list-to-string}
               :forwardslash {:forwardslash list-to-symbol}
               :semicolon {:semicolon list-to-keyword}
               :alt   nop
               :space {:space expand}
               }
   :up        {:up out}
   :down      {:down in}
   :right     {:right depth-first-next
               :space {:space depth-first-next}}
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
               :ctrl  nop
               }
   :n         {:up {:up (modified (pp zip/edit inc))} :down {:down (modified (pp zip/edit dec))}}
   :d         {
                :up {:up (modified (pp zip/edit (fn [d] (* d 2))))}
                :down {:down (modified (pp zip/edit (fn [d] (* d 0.5))))}}
   :shift     {:shift nop}
   :tab       {:tab hfn}
   :default   nop
   }
)

(defn add-key-insert
  ([all-keys s [k ks]]
   (assoc-in
     (reduce
       (fn [r [ok oks]]
         (assoc-in r [:keymap k ok ok] (insert-key-right oks)))
       s all-keys)
     [:keymap k k]
     (insert-key-right ks))))

(defn add-all-keys
  ([s keyz] (reduce (partial add-key-insert keyz) s keyz)))

(defn default-state
  ([]
    (default-state
      (with-meta
        {
         :history [{}]
         :aaa     (with-meta '(+ 1 3) {:open true :q 3})
         :style
                  '(iiiiioiooooo.ui/set-css!
                     [
                      [:body {:background (garden.color/rgb 0 0 0)
                              :display    :flex :flex-flow "column wrap"}]
                      [:.sexp {:background    (garden.color/rgba 255 255 255 0.2) :font-size (str 1 "rem")
                               :font-family   "monospace"
                               :fill          "red"
                               :margin-left   (str 1 "em") :margin-right (garden.units/em 0.5)
                               :margin-top    (str 0.1 "em") :margin-bottom (str 0.01 "em")
                               :align-items   "flex-start"
                               :display       :flex :flex-flow "column wrap" :padding (str 0.1 "em")
                               :border-radius (str 4 "px") :flex-shrink 1
                               }]
                      [:body>.sexp:first-child {:flex-flow "column wrap"
                                                }]
                      [".str>.leaf:first-child" {:opacity 0.3}]
                      [".str" {:color (garden.color/rgb 150 50 50)}]
                      [:.leaf {:background    (garden.color/rgba 255 255 255 0.001)
                               :display       :flex :flex-flow "row wrap" :padding (str 0.1 "em")
                               :margin-top    (str 0.01 "em") :margin-bottom (str 0.01 "em")
                               :border-radius (str 4 "px")
                               :align-items   "center" :font-size (str 1 "rem")
                               :margin-left   (str 0.5 "em") :margin-right (str 0.1 "em")
                               :flex-shrink   1
                               :flex-grow 1}]
                      [".keyword" {:color (garden.color/rgb 100 0 100)}]
                      [".symbol" {:color (garden.color/rgb 0 0 0)}]
                      [".string" {:color (garden.color/rgb 0 0 0)
                        :font-style "Italic"}]
                      [:.to_list {:display :flex :flex-flow "row wrap" :white-space "pre"}]
                      [".to_list>*" {:display "flex" :color (garden.color/rgb 0 0 0)
                                      :margin 0 :padding 0
                                      }]
                      [".list" {:color (garden.color/rgb 50 100 255) :flex-flow "column wrap"}]
                      [".vector" {:color (garden.color/rgb 25 50 255) :flex-flow "row wrap"}]
                      [:.selected {:background (garden.color/rgba 100 255 100 0.3)
                                   :fill       (garden.color/rgba 100 255 100 0.3)}]
                      [".to_list>.selected"
                       {:background    (garden.color/rgba 255 100 100 0.0)
                        :border-radius "0px"
                        :border-right  "2px solid red"
                        }]
                      ["g:nth-child(odd)" {:transform "translate(10,20)"}]
                      ["g:nth-child(even)" {:transform "translate(20,20)"}]
                      [:circle {:fill "red"}]
                      [:line {:stroke "white" :stroke-width 2}]
                      [:.selected>g>circle {
                                            :fill   (garden.color/rgb 100 255 100)
                                            :stroke "yellow" :stroke-width 2
                                            }]
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
         :focus1  (with-meta '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x])))))
                             {:render-fn :to-svg :open true})
         :focus   '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x])))))
         :context '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x])))))
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
    (let [f (seq-map-zip {:style (:style state)
      "Here is an example expression to evaluate.
      Select it and then do alt-enter (option-enter on a Mac)"
      (:context state)})]
      (assoc (push-history state)
       :focus f
       :context f
       :selected [(seq-map-zip '((fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))) (quote (quote fn [x] (cljs.core/list (cljs.core/rest x) (cljs.core/cons (cljs.core/first x) [x]))))))]
       :qwe 1 :poi "qwe"))
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

