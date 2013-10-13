(ns iiiiioiooooo.style
  (:require
    ;[domina.css :as domcss]
    ;[domina.events :as dov]
    ;[domina :as dom]
  )
)

(defn rule
  ([]
    {"li"
     {
      :list-style-type "none"
      :display "-webkit-flex -moz-flex -ms-flex -o-flex flex"
      :-moz-border-radius "4px"
      :-webkit-border-radius "4px"
      :border-radius "4px"
      :border "1px dotted invisible"
      }
    }
  )
  ([v]
   (str (key (first v)) "{" (apply str (map (fn [[k v]] (str (str (name k) ":") v)) (val (first v))))  "}")
  )
)

(defn make-stylesheet!
  ([] (make-stylesheet! (. js/document createElement "style")))
  ([e]
    (.log js/console (rule))
    (set! (.-type e) "text/css")
    (set! (.-rel e) "stylesheet")
    (set! (.-media e) "screen")
    (set! (.-title e) "ui")
    ;(dom/append! (domcss/sel "head")  e)
    (. (aget (.-styleSheets js/document) 0) insertRule (rule) 0)
    e
  )
)

