(ns nn.views.html
  (:require [hiccup.page :as html]
            [hiccup.element :as element]
   ))

(defn head-boiler [title css]
  [:head [:title title]
   [:meta {:name "viewport"
           :http-equiv "Content-type"
           :content "width=device-width, user-scalable=no"}]
   [:style css]
   ]
  )


(defn experiment-page [css]
  (html/html5
   (conj (head-boiler "the new obvious" css)
         (html/include-js "//cdnjs.cloudflare.com/ajax/libs/fastclick/0.6.11/fastclick.min.js")
         (element/javascript-tag "window.addEventListener('load', function() {
                                 FastClick.attach(document.body);
                                 }, false);"))
   [:body.full
    [:div#menu.full]


    (html/include-js "http://fb.me/react-0.8.0.js")
    (html/include-js "/javascripts/menu/out/goog/base.js")
    (html/include-js "/javascripts/menu/menu.js")
    (element/javascript-tag "goog.require('nn.menu')")]))
