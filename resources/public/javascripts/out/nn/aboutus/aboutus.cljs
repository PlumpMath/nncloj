(ns nn.aboutus.aboutus
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [>! <! put! chan sliding-buffer]]
   [om.core :as om :include-macros true]
   [cljs.reader :as reader]
   [om-sync.util :refer [tx-tag edn-xhr]]
   [goog.dom :as gdom]
   [goog.debug :as debug]
   [goog.events :as events]
   [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn svg [app owner]
  (om/component
   (dom/svg nil
                   (dom/rect #js {:x 10
                                  :y 10
                                  :height 100
                                  :width 100
                                  :className "full"
                                  :style #js {:stroke "red"
                                              :fill "purple"}} (app :about-us))

                           )
   ))

(def app-state (atom {:about-us "kaitlin trataris and johann bestowrous are humans on earth."}))
(defn about-us [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
                  (dom/div #js {:className "flex full mobile"}
                           (dom/div #js {:className "aboutus-frame aboutus"} "")
                           (dom/div nil (app :about-us))

                           ))))

(om/root
 about-us
 app-state
 {:target (gdom/getElement "svg")})
