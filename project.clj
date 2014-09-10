(defproject iiiiioiooooo "1.0.0"
  :dependencies
  [
    [org.clojure/clojure "1.6.0"]
    [org.clojure/core.logic "0.8.4"]
    [org.clojure/core.match "0.2.0"]
    [criterium "0.3.1"]
    [prismatic/dommy "0.1.3-SNAPSHOT"]
    [org.clojure/clojurescript "0.0-2322"]
  ]
  :plugins [[lein-cljsbuild "0.3.4"]]
  :source-paths ["./src/clj"]
  :cljsbuild
  {:builds
   [
    {:source-paths ["./src/cljs"]
     :id "dev"
     :compiler
       {
        :pretty-print false
        :output-dir "./public/js/"
        :output-to "./public/js/iiiiioiooooo.js"
        :crossover-path "cljs"
        :source-map true
        :optimizations :none
       }
     }
    ]
   :crossovers [iiiiioiooooo.core]
  }
)