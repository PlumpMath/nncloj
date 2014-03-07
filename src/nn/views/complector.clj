(ns nn.views.complector
  (:require
            [nn.views.css :as css]
            [nn.views.html :as page]
            ))
(defn xp []
  (page/experiment-page css/xp))
