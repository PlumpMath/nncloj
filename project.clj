(defproject nn "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                 [org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173" :scope "provided"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om-sync "0.1.1"]
                 [om "0.5.1"]
                 [http-kit "2.1.13"]
                 [hiccup "1.0.5"]
                 [compojure "1.1.6"]
                 [fogus/ring-edn "0.2.0"]
                 [cljs-webgl "0.1.4-SNAPSHOT"]
                 [java-jdbc/dsl "0.1.0"]
                 [org.postgresql/postgresql "9.2-1003-jdbc4"]
                 [org.clojure/java.jdbc "0.3.2"]
                 [ring  "1.2.1"]
                 [garden "1.1.5"]
                 ]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :main nn.core

  :cljsbuild {:builds
 [
  {:id "dev"
   :source-paths ["src/cljs"]
   :compiler{
    :output-to "resources/public/javascripts/nn.js"
    :output-dir "resources/public/javascripts/out"
    :source-map true
    :optimizations :none
    }}

  {:id "dmenu"
   :source-paths ["src/cljs/menu"]
   :compiler{
    :output-to "resources/public/javascripts/menu/menu.js"
    :output-dir "resources/public/javascripts/menu/out"
    :source-map true
    :optimizations :none
    }}

  {:id "rmenu"
            :source-paths ["src/cljs/menu"]
            :compiler {
              :output-to "resources/public/javascripts/menu/menu.js"
              :optimizations :simple
              :pretty-print false
              :externs ["react/externs/react.js"]}}

  {:id "release"
            :source-paths ["src/cljs"]
            :compiler {
              :output-to "resources/public/javascripts/nn.js"
              :optimizations :advanced
              :pretty-print false
              :preamble ["react/react.min.js"]
              :externs ["react/externs/react.js"]}}
  ]

              }


  )
