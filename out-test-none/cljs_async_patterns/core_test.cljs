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
    :else (cb "success")))

(defn async-2
  "Executes a 2-argument callback."
  [arg, cb]
  (cond
    (= arg "err") (cb "err" nil)
    :else (cb nil "success")))

(defn async-3
  "Executes a 3-argument callback."
  [arg, cb]
  (cond
    (= arg "err1") (cb "err1" nil nil)
    (= arg "err2") (cb nil "err2" nil)
    :else (cb nil nil "success")))

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
