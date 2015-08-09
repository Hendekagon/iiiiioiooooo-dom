 (ns iiiiioiooooo.build
 	(:require
 		[cljs.build.api :as cljs]
 		)
 )

(defn build []
	(cljs/build "src"
	{
									:source-map      "public/js/main.js.map"
									:source-map-path "js"
									:output-to       "public/js/main.js"
									:output-dir      "public/js"
									:asset-path      "js"
									:optimizations   :none
									:main            "iiiiioiooooo.main"
									:pretty-print    true
									}))
