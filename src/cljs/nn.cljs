(ns nn.nn
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]
            [nn.aboutus.aboutus :as au]
            [nn.vidwid.vidwid :as vw]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(def app-state (atom {:about-us "kaitlin trataris and johann bestowrous are humans on earth." :e-films nil}))

(defn translator [scale x y z deg]
  (let [transform (str " translate3d(" x "px," y "px," z "px) "
                             "rotate(" deg "deg) "
                             "scale(" scale ")"
                             ) ]

    {:-webkit-transform transform
     :transform transform
     }))

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
                                                           (conj {:opacity 0}
                                                            (translator .1 0 0 100 0))
                                                           (conj {:opacity 1}
                                                            (translator 1 0 0 0 0))
                                                           ))}
                                    (om/build vw/video-widget app))
                           (dom/div #js {:className (if selected "panel full"
                                                      "panel full hide-behind")
                                         :style (clj->js (if selected
                                                           (conj (translator 1 0 0 0 0)
                                                            {:opacity 1})
                                                           (conj (translator 1 0 0 -1000 0)
                                                            {:opacity 0})

                                                           ))}
                                    (om/build au/about-us app))
                           (dom/div #js {:className "z-index flex panel"
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





























