(defproject iiiiioiooooo "1.0"
  :dependencies
  [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/core.logic "0.7.5"]
    [criterium "0.3.1"]
    [prismatic/dommy "0.1.1"]
    [incanter "1.5.0-SNAPSHOT"]
    ;[aleph "0.3.0-beta14"]
    ;[cljs-web-audio "0.1.0-SNAPSHOT"]
    [compojure "1.1.1"]
  ]
  :plugins [[lein-cljsbuild "0.2.8"]]
  :source-paths ["./src/clj"]
  :cljsbuild
  {
   :crossovers [iiiiioiooooo.core]
   :builds {:dev
            {
              :source-path "./src/cljs"
              :compiler
              {
                :incremental true
                :crossover-path "cljs"
                ;:output-dir "./public/js/"
                :output-to "./public/js/iiiiioiooooo.js"  ; default: main.js in current directory
                :optimizations :whitespace
                :pretty-print true
                          }
            }
            }
   }
:jvm-opts ["-Xms256m" "-Xmx1g"]
)

;TypeError: node.webkitMatchesSelector is not a function
;Break On This Error]

;return node.webkitMatchesSelector(selector)

;c2.dom.matches_selector_QMARK_ = function matches_selector_QMARK_(node, selector) {
;  return node.webkitMatchesSelector(selector)
;  };