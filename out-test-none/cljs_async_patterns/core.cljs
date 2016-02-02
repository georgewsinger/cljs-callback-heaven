;   ____          _       
;  / ___|___   __| | ___  
; | |   / _ \ / _` |/ _ \ 
; | |__| (_) | (_| |  __/ 
;  \____\___/ \__,_|\___| 
;                        

(ns cljs-async-patterns.core (:require        [cljs.nodejs              :as            node]
                                   [cljs.core.async          :refer        [buffer offer! poll! close! take! put! chan <! >! alts!]])
                  (:require-macros [cljs.core.async.macros   :refer        [go go-loop]]
                                  ;[cljs-async-patterns.macros :refer [<?]]
                                   [cljs-asynchronize.macros :as dm :refer [asynchronize]]))

(node/enable-util-print!) ; allows (println ..) to print to console.log

#_(defn <<< [f & args]
   (let [c (chan)]
     (apply f (concat args [(fn [err res]
                              (if (or (nil? res)
                                      (undefined? res))
                                  (close! c)
                                  (put! c res)))]))
     c))

#_(defn >? [err res]
  (go
    (if err
      err
      res)))

#_(<< (.readFile (node/require "fs") "/home/george/1" "utf8" _)
    >?
    "ERROR: Custom error message.")

(defn <print [c]
  (go (println (<! c))))

(defn chan-sanitized 
  "Since channels cannot contain nil, this function converts nil values to false."
  [val]
  (if (= val nil) false val))

(defn >1 
  ([c] (fn [arg1] (go (>! c (chan-sanitized arg1)))))
  ([c E-msg] (fn [arg1] (go (if arg1 (>! c (chan-sanitized arg1)) (>! c E-msg))))))

(defn >2
  ([c]
   (fn [err, res] (go (cond
                       err     (>! c (chan-sanitized err))
                       :else   (>! c (chan-sanitized res))))))
  ([c E-msg]
   (fn [err, res] (go (cond
                       err     (>! c (chan-sanitized E-msg))
                       :else   (>! c (chan-sanitized res)))))))

(defn >3
  ([c]
   (fn [err1, err2, res] (go (cond
                              err1    (>! c (chan-sanitized err1))
                              err2    (>! c (chan-sanitized err2))
                              :else   (>! c (chan-sanitized res)))))
  ([c E-msg]
   (fn [err1, err2, res] (go (cond
                              err1   (>! c (chan-sanitized E-msg))
                              err2   (>! c (chan-sanitized E-msg))
                              :else  (>! c (chan-sanitized res))))))))

;; assumes error-first callbacks
;; http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
(defn >? 
  ([c]
  (fn [& args] 
    (go-loop [a args]
      (if (= 0 (count a)) (>! c false)
                          (if (first a) 
                              (>! c (first (chan-sanitized a))) 
                              (recur (rest a)))))))    
  ([c E-msg]
  (fn [& args] 
    (go-loop [a args]
      (if (= 0 (count a)) (>! c E-msg)
                          (if (first a)
                              (if (> (count a) 1)
                                  (>! c E-msg)
                                  (>! c (first (chan-sanitized a))))
                              (recur (rest a))))))))    

 
 



#_(defn >2 
   ([c]
    (fn [arg1 arg2]
      (go arg2))))

#_(defn >3 [c]
   (fn [arg1 arg2 arg3]
     (go arg3)))

#_(defn >? [c]
   (fn [err res arg3]
     (go
       (if err
         (>! c err)
         (>! c res)))))

(defn -main [& args]
  (let [minimist (cljs.nodejs/require "minimist")
          argv     (minimist (clj->js (vec args)))              ; minimist's main command object
          e        (or (.-e argv) "e option")                   ; a useful pattern for grabbing -options
          arg      (or (aget (aget argv "_") 0) "default_arg")] ; the primary, optionless argument
  
  (println argv))) 

(set! *main-cli-fn* -main) ; sends node's process.argv to -main
