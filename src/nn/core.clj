(ns nn.core
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :refer [file-response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [clojure.core.async :refer [chan <! >! put! close! go-loop go]]
            [org.httpkit.server :as http-kit]
            [ring.middleware.reload :as reload]
            [hiccup.page :as html]
            [hiccup.element :as element]
            [ring.util.response :as resp]))

(defn main-page []
  (html/html5
   [:head
    [:title "depth in field"]
    [:style "html {height: 100%; width: 100%}"]
    ]
   [:body {:style "display: flex; justify-content: center; align-items: center; height: 100%; background: black; flex-flow: column;"}
    [:video {:autoplay "autoplay" :src "/nnphone.mp4"}]
    [:span {:style "color: white"} "coming in terms eventual"]]))

(defroutes nroutes
  (GET "/" [] (resp/response (main-page)))
  (route/resources "/" {:root "public"}))

(def app (-> nroutes wrap-edn-params reload/wrap-reload))

(defn -main
  ([port]
    (let [Port (Integer/parseInt port)]
      (println "server running w/ port" port)
      (http-kit/run-server app {:port Port})))
  ([]
   (let [strPort (System/getenv "PORT")
         Port (Integer/parseInt strPort)]
     (println "we're running on:" strPort)
     (http-kit/run-server app {:port Port}))))
