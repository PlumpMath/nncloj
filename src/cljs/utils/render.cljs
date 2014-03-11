(ns nn.render
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [cljs-webgl.context :as context]
            [cljs-webgl.shaders :as shaders]
            [cljs-webgl.constants :as constants]
            [cljs-webgl.buffers :as buffers]
            [cljs-webgl.typed-arrays :as ta]
            ;;[nn.utils.matrix :as matrix]
            )
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           ))

(def world (atom nil))




(def triangle [0.0  0.5  0.0
              -0.5 -0.5  0.0
               0.5 -0.5  0.0])

(defn triangulator [triangle key]
  (case key
        :plus (map #(+ % 0.5) (map #(* % 1) triangle))
        :minus (into [] (map #(- % 0.5) (map #(* % -1) triangle)))))

(def triangle-verts (into (triangulator triangle :minus) (into triangle (triangulator triangle :plus))))



(def vertex-shader-source
  "attribute vec3 vertex_position;
  uniform mat4 thing;

  void main() {
     gl_Position = thing * vec4(vertex_position, 5.0);
   }")

(def fragment-shader-source
  "uniform int frame;
   void main() {
     gl_FragColor.r = sin(float(frame) * 0.05) / 2.0 + 0.6;
     gl_FragColor.g = sin(float(frame) * 0.1) / 2.0 + 0.5;
     gl_FragColor.b = sin(float(frame) * 0.02) / 2.0 + 0.5;
     gl_FragColor.a = 1.0;
   }")



(defn element-buffer [gl]
  (buffers/create-buffer gl (ta/unsigned-int16 (shuffle (range 9)))
                                           constants/element-array-buffer
                                           constants/static-draw))

(def gl (context/get-context (gdom/getElement "grid")))

(def shader (shaders/create-program gl [(shaders/create-shader gl constants/vertex-shader vertex-shader-source)
                                        (shaders/create-shader gl constants/fragment-shader fragment-shader-source)]))

(def vertex-buffer  (buffers/create-buffer gl (ta/float32 triangle-verts)
                                          constants/array-buffer
                                          constants/static-draw))


(defn draw [{:keys [name mode]}]
  (let [[frame thing] name
        shape (case mode :tri constants/triangles :strip constants/triangle-strip constants/line-loop)
        ] ;;such awful nomenclature johann
    (buffers/clear-color-buffer gl 0 0 0 1)

    (buffers/draw! gl
                   shader
                   {:buffer vertex-buffer
                    :attrib-array (shaders/get-attrib-location gl
                                                               shader
                                                               "vertex_position")
                    :mode shape
                    :first 0 ;; what
                    :count 9 ;; huh
                    :components-per-vertex 3
                    :type constants/float
                    :normalized? false
                    :stride 0
                    :offset 0}

                   [{:name "frame" :type :int :values [frame]}
                    {:name "thing" :type :mat4 :values  nil #_(matrix/transform-matrix 0 frame #_(if (= 0 (mod thing 2)) thing  0) 0)}]

                   {:buffer (element-buffer gl)
                    :count 9
                    :type constants/unsigned-short
                    :offset 0})))



(defn render-loop!
  "Render loop. Watches for updates from the game and sets the
  actual loop that renders"
  [notifos]
  (go-loop [[cmd v] (<! notifos)]
      (case cmd
        :world (reset! world v)
        :game-over (print "i will use this eventually")
        :game-start (print "fuck")
        :tick (print v)
        (println (js/Error. (str "Unrecognized UI command: " cmd))))
    (recur (<! notifos)))

  (.requestAnimationFrame js/window (fn hi [time-elapsed]
                                      (.requestAnimationFrame js/window hi)
                                      (draw @world))))
