(ns iiiiioiooooo.ui
  (:require
    [iiiiioiooooo.core.structure :as s]
    [clojure.browser.event]
    [goog.events.KeyHandler]
    [goog.events.KeyCodes]
    [clojure.zip :as zip]
    ;[cljs.analyzer :as ana]
    ;[cljs.compiler :as compiler]
    ;[cljs.reader :as reader]
    [hipo.core :as hipo]
    [hipo.dom :as dom]
    [dommy.core :as dommy]
    [dommy.core :refer-macros [sel sel1]]
    [clojure.zip :as zip])
)

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

; keycodes to keywords (name of key on keyboard)
; if the key has multiple synonyms, the shortest name first in alphabet is taken
(def keycode-to-keyword
(merge
{
8 :backspace
9 :tab
13 :enter
16 :shift
17 :ctrl
18 :alt
19 :break
20 :capslock
27 :esc
91 :leftmeta
93 :rightmeta
32 :space
33 :pageup
34 :pagedown
35		:end
36		:home
37		:left
38	  :up
39		:right
40		:down
45		:insert
46		:delete

144 :numlock
145 :scrolllock
188 :comma
190 :dot
191 :forwardslash
192 :tilde
219 :leftbracket
220 :backslash
221 :rightbracket
222 ::apostrophe

; http://www.javascripter.net/faq/keycodes.htm
186 :semicolon
59 :semicolon
187 :equals
107 :equals
189 :minus
109 :minus
}
alphabet
numbers
)
)

(def keycode-to-keyword-up (zipmap (keys keycode-to-keyword) (map (fn [k] (keyword (str (name k) "-up"))) (vals keycode-to-keyword))))
(def keycode-to-keyword-down (zipmap (keys keycode-to-keyword) (map (fn [k] (keyword (str (name k) "-down"))) (vals keycode-to-keyword))))

(defn is-modifier [keycode] (#{16 17 18 91 93 20} keycode))

(def isnt-modifier (complement is-modifier))

(defn log
  ([m] (.log js/console m))
  ;([& m] (.log js/console m))
  ([m1 m2] (.log js/console m1 m2))
  ([m1 m2 m3] (.log js/console m1 m2 m3))
  ([m1 m2 m3 m4] (.log js/console m1 m2 m3 m4))
)

(defn to-str [n]
  (cond
    (and (fn? n) (not (associative? n))) (.replace (.-name n) \_ \-)
    :default (str n)
  )
)

(defn to-svg
  ([[x y n]]
    [:circle {:stroke       "blue"
              :stroke-width 1 :fill "red"
              :cx            x :cy (if (number? n) n 0) :r 8
              }]
  )
  ([loc children]
    (apply
      conj
      (if (and (meta (zip/node (zip/up loc))) (= :to-svg (:render-fn (meta (zip/node (zip/up loc))))))
        [:svg
            {
              :width "2000"
              :height "1000"
            }]
        [:g {:class     "branch"
            :transform "translate(50,100) scale(0.9) "
            }])
      children)
  )
  ([n oiuoi c] [:g {:class (str "branch folded " n) }])
  ([] [:g {:class "sexp" :transform "translate(50,50) scale(0.5)"}])
)

(defn to-html
  ([[x y n]]
    (conj [:div {:class (str "leaf "
    (cond
      (fn? n) "fn "
      (string? n) "string "
      (keyword? n) "keyword "
    ) )}] (to-str n) ))
  ([n c] (apply conj [:div {:class (str "branch " (s/typee (zip/node (zip/down n))))}] c))
  ([n oiuoi c] [:div {:class (str "branch folded " n)}])
  ([] [:div {:class "sexp"}])
)

(defn selector [p]
  (str "#root " (apply str (map  {:v " > div:first-child " :> " + div"} p)))
)

(defn replacement-selector
  ([p]
    (replacement-selector "#root "
      (apply str (map  {:v " > div:first-child " :> " + div"} p)))
  )
  ([s ps]
    ;(log ">>> rsel " ps)
    (str s ps))
)

(defn set-attrs! [s a]
  (doseq [e s] (apply (partial dommy/set-attr! e) a))
)

(defn update-element!
  ([context] (update-element! context context context))
  ([context new old]
    ;(log "replace " (:render-fns (s/latest-state context)))
      (dommy/replace!
        (sel1 (replacement-selector (s/path context old)))
        (hipo/create
          (first
            (s/translate 32 32
              {:to-svg to-svg}
              to-html new)))
      )
   new)
)

(defn select-state!
  ([s] (select-state! s (map (comp selector (partial s/path (:context s))) (:selected s))))
  ([s paths]
    (select-state! s paths (sel paths) (sel1 (selector (s/path (:context s) (:focus s))))))
  ([s paths selections focus]
    (last (map (fn [q] (dommy/remove-class! q "selected")) (sel ".selected")))
    (last (map (fn [q] (dommy/remove-class! q "selected-parent")) (sel ".selected-parent")))
    (doseq [selection selections]
        (cond selection (dommy/add-class! selection "selected"))
    )
    ;(set-attrs! selections [:transform "translate(40,70) scale(1.5)"])
    (cond focus (dommy/add-class! focus "selected"))
  )
)

(def update-ui-fn
  {
    :select select-state!
    :modify (fn [s]
               (update-element!
                (:context s)
                (:focus s)
                (if (:modified s) (:modified s) (:focus s))
               )
               (select-state! s)
            )
  }
)

(defn display-with-latest [n]
  (((:action n) update-ui-fn) n)
)

(defn add-eval [s]
   (s/update-state s (s/latest-state s) nil
    (fn [s x]
     (s/push-history
        (assoc-in x
          [:keymap :e :e]
          (fn [s x]
            (s/modified x
            (fn [l] ;hmm, should this be returning a zipper (see forward-zipper)
              (log "evaluating! " (str (zip/node l)))
              (zip/insert-right l
                "qwe"
                ;(js/eval (compiler/emit-str (ana/analyze (assoc (ana/empty-env) :context :expr) (zip/node l))))
                )))
          )
        )
     s)
   ))
)

(defn add-info [s]
  (s/update-state s (s/latest-state s) nil
    (fn [s x]
      (s/push-history
        (assoc-in x [:keymap :shift :forwardslash :forwardslash]
          (fn [s x] (log "meta: " (str (meta (zip/node (:focus x))))) x)) s)))
)

(defn add-render-fns [h]
  (s/update-state h (s/latest-state h) :qwe
    (fn [hh ss]
      (log (:render-fns ss))
      (s/push-history
        (assoc-in
          (assoc-in ss [:render-fns :to-svg] to-svg)
          [:render-fns :to-html] to-html)
        h)))
)

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
  ;(.log  js/console "ku> " (str (keycode-to-keyword (.-keyCode e))) (.-keyCode e))
  (s/update! state {:key (keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keyup})
)

(defn make-ui
  ([] (make-ui {}))
  ([e] (make-ui e (atom (add-render-fns (s/default-state)))))
  ([e state]
    (log "make ui")
    (set! (.-onkeydown js/window) (fn [e] (keydown state e)))
    (set! (.-onkeyup js/window) (fn [e] (keyup state e)))
    (update-element! (:context (s/latest-state @state)))
    (add-watch state :update-display
      (fn [k r o n]
        (display-with-latest (s/latest-state n))
      ))
  )
)

(defn test-state [] (.log js/console (s/default-state)))
