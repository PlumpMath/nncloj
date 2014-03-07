(ns nn.menu
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.events :as events]
            [cljs.core.async :as async :refer [>! <! put! chan sliding-buffer]]
            [om.core :as om :include-macros true]
            [cljs.reader :as reader]
            [om-sync.util :refer [tx-tag edn-xhr]]
            [goog.dom :as gdom]
            [goog.debug :as debug]
            [clojure.browser.net :as net]
            [clojure.browser.event :as gevent]
            [om.dom :as dom :include-macros true]))
(enable-console-print!)

(def app-state (atom {:e-films nil}))

(defn e-films [ev]

  (map #(select-keys % [:id :title :description :thumbnail])  (js->clj
                                         (.. ev -target getResponseJson -data -items) :keywordize-keys true)))

(let [api-url "http://gdata.youtube.com/feeds/api/users/neurosisnow/uploads?max-results=4&v=2&alt=jsonc"
      ;; initialize ajax client
      xhr (net/xhr-connection.)]
  ;; register handlers
  (gevent/listen xhr :error #(print "Error" %1))
  (gevent/listen xhr :success #(reset! app-state {:e-films (into [] (e-films %))}))
  (net/transmit xhr api-url "GET" {:q "jsonc"}))

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

(defn xor
  [p q]
  (cond
   (and p (nil? hovered)) true
   (and p (not (= id hovered))) false
   (or p q) true
   ))

(defn e-film [{:keys [id title thumbnail description]} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [root-chan hovered selected]}]
                  (dom/div #js {:onClick #(on-click owner root-chan id selected)
                                :onMouseEnter #(on-hover owner root-chan (@thumbnail :hqDefault))
                                :onMouseLeave #(on-hover owner root-chan)
                                :style (clj->js (if (= selected id) {:display "none"} {:padding "2px"}))
                                :className (if hovered "title now-reading trans" "title trans")
                                } title)


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
                  (dom/div #js {:className "full flex"}
                           (dom/div #js {:className "half" :style #js {:background (if hovered
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
                                    (let [e-film  (into {} (filter #(= (% :id) vid-id) (@app-state :e-films)))]
                                      (dom/h4 #js {:className "title"
                                                   :onClick #(put! (chans :root-chan) [:clicked nil])} (e-film :title))))
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
