(ns nn.vidwid.vidwid
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


(js/React.initializeTouchEvents true)


(def url "http://gdata.youtube.com/feeds/api/users/neurosisnow/uploads?max-results=4&v=2&alt=jsonc")
(defn xhr [{:keys [method url on-complete on-error]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.SUCCESS
      (fn [e]
        (on-complete (into [] (map-indexed #(conj {:nid %1} %2)
                           (map #(select-keys % [:id :title :description :thumbnail])
                                (js->clj (.. xhr getResponseJson -data -items) :keywordize-keys true)))))))
    (events/listen xhr goog.net.EventType.ERROR

      (fn [e]
        (on-error {:error (.getResponseText xhr)})))
    (. xhr
      (send url method
        ;;#js {"Content-Type" "application/edn" "Accept" "application/edn"}
            ))))
(defn rgb [r g b]
  (str "rgb(" r "," g "," b  ")" ))

(defn hsl [h s l]
  (str "hsl(" h "," s "%," l  "%)" ))


(defn on-hover
  ([owner chan img]
    (om/set-state! owner :hovered true)
    (put! chan [:hovered img]))
  ([owner chan]
    (om/set-state! owner :hovered nil)
    (put! chan [:hovered nil])))


(defn on-click
  [owner chan nid selected]
    (om/set-state! owner :selected (not selected))
  (put! chan [:clicked nid]))

(defn range-change [owner chan app]
  (let [val (.-value (om/get-node owner "range"))
        id (:id (into {} (filter #(= (str (% :nid)) val) @app)))]
    (put! chan [:clicked  (js/parseInt val)])))

(defn e-film [{:keys [nid id title thumbnail description]} owner]
  (reify
    om/IDidUpdate
    (did-update [this prev-props prev-state]

                (when (or (om/get-state owner :hovered)
                          (om/get-state owner :clicked))
                 (let [
                         h (mod 360 (+ 175 (* 60 (rand-int 3))))
                          hsl (hsl h 100 61)
                          ]
                     (put! (prev-state :root-chan) [:color hsl])

                   )
                 )
               )
    om/IWillUpdate
    (will-update [_ next-props next-state]
                 #_(if (and (= (om/get-state owner :selected) nid) (= (next-state :selected) nid))
                   (.add (.. (om/get-node owner) -classList) "work")
                   (.remove (.. (om/get-node owner) -classList) "work")


                   ))

    om/IRenderState
    (render-state [_ {:keys [root-chan hovered selected]}]
                  (dom/div #js {
                                :onMouseEnter #(on-hover owner root-chan (@thumbnail :hqDefault))
                                :onMouseLeave #(on-hover owner root-chan)
                                :style (clj->js (if (= selected nid) {:display "none"} {:padding "0px"}))
                                :className (if hovered "title now-reading trans" "title trans")
                                :onClick #(on-click owner root-chan nid selected)
                                }
                           (or title "test"))


                  )))

(defn mobile-scroll [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [root-chan selected]}]
                  (let [val-map (into {} (filter #(= (% :id) selected) app))
                        val (str (val-map :nid))]
                    (dom/input #js {:className "flex scroller"
                                    :type "range" :min "0" :max (str (- (count app) 1)) :ref "range" :onChange #(range-change owner root-chan app)
                                    :value (if (= (str selected) "") "0" selected)} nil))

                  )))

(defn iframe [{:keys [nid id]} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [root-chan selected]}]
                  (dom/iframe #js {:src (str "//www.youtube.com/embed/" id)
                                   :className "full"
                                   :frameBorder "0"
                                   :style (clj->js (if (= selected nid) {} {:display "none"}))}
                                                  ""))))
(defn select [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [root-chan]}]
                  (dom/i #js {:className "trans title"
                              :onClick #(put! root-chan [:clicked nil])
                                                   }
                                              (app :title)))))



(defn video-widget [{:keys [e-films] :as app} owner]
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
                                       :clicked (om/set-state! owner :selected val)
                                       :color (om/set-state! owner :color val)
                                   ))))))
    om/IDidMount
      (did-mount [this] )

    om/IRenderState
    (render-state [_ {:keys [chans hovered selected color]}]
                  (dom/div #js {:className "full flex mobile"}
                           (apply dom/div #js {:className "vid-frame" :style #js {:background (if hovered
                                                                                     (str "url(" hovered ")")
                                                                                     (str (or color (hsl 175 100 61))
                                                                                          " " "url(" "http://i.imgur.com/fPRkry0.png)"
                                                                                          ))
                                                                       }}

                                    (om/build-all iframe e-films {:init-state chans
                                                                  :state {
                                                                          :selected selected
                                                                          }}))
                           (om/build mobile-scroll e-films {:init-state chans
                                                                   :state {:selected selected}})
                           (apply dom/div #js {:className "un-mobile"
                                               :style #js {:padding-left "10px"}}
                                  (when selected
                                    (let [e-film  (into {} (filter #(= (% :nid) selected) (app :e-films)))]
                                      (om/build select e-film {:init-state chans})))

                                  (if-not e-films
                                    "loading"
                                    (om/build-all e-film e-films {:init-state chans
                                                                  :state {
                                                                          :selected selected
                                                                          }})
                                    )


                                  )))))








