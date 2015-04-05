(ns iiiiioiooooo.core.structure
  (:require
    [clojure.zip :as zip]
  )
)

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
                (if (and (or (nil? (meta (zip/node c))) (:open (meta (zip/node c)))) (not (:zip/make-node (meta (zip/node c)))))
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
    (fn [node children] (with-meta children (merge (or (meta node) {}) {:open true}))) ; return new branch of given children
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

(defn push-history [x h]
  (top (if x (zip/append-child h (with-meta x (merge (meta x) {:open false :version (inc (count h))}))) h))
)

(defn kop [x] (update-in x [:keypath] (fn [p] (subvec p 0 (dec (count p))))))

(defn safe [s x]  (assoc x :keypath [:keymap]))

(defn nop [s x] x)

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

(defn selected [s f]
  (assoc
    (update-in s [:focus]
      (carefull (forward-zipper f))) :action :select))

(defn modified
  ([s f] (modified s f (:focus s)))
  ([s f m]
    (assoc
      (update-in s [:focus] (carefull (forward-zipper f))
      )
      :modified m :action :modify :x (inc (or (:x s) 0))))
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

(defn left ^{:doc "previous"} [s x] (selected x zip/left))

(defn right ^{:doc "next"} [s x] (selected x zip/right))

(defn out ^{:doc "out"} [s x] (selected x zip/up))

(defn in ^{:doc "in"} [s x] (selected x (stop-at-closed zip/down)))

(defn depth-first-next ^{:doc "depth-first next"} [s x] (selected x (stop-at-closed zip/next)))

(defn depth-first-previous ^{:doc "depth-first previous"} [s x] (selected x zip/prev))

(defn expand ^{:doc "expand"} [s x] (maybe-select (update-in x [:focus] (carefull maybe-open)) x))

(defn delete ^{:doc "delete"} [s x] (modified x zip/remove))

(defn insert-left ^{:doc "insert left"} [s x] (modified x (fn [c] (zip/insert-left c "+"))))

(defn insert-right ^{:doc "insert right"} [s x]  (modified x (fn [c] (zip/insert-right c "+"))))

(defn rightmost ^{:doc "last"} [s x] (selected x zip/rightmost))

(defn deepest ^{:doc "deepest"} [s x] (selected x (stop-at-closed deeepest)))

(defn leftmost ^{:doc "first"} [s x] (selected x zip/leftmost))

(defn add-keybinding [x path f] (assoc-in x (cons :keymap path) f))

(defn root ^{:doc "root"} [s x] (selected x top))

(defn replace-parent ^{:doc "replace parent with child"} [s x]
  (modified x
    (fn [l]
      (zip/replace (zip/up l) (zip/node l))
    )
    (zip/up (:focus x))
  )
)

(defn split-into-children ^{:doc "split into children"} [s x]
  (assoc (update-in x [:focus] (fn [n] (zip/replace n
                                    (zip/make-node n (zip/node n)
                                      (zip/children (zip/vector-zip (vec (name (zip/node n))))))
                                  ))) :action :modify)
)

(defn fuse-into-parent ^{:doc "fuse into parent"} [s x]
  (assoc (update-in x [:focus] (fn [n] (zip/replace n (symbol (apply str (zip/children n))))) ) :action :modify)
)

(defn home [s x] (update-in x [:focus] top))

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

; this happens for *every* key that's released: e.g. alt-e would result in 2 of these, 1 for alt, 1 for e
(defn keyup
  ([s x] (keyup s x (get-in x (conj (:keypath x) (:key x)) nop)))
  ([s x f]
    (push-history
      (or
        (f s (assoc (kop x) :op (str f)))
         s)
         s)
  )
)

(defn latest-state [history]
  (-> history top zip/down zip/rightmost zip/node)
)

(defn lattest-state [history s]
  (println (str "back to latest state" (meta history)))
  (modified s (fn [loc] (-> history top zip/down zip/rightmost zip/node)))
)

(defn focus-on-latest [h x]
  (selected x (fn [loc] (-> h top zip/down zip/rightmost))))

(defn default-keymap []
  {
   :i {:i (fn [s x] (modified x (comp zip/prev zip/next)))}
   :alt
              {
               :left  {:left left}
               :right {:right right}
               :up    {:up replace-parent}
               :down  {:down split-into-children}
               :i     {:i (fn [s x] (modified x identity))}
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
   :shift     {:shift nop}
   :1
              {
               :1 lattest-state
               }
   :0         {:0 home}
   :default   nop
   :space     {:space expand}
   }
)

(defn default-state
  ([]
    (default-state
      (seq-map-zip
      [
        (with-meta
          {
           :render-fns {:test :qwe}
           :keymap     (default-keymap)
           :keyup
                       {
                        :esc     safe
                        :default keyup
                        }
           :keydown
                       {
                        :default (fn keydown [s x] (push-history (update-in x [:keypath] (fn [kp] (conj kp (:key x)))) s))
                        }
           :keypath    [:keymap]
           :action     :select
           :focus      "hi"
           :context    "poi"
           :selected   [7]
           :help
                       [
                        "iiiiioiooooo Clojure structure editor"
                        "This is an experiment in making a functional data structure editor"
                        ]
           :namespaces
                       {
                        :clojure.core
                        {
                         :c   {
                               :o {
                                   :n
                                   {
                                    :s :cons
                                    :c :juxt
                                    :j :conj
                                    }
                                   }
                               }
                         :inc inc
                         :dec dec
                         }
                        }
           :qwe        0
           :table1
                       [['x 'y 'z] [1 2 3] [4 5 6] [7 8 9]]
           :table2
                       (with-meta
                         [(repeatedly 3
                                      (fn [] (map (fn [x] (Math/sin (/ x 13.3))) (iterate inc (rand-int 180)))))]
                         {:open true :render-fn :to-svg})
           :table3
                       (with-meta
                         (map
                           (fn [i] (iterate inc i))
                           (iterate inc 0))
                         {:open true})
           :test       (with-meta '(+ 1 3) {:open true :q 3})
           :test1
                       (with-meta '(
                                     ((fn [x] (list (rest x) (cons (read-string (first x)) [x])))
                                       (quote ["quote" fn [x] (list (rest x) (cons (read-string (first x)) [x]))])
                                       )
                                     (defn descendents
                                       ([loc]
                                        (mapcat (fn [r] (if (zip/branch? r) (descendents r) [r])) (take-while identity (iterate zip/right (if (zip/branch? loc) (zip/down loc) loc))))
                                         )
                                       )
                                     ) {:open true :q 2})
           }
          {:open true :q 1}
       )
      ]
     )
    )
   )
   ([h]
    (default-state (latest-state h) (top h))
   )
   ([s h] ; s isa map, h isa zip location of the history
    (default-state
      (push-history (assoc s
      :context (zip/down h)
      :focus (zip/up (zip/rightmost (zip/down h)))
      :selected [3 4]
      :qwe 1 :poi "qwe") h) (latest-state h) :qweqwe)
   )
   ([h latest w]
    (push-history (assoc (latest-state h)
     :focus (zip/next (zip/next (:context (latest-state h))))
     :selected
      [
        (-> (:context (latest-state h)) zip/next zip/next zip/next zip/next)
        (-> (:context (latest-state h)) zip/next zip/next zip/next zip/next)
        (-> (:context (latest-state h)) zip/down zip/right zip/down zip/right zip/down zip/right zip/right)
        (-> (:context (latest-state h)) zip/down zip/right zip/down zip/right zip/down zip/right zip/right zip/right)
      ]
     :qwe 2 :wer "arseee")
      h)
   )
)

(defn fn-for-event [s e]
  (if (= e (select-keys s (keys e)))
    identity
    (get-in s [(:event e) (:key e)] (get-in s [(:event e) :default] identity))
  )
)

(defn update-state
  ([h e] (update-state h (latest-state h) e))
  ([h s e] (update-state h (merge s e) e (fn-for-event s e)))
  ([h s e f] (f h s))
)

(defn update-with [h f]
  (push-history (or (f h (latest-state h)) h) h)
)

(defn update! [state e]
  (swap! state (fn [s] (update-state s e)))
)