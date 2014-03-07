(ns nn.views.html
  (:require [hiccup.page :as html]
            [hiccup.element :as element]
   ))

(defn head-boiler [title css]
  [:head [:title title]
   [:meta {:name "viewport"
           :http-equiv "Content-type"
           :content "width=device-width, initial-scale=1.0"}]
   [:style css]
   ]
  )


(defn experiment-page [css]
  (html/html5
   (head-boiler "the new obvious" css)
   [:body.full
    [:div#menu.full]
    (html/include-js "http://fb.me/react-0.8.0.js")
    (html/include-js "/javascripts/menu/out/goog/base.js")
    (html/include-js "/javascripts/menu/menu.js")
    (element/javascript-tag "goog.require('nn.menu')")]))
