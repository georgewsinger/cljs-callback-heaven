;  _____         _        
; |_   _|__  ___| |_ ___  
;   | |/ _ \/ __| __/ __| 
;   | |  __/\__ \ |_\__ \ 
;   |_|\___||___/\__|___/ 
;                         

(ns cljs-callback-heaven.core-test
  (:require        [cljs-callback-heaven.core :as core]
                   [cljs.test :refer-macros [deftest is testing run-tests async]]
                   [cljs.nodejs :as node]
                   [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
                   [clojure.string :as s]) ; often useful when testing
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs-callback-heaven.macros :refer [<? <1 <2 <3]]))

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

(defn async-2-saturated [arg, cb]
  (cb "err" "suc"))

(defn async-3-saturated [arg, cb]
  (cb "err1" "err2" "suc"))

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

(deftest >2-test
  (async done
    (go 
      (let [c1 (chan 1) c2 (chan 1) c3 (chan 1) c4 (chan 1) c5 (chan 1)]
        (async-2 "suc" (core/>2 c1))
        (async-2 "err" (core/>2 c2))
        (async-2 "err" (core/>2 c3 "ERROR:"))
        (async-2-saturated "sat" (core/>2 c4))
        (async-2-saturated "sat" (core/>2 c5 "ERROR:"))
        (is (= (<! c1) "suc"))
        (is (= (<! c2) "err"))
        (is (= (<! c3) "ERROR:"))
        (is (= (<! c4) "suc"))
        (is (= (<! c5) "suc"))
        (done)))))

(deftest >3-test
  (async done
    (go 
      (let [c1 (chan 1) c2 (chan 1) c3 (chan 1) c4 (chan 1) c5 (chan 1) c6 (chan 1) c7 (chan 1)]
        (async-3 "suc" (core/>3 c1))
        (async-3 "err1" (core/>3 c2))
        (async-3 "err2" (core/>3 c3))
        (async-3 "err1" (core/>3 c4 "ERROR:"))
        (async-3 "err2" (core/>3 c5 "ERROR:"))
        (async-3-saturated "sat" (core/>3 c6))
        (async-3-saturated "sat" (core/>3 c7 "ERROR:"))
        (is (= (<! c1) "suc"))
        (is (= (<! c2) "err1"))
        (is (= (<! c3) "err2"))
        (is (= (<! c4) "ERROR:"))
        (is (= (<! c5) "ERROR:"))
        (is (= (<! c6) "suc"))
        (is (= (<! c7) "suc"))
        (done)))))

(deftest >?-one
  (testing "Mirror of the >1 tests."
    (async done
      (go 
        (let [c1 (chan 1) c2 (chan 1) c3 (chan 1)]
          (async-1 "suc" (core/>? c1))
          (async-1 "err" (core/>? c2))
          (async-1 "err" (core/>? c3 "ERROR:"))
          (is (= (<! c1) "suc"))
          (is (= (<! c2) false))
          (is (= (<! c3) "ERROR:"))
          (done))))))

(deftest >?-two
  (testing "Mirror of the >2 tests."
    (async done
        (go 
          (let [c1 (chan 1) c2 (chan 1) c3 (chan 1) c4 (chan 1) c5 (chan 1)]
            (async-2 "suc" (core/>? c1))
            (async-2 "err" (core/>? c2))
            (async-2 "err" (core/>? c3 "ERROR:"))
            (is (= (<! c1) "suc"))
            (is (= (<! c2) "err"))
            (is (= (<! c3) "ERROR:"))
            (done))))))

(deftest >?-three
  (testing "Mirror of the >3 tests."
    (async done
        (go 
          (let [c1 (chan 1) c2 (chan 1) c3 (chan 1) c4 (chan 1) c5 (chan 1)]
            (async-3 "suc" (core/>? c1))
            (async-3 "err1" (core/>? c2))
            (async-3 "err2" (core/>? c3))
            (async-3 "err1" (core/>? c4 "ERROR:"))
            (async-3 "err2" (core/>? c5 "ERROR:"))
            (is (= (<! c1) "suc"))
            (is (= (<! c2) "err1"))
            (is (= (<! c3) "err2"))
            (is (= (<! c4) "ERROR:"))
            (is (= (<! c5) "ERROR:"))
            (done))))))

