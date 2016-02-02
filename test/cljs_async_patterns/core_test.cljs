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
                   [cljs-async-patterns.macros :refer [newest]]
                   [cljs-asynchronize.macros :as dm :refer [asynchronize]]))

#_(deftest core-tests
   (async done
    (testing "Sample test using the async macro."
      (go (is (= (<! (go "chan_val")) "chan_val"))
          (done)))))

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

(def prnt-cb-1 (fn [res] (println "res: " res)))
(def prnt-cb-2 (fn [err, res] (println "err: " err) (println "res: " res)))
(def prnt-cb-3 (fn [arg1, arg2, arg3] (println "arg1: " arg1) (println "arg2: " arg2) (println "arg3: " arg3)))

;(async-1 "err" prnt-cb-1) 
;(async-1 "suc" prnt-cb-1) 

;(async-2 "err" prnt-cb-2) 
;(async-2 "suc" prnt-cb-2) 

;(async-3 "err1" prnt-cb-3) 
;(async-3 "err2" prnt-cb-3) 
;(async-3 "suc" prnt-cb-3) 

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

#_(deftest standard
   (async done
    (testing ">1"
      (go (is (= (<! (go "chan_val")) "chan_val"))
          (done)))))


;(println (macroexpand-1 '(newest (.readFile (node/require "fs") "/home/george/1" "utf8" _) "ERROR:")))
;(println (macroexpand-1 '(infiz (.readFile (node/require "fs") "/home/george/1" "utf8" _) "ERROR:")))

(println 31)
;(println (macroexpand-1 '(newest (.readFile (node/require "fs") "/home/george/1" "utf8" _) "ERROR:")))
(core/<print (newest (.readFile (node/require "fs") "/home/george/1" "utf8" _) "ERROR:"))

