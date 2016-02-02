;  _____         _        
; |_   _|__  ___| |_ ___  
;   | |/ _ \/ __| __/ __| 
;   | |  __/\__ \ |_\__ \ 
;   |_|\___||___/\__|___/ 
;                         

(ns cljs-async-patterns.core-test
  (:require        [cljs-async-patterns.core :as core]
                   [cljs.test :refer-macros [deftest is testing run-tests async]] ; notice in particular the `async` macro
                   [cljs.nodejs :as node]
                   [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
                   [clojure.string :as s]) ; often useful when testing
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs-async-patterns.macros :refer [<?]]
                   [cljs-asynchronize.macros :as dm :refer [asynchronize]]))

(defn async-1
  "Executes a 1-argument callback."
  [arg, cb]
  (cond
    (= arg "err") (cb nil)
    :else (cb "suc")))

(defn async-2
  "Executes a 2-argument callback."
  [arg, cb]
  (cond
    (= arg "err") (cb "err" nil)
    :else (cb nil "suc")))

(defn async-3
  "Executes a 3-argument callback."
  [arg, cb]
  (cond
    (= arg "err1") (cb "err1" nil nil)
    (= arg "err2") (cb nil "err2" nil)
    :else (cb nil nil "suc")))

(deftest >1-test
  (async done
    (go 
      (let [c1 (chan 1) c2 (chan 1) c3 (chan 1)]
        (async-1 "suc" (core/>1 c1))
        (async-1 "err" (core/>1 c2))
        (async-1 "err" (core/>1 c3 "ERROR:"))
        (is (= (<! c1) "suc"))
        (is (= (<! c2) false))
        (is (= (<! c3) "ERROR:"))
        (done)))))
