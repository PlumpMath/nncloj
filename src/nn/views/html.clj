(ns nn.views.html
  (:require [hiccup.page :as html]
            [hiccup.element :as element]
   ))

(defn cljs [space name]
  (conj
   '()
   (element/javascript-tag (str "goog.require('" space "." name "')"))
    (html/include-js  (str "/javascripts/" name "/" name ".js"))
   (html/include-js (str "/javascripts/" name "/out/goog/base.js"))
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
   (conj (head-boiler "the new obvious" css)
         (html/include-js "//cdnjs.cloudflare.com/ajax/libs/fastclick/0.6.11/fastclick.min.js")
         (element/javascript-tag "window.addEventListener('load', function() {
                                 FastClick.attach(document.body);
                                 }, false);"))
   [:body.full
    #_[:div#menu.full]
    [:div#svg.full]


    (html/include-js "http://fb.me/react-0.8.0.js")
    (cljs "nn" "nn")
    (comment
      (cljs "nn" "aboutus")
      (cljs "nn" "vidwid"))]))
