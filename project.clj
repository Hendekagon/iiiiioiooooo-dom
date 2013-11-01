(defproject iiiiioiooooo "1.0"
  :dependencies
  [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/core.logic "0.8.4"]
    [org.clojure/core.match "0.2.0"]
    [criterium "0.3.1"]
    [prismatic/dommy "0.1.3-SNAPSHOT"]
    [incanter "1.5.0-SNAPSHOT"]
    ;[cljs-web-audio "0.1.0-SNAPSHOT"]
    [compojure "1.1.1"]
    [org.clojure/clojurescript "0.0-1978"]
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
:jvm-opts ["-Xms256m" "-Xmx1g"]
)