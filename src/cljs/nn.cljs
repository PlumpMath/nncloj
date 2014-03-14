(ns nn.nn
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            ;;[nn.utils.input :as input]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]
            [nn.aboutus.aboutus :as au]
            [nn.vidwid.vidwid :as vw]
            ;;[nn.render :as render]
            ;;[nn.game-logic :as game]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           ))

(enable-console-print!)
(def app-state (atom {:about-us "kaitlin trataris and johann bestowrous are humans on earth." :e-films nil}))

(defn main [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [selected]}]
                  (dom/div #js {:className "full"
                                :id "svg"
                                :style #js {:overflow "hidden"
                                            :position "relative"
                                            :transform-style "preserve-3d"

                                            :-webkit-transform-style "preserve-3d"
                                            :-webkit-transform "translateZ(0)"}}

                           (dom/div #js {:className "panel full z-index"
                                         :style (clj->js (if selected
                                                           {:-webkit-transform-style "preserve-3d"
                                                            :transform-style "preserve-3d"
                                                            :position "absolute"
                                                            :-webkit-transform "translate3d(0, 0, 100px)"
                                                            :transform "translate3d(0, 0, 100px)"

                                                            }
                                                           {:-webkit-transform-style "preserve-3d"
                                                            :-moz-transform-style "preserve-3d"

                                                            :position "absolute"
                                                            :-webkit-transform "translate3d(0, 0, 0)"
                                                            :transform "translate3d(0,0,0)"

                                                            }))}
                                    (om/build vw/video-widget app))
                           (dom/div #js {:className (if selected "panel full" "panel full hide-behind" )
                                         :style (clj->js (if selected
                                                           {:-webkit-transform-style "preserve-3d"
                                                            :transform-style "preserve-3d"
                                                            :-webkit-transform "translate3d(0, 0, 0)"
                                                            :transform "translate3d(0, 0, 0)"

                                                            }
                                                           {:-webkit-transform-style "preserve-3d"
                                                            :-moz-transform-style "preserve-3d"
                                                            :z-index "-11"

                                                            :-webkit-transform "translate3d(0, 0, -1000px)"
                                                            :transform "translate3d(0, 0, -1000px)"


                                                            }))}
                                    (om/build au/about-us app))
                           (dom/div #js {:className (if selected
                                                      "z-index flex panel"
                                                      "z-index flex panel")
                                         :style (clj->js  {:position "absolute"
                                                           :bottom "5%"
                                                           :right "1%"

                                                           }
                                                          ) }
                                    (when-not selected (dom/span #js {:className "fa fa-long-arrow-right"} nil))
                                    (dom/div #js {:className "full flex item"
                                                  :onClick #(om/update-state! owner :selected not)} (if selected "e-films " "about us ")

                                             (when selected (dom/span #js {:className "fa fa-long-arrow-left"} nil)))

                                    )


                           )
                  )))

(om/root
 main
 app-state
 {:target (gdom/getElement "svg")})

























#_(defn init
  "Initialize the UI by initializing the user input, adapting the canvas
  and starting the render loop."
  []
  (let [commands (chan)
        notifos (game/init commands)]
    (input/init-events! commands)
    (render/render-loop! notifos)
    (put! commands [:init])

    ))

#_(init)




