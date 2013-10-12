(ns iiiiioiooooo.core.structure
  (:require
    [clojure.zip :as zip]
    [iiiiioiooooo.core.test :as test]
  )
)

(defn maybe [f x] (if x (f x) x))

(defn peek-first [p] (-> p (zip/down) (partial maybe zip/node) str))

(defn make-id [h] (str "id" h))

(defn to-html
  ([n] (conj [:div {:class (str "leaf " (cond (fn? n) "fn ") (if (:open (meta n)) "open" "closed") )}] (str n)))
  ([n c] (apply conj [:div {:class (str "branch open " n)}] c))
  ([n n c] [:div {:class (str "branch folded")}])
  ([] [:div {:class "branch "}])
)

(defn selector [p]
  (str "#root > li:first-child " (apply str (map  {:down " > ul:first-child > li:first-child" :right " + li"} p)))
)

(defn replacement-selector
  ([p]
    (replacement-selector "#root > li:first-child "
      (apply str (map  {:down " > ul:first-child > li:first-child" :right " + li"} p)))
  )
  ([s ps]
    ;(log ">>> " ps)
    (str s (if (= ps "")  "> ul:first-child" ps)))
)


(defn type-str [b]
  (cond
    (list? b) :list
    (symbol? b) (str b)
    (vector? b) :vector
    (map? b) :map
    :default :unknown
  )
)

(defn translate
  ([maxx maxy f p]
    (reduce
      (fn [r c]
          (if (> maxy 0)
            (conj r
              (if (and c (zip/branch? c))
                (if (and (or (nil? (meta (zip/node c))) (:open (meta (zip/node c)))) (not (:zip/make-node (meta (zip/node c)))))
                  (f (type-str (zip/node (zip/down c))) (translate maxx (dec maxy) f (zip/down c))) ; unfolded
                  (f (type-str (zip/node (zip/down c))) nil nil) ;folded
                )
                (f (zip/node c)) ; leaf
              )
            )
            r
          )
      )
      []
      (take maxx (take-while identity (iterate zip/right p)))
    )
  )
)

(defn seq-map-zip [x]
  (zip/zipper
    (fn [n] (or (seq? n) (map? n) (vector? n))) ; can have children ?
    (fn [b] (if (map? b) (seq b) b))  ;return children of given node
    (fn [node children] (with-meta children (merge (or (meta node) {}) {:open true}))) ; return new branch of given children
    x))

(defn path
  ([c t] (path t (zip/up t) (zip/left t) [] c))
  ([t p c] (path t (zip/up t) (zip/left t) p c))
  ([t u l p c]
    (if (or (nil? u) (= (zip/node t) (zip/node c)))
      p
      (path (if l l u) (cons (if l :right :down) p) c)
    )
  )
)

(defn top
  ([z]  (top z (zip/up z)))
  ([z up] (if up (top up) z))
)

(defn nodes [n] (take-while (complement zip/end?) (iterate zip/next n)))


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
    (if meta
      (zip/replace loc (with-meta (zip/node loc) (update-in meta [:open] not)))
      loc
    )
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

(defn stop-at-closed [f] (fn [x] (if (or (nil? (meta (zip/node x))) (:open (meta (zip/node x)))) (f x) x)))

; this means that if the loc of the focus is itself a loc, then return the result of f on it, not loc
(defn forward-zipper [f] (fn [loc]
  (if (and loc (contains? (meta (zip/node loc)) :zip/branch?)) (f (zip/node loc)) (f loc))) )

(defn forward-to-zipper [f] (fn [x] (if (and x (contains? (meta (zip/node x)) :zip/branch?)) (f (zip/node x)) (f x))) )

(defn maybe-select [x y] (if (= (meta (zip/node (:focus x))) (meta (zip/node (:focus y))))
  (assoc x :action :select) (assoc x :action :modify :modified (:focus x))))

(defn selected [s f] (assoc (update-in s [:focus] (carefull (forward-zipper f))) :action :select))

(defn modified
  ([s f] (modified (assoc (update-in s [:focus] (carefull (forward-zipper f))) :action :modify)))
  ([x] (assoc x :modified (:focus x)))
)

(defn resolve [x] x) ; for below - delete - cljs-incljs

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

(defn left ^{:doc "previous"} [s x] (selected x zip/left))

(defn right ^{:doc "next"} [s x] (selected x zip/right))

(defn out ^{:doc "out"} [s x] (selected x zip/up))

(defn in ^{:doc "in"} [s x] (selected x (stop-at-closed zip/down)))

(defn depth-first-next ^{:doc "depth-first next"} [s x] (selected x (stop-at-closed zip/next)))

(defn depth-first-previous ^{:doc "depth-first previous"} [s x] (selected x zip/prev))

(defn expand ^{:doc "expand"} [s x] (maybe-select (update-in x [:focus] (carefull maybe-open)) x))

(defn delete ^{:doc "delete"} [s x] (modified x zip/remove))

(defn insert-left ^{:doc "insert left"} [s x] (modified x (fn [c] (zip/insert-left c "node"))))

(defn insert-right ^{:doc "insert right"} [s x]  (modified x (fn [c] (zip/insert-right c "node"))))

