(ns nn.menu
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

(enable-console-print!)

(def app-state (atom {:e-films nil}))

(js/React.initializeTouchEvents true)


(def url "http://gdata.youtube.com/feeds/api/users/neurosisnow/uploads?max-results=4&v=2&alt=jsonc")
(defn xhr [{:keys [method url on-complete on-error]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.SUCCESS
      (fn [e]
        (on-complete (into [] (map #(select-keys % [:id :title :description :thumbnail])
                                (js->clj (.. xhr getResponseJson -data -items) :keywordize-keys true))))))
    (events/listen xhr goog.net.EventType.ERROR

      (fn [e]
        (on-error {:error (.getResponseText xhr)})))
    (. xhr
      (send url method
        ;;#js {"Content-Type" "application/edn" "Accept" "application/edn"}
            ))))



(defn on-hover
  ([owner chan img]
    (om/set-state! owner :hovered true)
    (put! chan [:hovered img]))
  ([owner chan]
    (om/set-state! owner :hovered nil)
    (put! chan [:hovered nil])))

(defn on-click
  [owner chan id selected]
    (om/set-state! owner :selected (not selected))
  (put! chan [:clicked id]))

;;removes click delay on non-chrome web-browsers


(defn e-film [{:keys [id title thumbnail description]} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [root-chan hovered selected]}]
                  (dom/div #js {
                                :onMouseEnter #(on-hover owner root-chan (@thumbnail :hqDefault))
                                :onMouseLeave #(on-hover owner root-chan)
                                :style (clj->js (if (= selected id) {:display "none"} {:padding "2px"}))
                                :className (if hovered "title now-reading trans" "title trans")
                                :onClick #(on-click owner root-chan id selected)
                                }
                           title)


                  )))



(defn app-view [{:keys [e-films] :as app} owner]
  (reify
    om/IInitState
    (init-state [_]

           {:chans {:root-chan (chan (sliding-buffer 1))

                    }
            })
    om/IWillMount
                (will-mount [_]

                            (xhr {:method "GET" :url url :on-complete #(om/transact! app :e-films (fn [_] %)) :on-error #(print %)})
                            (let [root-chan (om/get-state owner [:chans :root-chan])]
                              (go (while true
                                    (let [[key val] (<! root-chan)]
                                      (case key
                                       :hovered (om/set-state! owner :hovered val)
                                       :clicked (om/set-state! owner :vid-id val)
                                   ))))))
    om/IDidMount
      (did-mount [this] )

    om/IRenderState
    (render-state [_ {:keys [chans hovered vid-id]}]
                  (dom/div #js {:className "full flex mobile"}
                           (dom/div #js {:className "vid-frame" :style #js {:background (if hovered
                                                                                     (str "url(" hovered ")")
                                                                                     "#39FFEE"
                                                                                     )
                                                                       }}
                                    (when vid-id
                                      (dom/iframe #js {:src (str "//www.youtube.com/embed/" vid-id) :className "full" :frameBorder "0"}
                                                  "")
                                      )
                                    )
                           (apply dom/div #js {:className ""}
                                  (when vid-id
                                    (let [e-film  (into {} (filter #(= (% :id) vid-id) (app :e-films)))]
                                      (dom/h4 #js {:className "title"
                                                   }
                                              (dom/button #js {:onClick #(put! (chans :root-chan) [:clicked nil])}
                                                          "")
                                              (e-film :title))))
                                  (if-not e-films
                                    "loading"
                                    (om/build-all e-film e-films {:init-state chans
                                                                  :state {
                                                                          :selected vid-id
                                                                          }})
                                    )


                                  )))))






(om/root
 app-view
 app-state
 {:target (gdom/getElement "menu")
  :tx-listen (fn [tx-data root-cursor]
     (println tx-data))
  }
 )
