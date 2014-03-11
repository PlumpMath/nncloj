(ns nn.game-logic
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan put! <! timeout]]))

(def initial-world {:name [0 0] :mode :tri})

(defn update-world
  "Applies the game constraints (eating, dying, ...) to the world
  and returns the new version."
  [{:keys [name mode] :as world}]
  (let [[what ever] name

        plussed (inc what)]
    (assoc world :name [plussed (mod plussed 10)])))

(def game-speed 100)

(defn plan-tick!
  "Tick the game after the elapsed speed time"
  ([speed cmds] (plan-tick! speed cmds (chan)))
  ([speed cmds shortcircuit]
   (go
    (alts! [(timeout game-speed) shortcircuit])
    (put! cmds [:tick]))))

(defn game!
  "Game internal loop that processes commands and updates state
  applying functions"
  [initial-world cmds notify]
  (go-loop [world  initial-world]
    (let [[cmd v] (<! cmds)]
      (case cmd
        :init (do (plan-tick! 0 cmds) (recur world))

        :reset (do
                 (put! cmds [:init])
                 (recur initial-world))

        :game-start (do (>! notify [:game-start]) (recur initial-world))

        :tick (let [new-world (update-world world)
                    status (:status new-world)]
                (if (= status :game-over)
                  (do
                    (>! notify [:game-over])
                    (recur new-world))
                  (do
                    (plan-tick! game-speed cmds)
                    (>! notify [:world new-world])
                    (recur new-world))))

        :double (do (if v (recur (assoc world :mode :crap))  (recur (assoc world :mode :tri))))


        (throw (js/Error. (str "Unrecognized game command: " cmd)))))))



(defn init [commands]
  (let [notifos (chan)]
    (game! initial-world commands notifos)
    notifos))
