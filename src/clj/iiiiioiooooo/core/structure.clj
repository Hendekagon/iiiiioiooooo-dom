(ns iiiiioiooooo.core.structure
  (:require
    [clojure.zip :as zip]
    ;[clojure.core.match :as m]
  )
)

; Box of Pencils

; This is an experimental Structure Editor for Clojure.
; It works by having a zipper on a map which has a focus, selection and context.
; The context is a zipper which is the scope of what we see when we visualize the data we're editing.
; The focus is a zipper which is what we're currently focussed to act on in the context.
; All functions which modify the data structure via the focus in the context go through
; a function to which they return what they've modified, so the UI can tell what's changed.
; All the modifying functions live in the data structure (with the meta of the zipper),
; so they can all be edited too, theoretically, although this will have to wait for
; first-class environments before it really works.
;
; I'm sorry for all the dreadfully crap naming and inconsistent patterns in this code.
; It's a product of evolution.
; The most recent change was to get away from HTML and SVG for the GUI which I had before.
; I decided I hated HTML too much, so switched to canvas, and now I'm moving to WebGL.

(defn maybe [f x] (if x (f x) x))

(defn -_
  ([f _ x] (fn [y] (f y x)))
  ([f x] (partial f x))
)

(def -+ comp)

(def -- complement)

(defn peek-first [p] (-> p (zip/down) (partial maybe zip/node) str))

(defn zipper? [l] (contains? (meta l) :zip/branch?))

(defn type-str [b]
  (cond
    (list? b) :list
    (number? b) :number
    (symbol? b) :symbol
    (string? b) :string
    (vector? b) :vector
    (map? b) :map
    (zipper? b) :zipper
    :default :unknown
  )
)

; this could be done much better with core.match
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

(defn zm [[[z1 m1] [m2 z2]]] [z1 (merge m1 (:* m2))])

(defn nn [l]
  (if (:map? (meta (zip/node l)))
    (with-meta
      (reduce
        (fn [r [k v]] (assoc r k v))
         {} (zip/node l))
         (meta (zip/node l)))
    (zip/node l)))

(defn as
  ([l] (as l :fn))
  ;([l k] ((or (get-in (meta l) [:* k]) identity) l))
  ([l r & k]
    (with-meta
    l
    (assoc-in (meta l) [:* r]
      (apply (or (get-in (meta l) [:* (first k)]) identity) (if (empty? (rest k)) [l] (map (-_ get-in (meta l)) (map (-_ conj [:*]) (rest k)))))))
  )
)

(defn az
([l & k]
    (apply (or (get-in (meta l) [:* (first k)]) identity) (cons l (map (-_ get-in (meta l)) (map (-_ conj [:*]) (rest k)))))
  )
)

(defn zpr
  [branch? children make-node root]
    ^{
      :zip/branch? branch?
      :zip/children children
      :zip/make-node make-node
      :*
      {
        :fn (fn [l] (zip/edit l inc))
        :nn nn
        :m map
        :> zip/next
        :< zip/prev
        :V zip/down
        :A zip/up
        :+ (fn [l] (zip/edit l inc))
        :- (fn [l] (zip/edit l dec))
        :_+ zip/insert-right
        :y (fn [l] (zip/replace (zip/up l) (nn l)))
      }
     }
    [root nil])

(defn put
  ([loc] (put loc :fn))
  ([loc k]
    (with-meta loc (assoc-in (meta loc) [:* k] (nn loc)))
    )
)

;user=> (-> (s/smz {:x 7 :y 9 :q (fn [l] (z/edit l (fn [x] (* x 9))))}) > (z/replace [:p 9]) > > (s/as) > > > > > > (s/put) < < < (s/as) s/top s/nn)


(defn smz [x]
  (zpr
    (fn branch? [n] (or (seq? n) (map? n) (set? n) (vector? n))) ; can have children ?
    (fn children [b]
      (if (or (map? b) (set? b))
        ;(map (comp (fn [n] (with-meta n {:map? (map? b)})) seq) (seq b))
        (with-meta (seq b) {:map? true})
        b)
    )  ;return children of given node
    (fn make-node [node children]
      (with-meta children
        (merge (or (meta node) {})
          {:open true :map? (map? node) :set? (set? node)}))) ; make node
    x)
)

(defn top
  ([z]  (top z (zip/up z)))
  ([z up] (if up (top up) z))
)

; this while thing is just awefull!
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

(defn nodes [n] (take-while (complement zip/end?) (iterate zip/next n)))

(defn ree [l]
  (map (partial take 2) (take-while (comp (fn [n] (not (or (nil? n) (zip/end? n)))) last)
    (iterate
      (fn [[l i d r n]]
        [n (if d :v (if r :> :A)) (zip/down n) (zip/right n) (if d d (if r r (zip/next l)))]
      )
      [l :_ (zip/down l) (zip/right l) (zip/next l)]
    )))
)

(defn r* [l f]
  (loop [l l i :_ d (zip/down l) r (zip/right l)]
    (let [n (if d d (if r r (zip/next l)))]
      ;(println d r)
      (f l i)
      (if (or (nil? n) (zip/end? n))
        :end
        (recur n (if d :v (if r :> :A)) (zip/down n) (zip/right n))
      )))
)

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

(defn stop-at-closed [f] (fn [x] (if (or (nil? (meta (zip/node x))) (:open (meta (zip/node x)))) (f x) x)))

; this means that if the loc of the focus is itself a loc, then return the result of f on it, not loc
(defn forward-zipper [f] (fn [loc]
  (if (and loc (contains? (meta (zip/node loc)) :zip/branch?)) (f (zip/node loc)) (f loc))) )

