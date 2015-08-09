(ns iiiiioiooooo.repl
	(:require
	[cljs.repl :as r]
	[cljs.repl.browser :as b]
	[aleph.http :as http]
	[ring.middleware.params :as params]
		[ring.middleware.resource :as rs]
		[ring.middleware.file :as rf]
		[ring.middleware.content-type :as rct]
		[compojure.route :as route]
		[compojure.core :as compojure :refer [GET]]
	)
)

(defn start-repl []
	(r/repl (b/repl-env)
				 :watch "src"
				 :output-dir "public/js"))

(defn start-server []
		(http/start-server
								 (->
									 (compojure/routes
										 (route/not-found {:status 404 :body "404"})
										 )
									 (params/wrap-params)
									 (rf/wrap-file "public")
									 (rct/wrap-content-type)
									 ) {:port 8080}))

(start-server)
(start-repl)