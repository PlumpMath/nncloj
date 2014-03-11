(ns nn.utils.input
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]
            [goog.events :as events]
            [goog.dom :as gdom]
            [clojure.set :refer [union]]
            [clojure.string :as string]))

;; add touch events later

;; -------------------------------------------------------------------------------
;; Key events handling

;; Keycodes that interest us. Taken from
;; http://docs.closure-library.googlecode.com/git/closure_goog_events_keynames.js.source.html#line33
;; Which apparently is not in the closure version that clojurescript uses
(def keycodes {16 :shift
               32 :space
               13 :enter})

(defn event->key
  "Transform an js event object into the key name"
  [ev] (get keycodes (.-keyCode ev) :key-not-found))

(defn event-chan
  "Creates a channel with the events of type event-type and optionally applies
  the function parse-event to each event."
  ([event-type] (event-chan event-type identity))
  ([event-type parse-event]
   (let [ev-chan (chan)]
     (events/listen (.-body js/document)
                    event-type
                    #(put! ev-chan (parse-event %)))
     ev-chan)))


(defn keys-chan
  "Returns a channel with the key events of event-type parsed and
  filtered by the allowed-keys"
  [event-type allowed-keys]
  (let [evs (event-chan event-type event->key)]
    (filter< allowed-keys evs)))

(def spatial-and-color #{:space})
(def reset-key #{:enter})
(def input-score-key #{:shift})

;; Keys we want to listen on key up
(def valid-keys-up (union spatial-and-color input-score-key))
(defn keys-up-chan
  "Create a channel of keys up restricted by the valid keys"
  [] (keys-chan (.-KEYUP events/EventType) valid-keys-up))

;; Keys we want to listen on key down
(def valid-keys-down (union spatial-and-color reset-key))
(defn keys-down-chan
  "Create a channel of keys pressed down restricted by the valid keys"
  [] (keys-chan (.-KEYDOWN events/EventType) valid-keys-down))

(defn click-down-chan []
  (event-chan (.-CLICK events/EventType)))

(defn click->clack [k]
  (cond
   k [:nback true]
   ))

(defn key-down->command
  "Transform a key pressed down to the command we will send to the game"
  [k]
  (cond
   (reset-key k) [:reset]
   (spatial-and-color k) [:double true]))

(defn key-up->command
  "Transform a key up to the command we will send to the game"
  [k]
  (cond
   (input-score-key k) [:score]
   (spatial-and-color k) [:double false]))

(defn init-events!
  "Initialize event processing. It takes all the key presses and transforms
  them into commands and passes them to the game commands channel"
  [game-commands]
  (let [keys-pressed (keys-down-chan)
        keys-up (keys-up-chan)
        click-down (click-down-chan)
        commands (unique (merge [#_(map< click->clack click-down)
                                 (map< key-down->command keys-pressed)
                                 (map< key-up->command keys-up)]))]
    (pipe commands game-commands)))
