(defproject cljs-callback-heaven "0.0.1-SNAPSHOT" ; "SNAPSHOT" is a maven term; it means "development version", and is contrasted with "release"

  ;; searchable Clojars fields
  :description "A small clojurescript library that helps you escape callback hell when interoping with javascript and core.async." 
  :url         "N/A" 
  :license     {:name "MIT"
                :url  "http://opensource.org/licenses/MIT"}

  ;; Maven, Clojars dependencies
  :dependencies [[org.clojure/clojure       "1.8.0"  ]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.clojure/core.async    "0.2.374"] ; cljs.core.async lives here
                 [org.clojure/tools.nrepl   "0.2.10" ] ; non-teletype repl; needed for vim-fireplace
                 [com.cemerick/piggieback   "0.2.1"  ]] ; nrepl piggieback middleware & also needed for vim-fireplace

  ;; lein specific plugins
  :plugins      [[org.bodil/lein-noderepl "0.1.11"] ; required to launch the node repl
                 [lein-cljsbuild           "1.1.2"] ; required to compile cljs to js
                 [lein-npm                 "0.6.1"] ; lein interface with npm (see below)
                 [lein-doo                 "0.1.6"]] ; the current "standard" testing framework

  ;; Needed for nREPL/piggieback/vim-fireplace
  :profiles { :dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                   [org.clojure/tools.nrepl "0.2.10"]]

                    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :npm { ;; package.json npm dependencies
         :dependencies [[minimist        "1.2.0"]] ; minimist parses CLI arguments
        
         ;; every time you run a "lein npm <cmd>", lein-npm uses the fields below to assemble a temporary package.json
         :package      { :name "cljs-callback-heaven"
                         :version "0.0.1" ; you must update this manually; `lein npm version` doesn't seem to do it
                         :bin "target/cljs-callback-heaven.js" ; we target the cljsbuild :main profile from below
                         :description "N/A"
                         :main "target/cljs-callback-heaven.js" ; we target the cljsbuild :main profile from below
                         :repository {:type "git" :url "git+https://github.com/georgewsinger/cljs-callback-heaven.git"}
                         :keywords ["clojure" "clojurescript"]
                         :author "George Singer"
                         :license "MIT"
                         :private false
                         :homepage "https://github.com/georgewsinger/cljs-callback-heaven#readme"}}

  :cljsbuild { :builds { ;; main is the default cljsbuild profile, marked by its use of the :advanced compilation mode
                         :main {
                           :source-paths ["src"]
                           :compiler { :optimizations :advanced
                                       :target        :nodejs
                                       :output-dir    "out-advanced"
                                       :output-to     "target/cljs-callback-heaven.js"
                                       :externs       ["externs.js"]
                                       :verbose       true
                                       :pretty-print  true }}
                   
                         ;; on the other end of the spectrum is "none", named for its compilation mode
                         :none {
                           :source-paths ["src"]
                           :compiler { :optimizations :none
                                       :target        :nodejs
                                       :output-dir    "out-none"
                                       :output-to     "target/cljs-callback-heaven-none.js"
                                       :externs       ["externs.js"]
                                       :verbose       true
                                       :pretty-print  true }}
                   
                         ;; lein doo uses this profile
                         :test-none {
                           :source-paths ["src" "test"] ; note the added "test" directory
                           :compiler { :optimizations :none
                                       :target        :nodejs
                                       :output-dir    "out-test-none"
                                       :output-to     "target/cljs-callback-heaven-test-none.js"
                                       :externs       ["externs.js"]
                                       :verbose       true
                                       :main          cljs-callback-heaven.runner
                                       :pretty-print  true }}
 
                         ;; lein doo uses this profile
                         :test-advanced {
                           :source-paths ["src" "test"] ; note the added "test" directory
                           :compiler { :optimizations :advanced
                                       :target        :nodejs
                                       :output-dir    "out-test-advanced"
                                       :output-to     "target/cljs-callback-heaven-test-advanced.js"
                                       :externs       ["externs.js"]
                                       :verbose       true
                                       :main          cljs-callback-heaven.runner
                                       :pretty-print  true }}}})
