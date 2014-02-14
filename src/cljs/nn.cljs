(ns nn.core
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [cljs-webgl.context :as context]
            [cljs-webgl.shaders :as shaders]
            [cljs-webgl.constants :as constants]
            [cljs-webgl.buffers :as buffers]
            [cljs-webgl.typed-arrays :as ta]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           [goog.ui IdGenerator] ;; for mlb
           ))

(enable-console-print!)

(def vertex-shader-source
  "attribute vec3 vertex_position;
  uniform int thing;
   void main() {
     gl_Position = vec4(vertex_position, thing);
   }")

(def fragment-shader-source
  "uniform int frame;
   void main() {
     gl_FragColor.r = sin(float(frame) * 0.05) / 2.0 + 0.6;
     gl_FragColor.g = sin(float(frame) * 0.1) / 2.0 + 0.5;
     gl_FragColor.b = sin(float(frame) * 0.02) / 2.0 + 0.5;
     gl_FragColor.a = 1.0;
   }")

(let
    [gl (context/get-context (gdom/getElement "grid"))
     shader (shaders/create-program gl [(shaders/create-shader gl constants/vertex-shader vertex-shader-source)
                                        (shaders/create-shader gl constants/fragment-shader fragment-shader-source)])
     vertex-buffer (buffers/create-buffer gl (ta/float32 [
                                                          1.0 -1.0 0.0
                                                          -1.0 1.0 0.0
                                                          -1.0 -1.0 -1.0
                                                          1.0 -1.0 1.0

                                                          ])
                                          constants/array-buffer
                                          constants/static-draw)
     element-buffer (buffers/create-buffer gl (ta/unsigned-int16 [0 1 2 3])
                                           constants/element-array-buffer
                                           constants/static-draw)
     draw (fn [frame thing continue]
            (buffers/clear-color-buffer gl 0 0 0 1)
            (buffers/draw! gl
                           shader
                           {:buffer vertex-buffer
                            :attrib-array (shaders/get-attrib-location gl
                                                                       shader
                                                                       "vertex_position")
                            :mode constants/triangle-fan
                            :first 1
                            :count 4
                            :components-per-vertex 3
                            :type constants/float
                            :normalized? false
                            :stride 0
                            :offset 0}
                           [{:name "frame" :type :int :values [frame]}
                            {:name "thing" :type :int :values [thing]}]
                           {:buffer element-buffer
                            :count 4
                            :type constants/unsigned-short
                            :offset 0})
            (.requestAnimationFrame js/window (fn [time-elapsed] (continue (inc frame) (mod (inc frame) 50) continue))))]
  (.requestAnimationFrame js/window (fn [time-elapsed] (draw 0 0 draw))))









