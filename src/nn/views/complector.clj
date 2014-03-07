(ns nn.views.complector
  (:require
            [nn.views.css :as css]
            [nn.views.html :as page]
            ))

(defn main-page []
  (page/main-page))

(defn xp []
  (page/experiment-page css/xp))
