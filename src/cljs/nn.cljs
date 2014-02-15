(ns nn.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [nn.utils.input :as input]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]

            [nn.render :as render]
            [nn.game-logic :as game]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           ))

(enable-console-print!)



(defn init
  "Initialize the UI by initializing the user input, adapting the canvas
  and starting the render loop."
  []
  (let [commands (chan)
        notifos (game/init commands)]
    (input/init-events! commands)
    (render/render-loop! notifos)
    (put! commands [:init])
    (print "hey")
    ))

(init)




