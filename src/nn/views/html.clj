(ns nn.views.html
  (:require [hiccup.page :as html]
            [hiccup.element :as element]
   ))

(defn main-page []
  (html/html5
   [:head
    [:title "depth in field"]

    ]
   [:body
    [:canvas#grid {:width "800" :height "800"}]
    [:span "coming in terms eventual forever"]]
   (html/include-js "/javascripts/nn.js")

   ))


(defn experiment-page [css]
  (html/html5
   [:head
    [:title "future"]
    [:style css]]
   [:body.full
    [:div#menu.full]
    (html/include-js "http://fb.me/react-0.8.0.js")
    #_(html/include-js "/javascripts/menu/out/goog/base.js")
    (html/include-js "/javascripts/menu/menu.js")
    #_(element/javascript-tag "goog.require('nn.menu')")]))
