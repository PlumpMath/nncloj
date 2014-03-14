(ns nn.views.css
  (:require
            [garden.core :as garden]
            [garden.stylesheet :as ss]
            [garden.color :as color]
            [garden.def :as def]))

(defn size
  ([height width]
     {:width width :height height})
  ([size]
   {:width size :height size}))

(defn flex-box
  ([align justify flow]
    {
     :display #{:flex :-webkit-flex}
     :align-items align
     :-webkit-align-items align
     :justify-content justify
     :-webkit-justify-content justify
     :flex-flow flow})
  ([align flow]
    {
     :display #{:flex :-webkit-flex}
     :align-items align
     :-webkit-align-items align
     :justify-content align
     :-webkit-justify-content align
     :flex-flow flow})
  ([align]
   {
    :display #{:flex :-webkit-flex}
    :align-items align
    :-webkit-align-items align
    :justify-content align
    :-webkit-justify-content align
    }
   ))

(def xp (garden/css {:vendors ["webkit" "moz" "o" "ms"]}


                    [:html (merge {:font-family "arial"} (size "100%"))]
                    [:.z-index {:z-index "99"}]
                    [:.hide-behind {:z-index "-11"}]
                    [:.selected {:color "white"}]
                    [:.flex ^:prefix (flex-box "center")]
                    [:.column ^:prefix {:flex-flow "column"}]
                    [:.full (size "100%")]
                    [:#svg ^:prefix {:perspective "100px"
                                     :perspective-origin "50% 50%"

                                     :position "relative"
                                     }]
                    [:.vid-frame (size "50%")]
                    (ss/at-media {:min-width "320px"  :max-width "480px"}
                                 [:.vid-frame (size "50%" "100%")])

                    [:.aboutus-frame (size "100%" "50%")]
                    (ss/at-media {:min-width "320px"  :max-width "480px"}
                                 [:.aboutus-frame (size "50%" "50%")])

                    (ss/at-media {:min-width "320px"  :max-width "480px"}
                                 [:.un-mobile {:display "none"}])

                    [:.scroller {:display "none"}]

                    [:.item {:padding-left "2px"}
                     [:&:hover ^:prefix {:background "#FF0DFF"
                                         :transform "scale(1.04)"
                                         :border "solid .5px black"
                                         :color "white"
                                         }
                      ]]

                    [(keyword "input[type='range']")
                     {:-webkit-appearance "none !important"
                      :padding "5px"
                      :margin-top "5px"
                      :background-color "#FF0DFF"
                      :outline "none"}
                     ]

                    [(keyword "input[type='range']::-webkit-slider-thumb")
                     {:-webkit-appearance "none !important"
                      :border-radius "10px"
                      :background-color "#FFF"
                      :background-image "-webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#39FFE))"
                      :height "44px"
                      :width "44px"}
                     ]

                    (ss/at-media {:min-width "320px"  :max-width "480px"}
                                 [:.mobile ^:prefix {:flex-flow "column"
                                                     :width "100%"
                                                     :height "100%"}]
                                 [:.scroller {:display "block"
                                              :width "94%"
                                              }])
                    [:.baseline ^:prefix {:align-items "baseline"}]
                    [:.start ^:prefix {:align-self "flex-start"}
                     ]
                    [:.title {:width "100%"
                              :height "100%"
                              :display "block"
                              :position "relative"
                              :text-decoration "none"
                              :font-family "helvetica"
                              }
                     ]
                    [:.now-reading ^:prefix {:background "#FF0DFF"
                                             :transform "scale(1.04)"
                                             :border "solid .5px black"
                                             :color "white"

                                             }]
                    [:.aboutus {:background "url(/aboutus.jpg)"
                                :background-size "cover"}]
                    [:.work ^:prefix {:transform "scale(2)"}]
                    [:.fixed {:position "fixed"}]
                    [:body  {:background "white" :margin 0}
                     [:.bookend (conj {:background "#5978FF" } (size "100%" "25%"))]
                     ]
                    [:.iframe {:margin-bottom "6px"}]
                    [:.overflow {:overflow-y "scroll"}]
                    [:.test ^:prefix {:transform "translateY(5em)"}]
                    [:.trans {:transition "all .1s ease-in-out"}]
                    [:.panel {:transition "all .4s ease-in-out"}]
                    [:.font {:font-family "arial"}]
                    [:.cuff (conj (size "" "") {:min-height "1px" :padding "1%"})]
                    [:.hemmed {:background "#4CCCFF"}]
                    [:.padded ^:prefix { :padding-top "7%"
                                         :padding-bottom "7%"

                                         }]



                    ))
