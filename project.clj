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
    [org.clojure/clojurescript "0.0-1889"]
  ]
  :plugins [[lein-cljsbuild "0.3.3"]]
  :source-paths ["./src/clj"]
  :cljsbuild
  {:builds
   [{:source-paths ["./src/cljs"],
     :id "dev",
     :compiler
     {:pretty-print true,
      :output-dir "./public/js/"
      :output-to "./public/js/iiiiioiooooo.js",
      :incremental true,
      :crossover-path "cljs",
      :source-map "main.js.map"
      :optimizations :advanced}
      }],
   :crossovers [iiiiioiooooo.core]
  }
:jvm-opts ["-Xms256m" "-Xmx1g"]
)