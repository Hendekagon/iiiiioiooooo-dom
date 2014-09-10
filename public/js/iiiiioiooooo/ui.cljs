(ns iiiiioiooooo.ui
  (:require
    [iiiiioiooooo.core.structure :as structure]
    [clojure.browser.event]
    [goog.events.KeyHandler]
    [goog.events.KeyCodes]
    [clojure.zip :as zip]
    [cljs.core.match]
    ;[cljs.analyzer :as ana]
    ;[cljs.compiler :as compiler]
    ;[cljs.reader :as reader]
    [dommy.core :as dommy]
    [dommy.template :as template]
    ;[cljs-web-audio.core :as audio]
    ;[cljs-web-audio.core-test :as at]
  )
  (:use-macros [dommy.macros :only [sel sel1 node]])
    (:require-macros [cljs.core.match.macros :refer [match]])
)

(def mouse (atom [0 0]))

(def pi 3.1415926)

(def pi2 (* 2 pi))

(def pi4 (/ pi 4))

(def events
  {
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
  :mousemove
  }
)

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

(def f partial)

(def k comp)

(defn is-modifier [keycode] (#{16 17 18 91 93 20} keycode))

(def isnt-modifier (complement is-modifier))

(defn if-firefox [a b]
  (try
    (cond js/KeyEvent
      a
      )
    (catch js/Error er
      b
    )
  )
)

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

(defn maybe [f x] (if x (f x) x))

(defn add-eval [s]
   (structure/update s (structure/latest-state s) nil
    (fn [s x]
     (structure/push-history
        (assoc-in x
          [:keymap :e :e]
          (fn [s x]
            (structure/modified x
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
  (structure/update s (structure/latest-state s) nil
      (fn [s x]
        (structure/push-history
          (assoc-in x [:keymap :shift :forwardslash :forwardslash]
            (fn [s x] (log "meta: " (str (meta (zip/node (:focus x))))) x)) s)))
)

;#root>li:first-child >ul:first-child>li:first-child + li >ul:first-child>li:first-child + li >ul:first-child>li:first-child

;event.initKeyEvent (type, bubbles, cancelable, viewArg,
;                     ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
;                     keyCodeArg, charCodeArg)
(defn keydown [state e]
  ;(.log  js/console "kd> " (str (keycode-to-keyword (.-keyCode e))) (.-keyCode e))
  (. e preventDefault)
  (structure/update! state { :key (keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keydown})
  ;(log (str (:keymap @state)))
)

(defn keyup [state e]
  ;(.log  js/console "ku> " (str (keycode-to-keyword (.-keyCode e))) (.-keyCode e))
  (structure/update! state { :key (keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keyup})
)

(defn create-image-data [context w h] (. context createImageData w h))

(defn put-image-data!
  ([context image-data x y] (. context putImageData image-data x y))
  ([context image-data] (put-image-data! context image-data 0 0))
)

(defn context
  "Make a context and image-data from the given canvas element"
  ([] (context (sel1 :canvas)))
  ([canvas] (context canvas (. canvas getContext "2d")) )
  ([canvas context]
    {
      :canvas canvas :context context
      :w (.-width canvas) :h (.-height canvas)
      :image-data (create-image-data context (.-width canvas) (.-height canvas))
    }
  )
)

(defn rt [c w h direction node type r [tx ty] focality]
  (match [direction node type focality]
    [:_ _ _ :focus] [(. c setTransform 1 0 0 1 0 0) (. c clearRect 0 0 w h) (. c scale 2 2) (. c translate tx ty) (. c rotate r) (. c save)]
    [:v 'list _ :focus] [(. c closePath) (. c translate 0 30) (. c rotate pi4) (. c scale 0.97 0.97) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 80 40)]
    [:v 'map _ :focus] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 0.97 0.97) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 160 40)]
    [:v 'vector _ :focus] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 1.1 1.1) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 160 40)]
    [_ _ :number :focus] [(. c translate 21 0) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 10 10)]
    [_ _ :string :focus] [(. c translate 21 0) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 10 10)]
    [_ _ :zipper :focus] [(. c translate 21 0) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 10 1000)]
    [:v _ _ :focus] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 0.97 0.97) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 40 40)]
    [:> _ _ :focus] [(. c translate 21 0) (. c rotate 0) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 20 20)]
    [:A _ _ :focus] [(. c restore) (. c translate 40 0) (. c rotate (* -1 pi4)) (set! c -fillStyle "rgba(100,230,255,0.8)") (. c fillRect 0 0 20 40)]

    [:_ _ _ _] [(. c setTransform 1 0 0 1 0 0) (. c clearRect 0 0 w h) (. c scale 2 2) (. c translate tx ty) (. c rotate r) (. c save)]
    [:v 'list _ _] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 0.97 0.97) (set! c -fillStyle "rgba(100,200,255,0.3)") (. c fillRect 0 0 80 40)]
    [:v 'map _ _] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 0.97 0.97) (set! c -fillStyle "rgba(10,50,150,0.3)") (. c fillRect 0 0 160 40)]
    [:v 'vector _ _] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 1.1 1.1) (set! c -fillStyle "rgba(10,50,250,0.3)") (. c fillRect 0 0 160 40)]
    [_ _ :number _] [(. c translate 21 0) (set! c -fillStyle "rgba(0,0,100,0.99)") (. c fillRect 0 0 10 10)]
    [_ _ :string _] [(. c translate 21 0) (set! c -fillStyle "rgba(255,255,0,0.99)") (. c fillRect 0 0 10 10)]
    [_ _ :zipper _] [(. c translate 21 0) (set! c -fillStyle "rgba(0,100,255,0.8)") (. c fillRect 0 0 10 1000)]
    [:v _ _ _] [(. c save) (. c translate 0 30) (. c rotate pi4) (. c scale 0.97 0.97) (set! c -fillStyle "rgba(255,0,0,0.3)") (. c fillRect 0 0 40 40)]
    [:> _ _ _] [(. c translate 21 0) (. c rotate 0) (set! c -fillStyle "rgba(255,200,0,0.5)") (. c fillRect 0 0 20 20)]
    [:A _ _ _] [(. c restore) (. c translate 40 0) (. c rotate (* -1 pi4)) (set! c -fillStyle "rgba(100,50,250,0.5)") (. c fillRect 0 0 20 40)]

    :else []
  )
)

(defn show [{{c :context w :w h :h} :ui r :rotation trans :translation root :context focus :focus selected :selected}]
  ;(dorun [(. c setTransform 1 0 0 1 0 0) (. c rotate 7.3) (. c clearRect 0 0 w h) (. c save)])
  (log (apply str (take 16 (str (zip/node focus)))))
  ;(dorun (map log (map str (structure/r* root))))
  (dorun
    (mapcat
      (fn [[l d]]
        ;(log (= focus l) );(apply str (take 16 (str (zip/node l)))))
        (rt c w h d (zip/node l) (structure/type-str (zip/node l)) r trans (if (= focus l) :focus :else))
      )
    (structure/ree root)))
)

(defn show-update [s]
  (show (assoc s :context (:context s)))
)

(defn test-pattern [{{c :context w :w h :h} :ui}]
  (dorun [(. c setTransform 1 0 0 1 0 0) (. c clearRect 0 0 w h) (. c save)])
  (doall (mapcat (partial rt c w h) [:v :> :> :> :v :> :> :> :> :A :> :> :>]))
)

(defn add-ui [s ui]
  (structure/update s (structure/latest-state s) :no-event
    (fn [s x]
      (structure/push-history
        (assoc x :ui ui) s)))
)

(defn make-ui
  "Display the app state when it changes. Think I might change this
  to store the display state in a separate atom, so that the display code
  can be optimized by only updating changed elements"
  ([e]
    (dommy/append! (sel1 :body) [:canvas {:width 1024 :height 1024 :id :canvas}])
    (make-ui e
      (atom
        ;(add-eval (add-info (structure/default-state)))
        (add-ui (structure/default-state) (context))
        )))
  ([e state]
    (log "make ui")
    (set! (.-onkeydown js/window) (fn [e] (keydown state e)))
    (set! (.-onkeyup js/window) (fn [e] (keyup state e)))
    (show (structure/latest-state @state))
    ;(test-pattern (structure/latest-state @state))
    (add-watch state :update-display (fn [k r o n] (show-update (structure/latest-state n))))
  )
)

(make-ui nil)