(defn rightmost ^{:doc "last"} [s x] (selected x zip/rightmost))

(defn leftmost ^{:doc "first"} [s x] (selected x zip/leftmost))

(defn add-keybinding [x path f] (assoc-in x (cons :keymap path) f))

(defn root ^{:doc "root"} [s x] (selected x top))

(defn replace-parent ^{:doc "replace parent with child"} [s x]
  (assoc (update-in x [:focus] (fn [n] (zip/replace (zip/up n) (zip/node n))))
    :action :modify :modified (zip/up (:focus x)))
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


(defn hfn ^{:doc "history switch"} [s x] (assoc x :focus s))

(defn next-at [i c]
  (fn [loc]
    (or loc (first (filter (fn [l] (= c (nth (zip/node l) i))) (iterate zip/right loc))))
  )
)


(defn find-first ^{:doc "makes :focus of the current state the first thing found at thing"}
  ([thing] (fn [s x] (selected x (partial find-first thing))))
  ([x loc] (first (filter (comp (partial = x) zip/node) (nodes loc))))
)


(defn next-starting-with [c]
  (fn [s x] (selected x (next-at (dec (count (:keypath x))) c)))
)

(defn keyup [s x]
  (push-history
    (or
      ((get-in x (conj (:keypath x) (:key x)) nop) s (kop x))
       s)
       s))

(defn latest-state [history]
  (-> history top zip/down zip/rightmost zip/node)
)

(defn focus-on-latest [h x] (selected x (fn [loc] (-> h top zip/down zip/rightmost))))

(defn default-keymap []
  {
    :alt
    {
      :left {:left left}
      :right {:right right}
      :up {:up fuse-into-parent}
      :down {:down split-into-children}
      :alt nop
    }
    :up {:up out}
    :down {:down in}
    :right {:right depth-first-next
            :space {:space depth-first-next}}
    :h {:h hfn}
    :left {:left depth-first-previous}
    :backspace {:backspace delete}
    :ctrl
    {
      :left  {:left insert-left}
      :right {:right  insert-right}
      :alt
      {
        :right {:right rightmost}
        :left {:left leftmost}
        :up {:up root}
        :alt nop
      }
      :up {:up replace-parent}
      :ctrl nop
    }
    :shift {:shift nop}
    :tab
    {
      :tab hfn
    }
    :0 {:0  home}
    :default nop
    :space {:space expand}
  }
)

(defn default-state
  ([]
    (default-state
      (seq-map-zip
      [
        (with-meta
         {
          :keymap (default-keymap)
          :keyup
          {
            :esc safe
            :default keyup
          }
          :keydown
          {
            :default (fn keydown [s x] (push-history (update-in x [:keypath] (fn [kp] (conj kp (:key x)))) s))
          }
          :keypath [:keymap]
          :action :select
          :focus "hi"
          :context "poi"
          :selected [7]
          :help
          [
          "iiiiioiooooo Clojure structure editor (barely functioning sketch of)"
          "This is an experiment in making a functional code editor."
          "https://www.youtube.com/watch?v=2Op3QLzMgSY&feature=player_detailpage#t=2077s"
          "Lecture 1A | MIT 6.001 Structure and Interpretation, 1986 - 35m25s"
          "
          The idea here is to manipulate code
          at the expression level, not at the text level.
          This is very primitive right now,
          it doesn't do much yet, just testing ideas, everything will change, or it will be abandoned.
          Works best in Chrome, keyboard-only! doesn't work on mobile browsers.
          Plan: SVG view,
          make as front-end for Session REPL. What can you do now ? Navigate the code and do basic editing.
          "

          ]
          :namespaces
          {
            :clojure.core
            {
              :c {
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
          :qwe 0
          :test (with-meta '(+ 1 3) {:open true})
          :test2 (with-meta (test/test-exp) {:open true})
          :test3 (with-meta (test/test-exp3) {:open true})
          :test1 (with-meta '((fn [x] (list (rest x) (cons (read-string (first x)) [x]))) (quote ["quote" fn [x] (list (rest x) (cons (read-string (first x)) [x]))])) {:open true})
         }
          {:open true}
       )
      ]
     )
    )
   )
   ([h]
    (default-state (latest-state h) h)
   )
   ([s h]
    (default-state (push-history (assoc s
      :context (zip/up (find-first :test1 h))
      :focus (zip/up (zip/rightmost (zip/down h)))
      :selected [3 4]
      :qwe 1 :poi "qwe") h) (latest-state h) nil)
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
     :qwe 2 :wer "arse")
      h)
   )
)


(defn fn-for-event [s e]
  (if (= e (select-keys s (keys e)))
    identity
    (get-in s [(:event e) (:key e)] (get-in s [(:event e) :default] identity))
  )
)

(defn update
  ([s e] (update s (latest-state s) e))
  ([s x e] (update s (merge x e) e (fn-for-event x e)))
  ([s x e f] (f s x))
)

(defn maybe [f x]
  (or (f x (latest-state x)) x)
)

(defn update-with [s f]
  (push-history (maybe f s) s)
)

(defn update! [state e]
  (swap! state (fn [s] (update s e)))
)