(defn forward-to-zipper [f] (fn [x]
  (if (and x (contains? (meta (zip/node x)) :zip/branch?)) (f (zip/node x)) (f x))) )

(defn maybe-select [x y] (if (= (meta (zip/node (:focus x))) (meta (zip/node (:focus y))))
  (assoc x :action :select) (assoc x :action :modify :modified (:focus x))))

(defn selected [s f] (assoc (update-in s [:focus] (carefull (forward-zipper f))) :action :select))

(defn modified
  ([s f] (modified s f (:focus s)))
  ([s f m]
    (assoc
      (update-in s [:focus] (carefull (forward-zipper f))
      )
      :modified m :action :modify :x (inc (or (:x s) 0))))
)

; [where-to-put-result fn args]
(defn apply-selected
  ([h x]
    (apply-selected h x
      (zip/node (first (:selected x)))
      (list (zip/node (first (rest (:selected x)))) (map zip/node (rest (rest (:selected x)))))
      (apply
        (get x (zip/node (first (rest (:selected x)))) identity)
        (map zip/node (rest (rest (:selected x))))
      )
    )
  )
  ([h x fn exp result]
    (assoc x :modified result :fn-applied fn)
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

(defn insert-left ^{:doc "insert left"} [s x] (modified x (fn [c] (zip/insert-left c "+"))))

(defn insert-right ^{:doc "insert right"} [s x]  (modified x (fn [c] (zip/insert-right c "+"))))

(defn rightmost ^{:doc "last"} [s x] (selected x zip/rightmost))

(defn leftmost ^{:doc "first"} [s x] (selected x zip/leftmost))

(defn add-keybinding [x path f] (assoc-in x (cons :keymap path) f))

(defn rotate< [s x] (update-in x [:rotation] (fn [r] (+ r 0.1))))

(defn rotate> [s x] (update-in x [:rotation] (fn [r] (- r 0.1))))

(defn tx- [s x] (update-in x [:translation 0] (fn [r] (- r 10))))

(defn tx+ [s x] (update-in x [:translation 0] (fn [r] (+ r 10))))

(defn ty- [s x] (update-in x [:translation 1] (fn [r] (- r 10))))

(defn ty+ [s x] (update-in x [:translation 1] (fn [r] (+ r 10))))

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

(defn focus-on-latest [h x] (selected x (fn [loc] (-> h top zip/down zip/rightmost))))

(defn default-keymap []
  {
    :i {:i (fn [s x] (modified x (comp zip/prev zip/next)))}
    :alt
    {
      :left {:left left}
      :right {:right right}
      :up {:up replace-parent}
      :down {:down split-into-children}
      :i {:i (fn [s x] (modified x identity))}
      :alt nop
    }
    :q {:q rotate>}
    :w {:w rotate<}
    :s {:s tx-}
    :f {:f tx+}
    :e {:e ty-}
    :d {:d ty+}
    :g {:g (fn [h s] (modified s (fn [l] (zip/edit l (fn [n] ( - n 10))))))}
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
      :up {:up fuse-into-parent}
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
      (smz
      [
        (with-meta
         {
          :keymap (default-keymap)
          :rotation 3.14
          :translation [200 200]
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
          :selected #{7}
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
          :test2 (with-meta '(map inc (range 7)) {:open true})
          :test3 (with-meta '(with-meta '(map inc (range 7)) {:open true}) {:open true})
          :test1
            (with-meta
              '((fn [x] (list (rest x) (cons (read-string (first x)) [x])))
                (quote ["quote" fn [x] (list (rest x) (cons (read-string (first x)) [x]))])
               ) {:open true})
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
   ([s h] ; s isa map, h isa zip location of the history
    (default-state (push-history (assoc s
      :context (zip/up (find-first :test1 h))
      :focus (zip/up (zip/rightmost (zip/down h)))
      :selected #{3 4}
      :qwe 1 :poi "qwe") h) (latest-state h) nil)
   )
   ([h latest w]
    (push-history (assoc (latest-state h)
     :focus (zip/next (zip/next (:context (latest-state h))))
     :selected
      #{
        (-> (:context (latest-state h)) zip/next zip/next zip/next zip/next)
        (-> (:context (latest-state h)) zip/next zip/next zip/next zip/next zip/next)
        (-> (:context (latest-state h)) zip/down zip/right zip/down zip/right zip/down zip/right zip/right)
        (-> (:context (latest-state h)) zip/down zip/right zip/down zip/right zip/down zip/right zip/right zip/right)
       }
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

(comment
(defn IDL-match [[f & r]]
   (m/match [f]
            ["//"] {:comment (apply str r)}
            ["typedef"] {:typedef 123}
            :else []
            )
   )

   (defn parseIDL
  ([] (parseIDL "https://www.khronos.org/registry/webgl/specs/1.0/webgl.idl"))
  ([url] (parseIDL url (slurp url)))
  ([url idl]
   (parseIDL url idl
    (->>
      idl
      (partition-by (-_ = \newline))
      (map (-_ partition-by (-_ = \space)))
      (map (-_ map (-_ apply str)))
      ))
  )
  ([url idl idls]
    {
      :header (filter (-+ (-_ = "//") first) idls)
      :typedefs (filter (-+ (-_ = "typedef") first) idls)
      :blocks (partition-by (-+ (-_ = "};") first) idls)
      :idls idls
      :idl idl
      :url url
    }
  )
)
   )

