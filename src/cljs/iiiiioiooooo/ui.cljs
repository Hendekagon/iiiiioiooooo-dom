(ns iiiiioiooooo.ui
  (:require-macros [cljs.env.macros :refer [ensure]])
  (:require
    [iiiiioiooooo.core.structure :as s]
    [clojure.browser.event]
    [goog.events.KeyHandler]
    [goog.events.KeyCodes]
    [cljs.analyzer :as ana]
    [cljs.compiler :as compiler]
    [cljs.reader :as reader]
    [cljs.js :as cljs]
    [clojure.browser.repl :as repl]
    [hipo.core :as hipo]
    [hipo.dom :as dom]
    [dommy.core :as dommy]
    [dommy.core :refer-macros [sel sel1]]
    ;[clojure.zip :as zip]
    [fast-zip.core :as zip]
    [garden.core :refer [css]]
    [garden.color :as color :refer [hsl rgb rgba]]
    )
)

(enable-console-print!)

;(repl/connect "http://localhost:9000/repl")

(def mouse (atom [0 0]))

(def events {
:mouseout
:DOMFocusOut
:focus
:mouseover
:touchcancel
:keyup
:pageshow
:scroll
:drop
:change
:pagehide
:mouseup
:keydown
:deactivate
:cut
:resize
:copy
:dragleave
:dragenter
:selectstart
:submit
:mousedown
:message
:error
:click
:dblclick
:DOMFocusIn
:select
:connect
:input
:touchend
:readystatechange
:hashchange
:unload
:dragstart
:popstate
:contextmenu
:help
:touchmove
:touchstart
:losecapture
:keypress
:paste
:propertychange
:load
:blur
:dragover
:mousemove})

(def alphabet
  {
    65		:a
    66		:b
    67		:c
    68		:d
    69		:e
    70		:f
    71		:g
    72		:h
    73		:i
    74		:j
    75		:k
    76		:l
    77		:m
    78		:n
    79		:o
    80		:p
    81		:q
    82		:r
    83		:s
    84		:t
    85		:u
    86		:v
    87		:w
    88		:x
    89		:y
    90		:z
    }

  )

(def numbers
  {48		:0
   49		:1
   50		:2
   51		:3
   52		:4
   53		:5
   54		:6
   55		:7
   56		:8
   57		:9}
)

(def space-keys
  {
      32 :space
      9 :tab
  }
)

(def other-keys
{
  8 :backspace
  13 :enter
  16 :shift
  17 :ctrl
  18 :alt
  19 :break
  20 :capslock
  27 :esc
  91 :leftmeta
  93 :rightmeta
  33 :pageup
  34 :pagedown
  35 :end
  36 :home
  37 :left
  38 :up
  39 :right
  40 :down
  45 :insert
  46 :delete
  144 :numlock
  145 :scrolllock
  188 :comma
  190 :dot
  191 :forwardslash
  192 :tilde
  219 :leftbracket
  220 :backslash
  221 :rightbracket
  222 :apostrophe

  ; http://www.javascripter.net/faq/keycodes.htm
  186 :semicolon
  59 :semicolon
  187 :equals
  107 :equals
  189 :minus
  109 :minus
}
)

; keycodes to keywords (name of key on keyboard)
; if the key has multiple synonyms, the shortest name first in alphabet is taken
(def keycode-to-keyword
  (merge
    space-keys
    other-keys
    alphabet
    numbers
  )
)

(def keyword-to-keycode
  (zipmap (vals keycode-to-keyword) (keys keycode-to-keyword))
)

(def keyword-to-string
  (merge
    (zipmap (vals alphabet) (map name (vals alphabet)))
    (zipmap (vals numbers) (map name (vals numbers)))
    {
      :space " "
      :comma ","
      :dot "."
      :forwardslash "/"
      :backslash "\\"
      :minus "-"
      :equals "="
      :semicolon ";"
      :apostrophe "'"
      :tilde "`"
      :leftbracket "["
      :rightbracket "]"
    }
  )
)

(def keycode-to-keyword-up (zipmap (keys keycode-to-keyword) (map (fn [k] (keyword (str (name k) "-up"))) (vals keycode-to-keyword))))
(def keycode-to-keyword-down (zipmap (keys keycode-to-keyword) (map (fn [k] (keyword (str (name k) "-down"))) (vals keycode-to-keyword))))

