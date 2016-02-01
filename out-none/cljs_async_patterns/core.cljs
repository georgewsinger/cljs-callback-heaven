;   ____          _       
;  / ___|___   __| | ___  
; | |   / _ \ / _` |/ _ \ 
; | |__| (_) | (_| |  __/ 
;  \____\___/ \__,_|\___| 
;                        

(ns cljs-async-patterns.core (:require        [cljs.nodejs              :as            node]
                                   [cljs.core.async          :refer        [buffer offer! poll! close! take! put! chan <! >! alts!]])
                  (:require-macros [cljs.core.async.macros   :refer        [go go-loop]]
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

#_(defn >1 
   ([c] (fn [arg1] (go arg1))
    ([c E] (fn [arg1] (go (if arg1 arg1 E))))))

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

(defn <println [c]
  (go (println (<! c))))

(defn -main [& args]
  (let [minimist (cljs.nodejs/require "minimist")
          argv     (minimist (clj->js (vec args)))              ; minimist's main command object
          e        (or (.-e argv) "e option")                   ; a useful pattern for grabbing -options
          arg      (or (aget (aget argv "_") 0) "default_arg")] ; the primary, optionless argument
  
  (println argv))) 

(set! *main-cli-fn* -main) ; sends node's process.argv to -main