(defn is-modifier [keycode] (#{16 17 18 91 93 20} keycode))

(def isnt-modifier (complement is-modifier))

(defn log
  ([m] (.log js/console m))
  ([m1 m2] (.log js/console m1 m2))
  ([m1 m2 m3] (.log js/console m1 m2 m3))
  ([m1 m2 m3 m4] (.log js/console m1 m2 m3 m4))
  ([m1 m2 m3 m4 m5] (.log js/console m1 m2 m3 m4 m5))
)

(defn set-css!
([style]
  (if-let [s (. js/document (getElementById "sheet"))] (. (.-parentNode s) (removeChild s)))
  (let [s (. js/document (createElement "style"))] (.setAttribute s "id" "sheet") (. (.-body js/document) (appendChild s)))
  (set-css! (aget (.-styleSheets js/document) 0) (map css style))
  )
([stylesheet rules]
  ;(println ">>> " (str stylesheet) (str rules))
  ;(doall (map (fn [index] (.. stylesheet (deleteRule (aget (.-rules stylesheet) index)))) (range (.-length (.-rules stylesheet)))))
  (log stylesheet)
   (doall (map
      (fn [rule index]
        (.. stylesheet (insertRule rule index))) rules (range)))
  nil
)
)

(defn to-str [n]
  (cond
    (and (fn? n) (not (associative? n))) (.replace (.-name n) \_ \-)
    :default (str n)
  )
)

(defn to-svg
  ([[x y n]]
   [:g {:class "leaf"}
     [:circle {
              :cx           (if (number? x) (* 20 x) 0)
              :cy           (if (number? n) (* 20 n) 0)
              :r 8
              }]
              ]
  )
  ([loc children]
    (apply
      conj
      (if (and (meta (zip/node loc)) (= :to-svg (:render-fn (meta (zip/node loc)))))
        [:svg
            {
              :width "2000"
              :height "1000"
              :class "sexp"
            }]
        [:g {:class     "sexp"
             :transform "translate(10,20)"
            }])
      children)
  )
  ([n oiuoi c] [:g {:class (str "sexp folded " n) }])
  ([] [:g {:class "sexp" :transform "translate(50,50) scale(0.5)"}])
)

(defn kw2css [kw] (name kw))

(defn to-html
  ([[x y n]]
    (conj [:div {:class (str "leaf " (s/typee n))}] (to-str n) ))
  ([n c] (apply conj [:div {:class
                            (str "sexp " (s/typee (zip/node n)) " "
                                 (cond (meta (zip/node n))
                                  (if-let [s (:dtype (meta (zip/node n)))] (kw2css s))) " "
                                 (if-let [p (zip/down n)]
                                   (s/typee (zip/node p)) ""))}] c))
  ([n oiuoi c] [:div {:class (str "sexp folded " n)}])
  ([] [:div {:class "sexp"}])
)

(defn selector [p]
  (str "body " (apply str (map  {:v " > *:first-child " :> " + *"} p)))
)

(defn set-attrs! [s a]
  (doseq [e s] (apply (partial dommy/set-attr! e) a))
)

(defn filter-ast [l]
  (let [n (zip/node l)]
    ;(.log js/console "> " (list? n) (seq? n) (seqable? n) (vector? n) (implements? IMapEntry n))
    (not (and (implements? IMapEntry n) (#{:env :ret :f :args :children :tag} (key n))))
  )
)

(defn update-element!
  ([context] (update-element! context context context))
  ([context new old]
   (let [e (sel1 (selector (s/path context old)))]
     ;(println "replacing " e (zip/node old) " with " (zip/node new))
     (cond e
      (dommy/replace!
        e
        (hipo/create
          (first
            ((s/make-translate identity) 16 16
                         {:to-svg to-svg}
                         to-html new)))
        )))
   new)
)

(defn select-state!
  ([s]
    ;(println "context: " (str (keys s)))
    (select-state! s (map (comp selector (partial s/path (:context s))) (:selected s))))
  ([s paths]
    (select-state! s paths (sel paths) (sel1 (selector (s/path (:context s) (:focus s))))))
  ([s paths selections focus]
    ;(println "selected " (.-namespaceURI focus))
    (doall (map (fn [q] (dommy/remove-class! q "selected")) (sel ".selected")))
    ;(doseq [selection selections] (cond selection (dommy/add-class! selection "selected")))
    (cond focus
          (do
            (dommy/add-class! focus "selected")
            (cond (= "http://www.w3.org/1999/xhtml" (.-namespaceURI focus))
                  (do (.scrollIntoView focus)
                      (set! (.-scrollTop (.-body js/document)) (- (.. js/document -body -scrollTop) (* 0.125 (.-availHeight js/screen))))
                  ))
            ))
  )
)

(def update-ui-fn
  {
   :select (fn [o n] (select-state! n))
   :modify (fn [o s]
             (update-element!
               (:context o)
               ((:post-modf s) (:focus s))
               (if (:modified s) ((:post-modf s) (:modified s)) (:focus s))
               )
             (select-state! s)
             )
   }
)

(defn display-with-latest [o n]
  (((:action n) update-ui-fn) o n)
)

(defn do-eval-! [x n]
  (let [
         env (:env x)
        ;p (log "env " env)
         ;p (log "> " (str (ensure (ana/resolve-var env 'garden.color/rgb))))
         a (ensure (ana/analyze env n))
        ;p (log "ana " a)
         j (compiler/emit-str a)
         ; p (log "js  " j)
         res (try (js/eval j) (catch js/Error e (do (log e) {:error e})))
       ]
   res)
)

(defn do-eval [x]
(println "eval")
  (s/modified x
              (fn [l]
                ;(log "evaluating! " (str (zip/node (f l))))
                (zip/replace l
                             ;"qwe"
                             (let [
                                   n (zip/node l)
                                   env (:env x)
                                   ;p (log "env " env)
                                   ;p (log "> " (str (ensure (ana/resolve-var env 'garden.color/rgb))))
                                   a (ensure (ana/analyze env n))
                                   ;p (log "ana " a)
                                   j (compiler/emit-str a)
                                   ; p (log "js  " j)
                                   res (try (js/eval j) (catch js/Error e (do (log e) {:error e})))
                                   ]
                               (if res [n res] n))
                             ;(cljs/eval (cljs/empty-env) '(+ 1 2))
                             )))
          )


(defn add-thing [s]
  (let [
          y (s/seq-map-zip (ensure (ana/analyze (get s :env) (zip/node (:focus s)))))
        ]
        (s/update-state s :no-event
                   (fn [x]
                     (assoc x :focus y :context y)
                     )))
)

(defn add-eval [s]
   (s/update-state s :no-event
    (fn [x]
      (assoc-in
        (assoc-in (assoc x :env (assoc (ana/empty-env)
                                 :context :expr
                                 :ns {:requires #{'cljs.core 'iiiiioiooooo.ui 'garden.color 'garden.units 'iiiiioiooooo.structure}}
                                 ))
                 [:keymap :alt :enter :enter] do-eval)
                 [:keymap :ctrl :1 :1] (fn [ss] (println "eval 1") (do-eval (assoc ss :focus (get-in ss [:eval :1])))))
   ))
)

(defn add-keys [s]
   (s/update-state s :no-event
    (fn [x]
      (s/push-history
        (s/add-all-keys
        x
        keyword-to-string))
   ))
)

(defn add-info [s]
  (s/update-state s :no-event
  (fn [s]
      (s/push-history
        (assoc-in s [:keymap :shift :forwardslash :forwardslash]
          (fn [s] (log "meta: " (str (meta (zip/node (:focus s))))) s)))))
)

(defn add-render-fns [s]
  (s/update-state s :no-event
  (fn [ss]
      (log (:render-fns ss))
      (s/push-history
        (assoc-in
          (assoc-in ss [:render-fns :to-svg] to-svg)
          [:render-fns :to-html] to-html)
        ))))

;#root>li:first-child >ul:first-child>li:first-child + li >ul:first-child>li:first-child + li >ul:first-child>li:first-child

;event.initKeyEvent (type, bubbles, cancelable, viewArg,
;                     ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
;                     keyCodeArg, charCodeArg)
(defn keydown [state e]
  ;(.log  js/console "kd> " (str (keycode-to-keyword (.-keyCode e))) (.-keyCode e))
  (. e preventDefault)
  (s/update! state {:key (keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keydown})
  ;(log (str (:keymap @state)))
)

(defn keyup [state e]
  ;(.log  js/console "ku> " (str (:keypath @state)) (str (keycode-to-keyword (.-keyCode e))) (.-keyCode e))
  (s/update! state {:key (keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keyup})
)

(defn make-ui
  ([] (make-ui {}))
  ([e] (make-ui e (atom (add-render-fns (add-keys (add-eval (s/default-state)))))))
  ([e state]
    (log "make ui ")
    ;(log "> " (str (:op (ensure (ana/analyze (:env @state) '(list (fn [x] x) [1 2 3 "qwe"]))))))
    ;(log "> " (str (zip/node (:focus @state))))
    (do-eval-! @state (:style @state))
    (set! (.-onkeydown js/window) (fn [e] (keydown state e)))
    (set! (.-onkeyup js/window) (fn [e] (keyup state e)))
    (set! (.-onfocus js/window) (fn [e] (swap! state (fn [s] (s/update-state s :no-event
                                         (fn [s] (s/reset-keypath s))))) nil))
    (set! (.-onblur   js/window) (fn [e] (swap! state (fn [s] (s/update-state s :no-event
                                          (fn [s] (s/reset-keypath s))))) nil))
    (update-element! (:context @state))
    (add-watch state :update-display
      (fn [k r o n]
        (display-with-latest o n)
      ))
  )
)

(defn test-state [] (.log js/console (s/default-state)))
