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

(defn <<< [f & args]
  (let [c (chan)]
    (apply f (concat args [(fn [x]
                             (if (or (nil? x)
                                     (undefined? x))
                                   (close! c)
                                   (put! c x)))]))
    c))

(def fs (node/require "fs"))

(<<< .readFile fs "/home/george/12345" "utf8")

;(.readFile fs "/home/george/12345" "utf8" (fn [err, res] (println err)))
;(.readFile fs "/home/george/2" "utf8" (fn [err, res] (println res)))
;(.readFile fs "/home/george/3" "utf8" (fn [err, res] (println res)))

#_(asynchronize
      (def f1-content (.readFile fs "/home/george/12345" "utf8" ...))
      (def f2-content (.readFile fs "/home/george/2" "utf8" ...))
      (def f3-content (.readFile fs "/home/george/3" "utf8" ...))
      (def f4-content (.readFile fs "/home/george/4" "utf8" ...))
      (def f5-content (.readFile fs "/home/george/5" "utf8" ...))
      (def f6-content (.readFile fs "/home/george/678" "utf8" ...))
      (println f1-content)
      (println f2-content)
      (println f3-content)
      (println f4-content)
      (println f5-content)
      (println f6-content))

(defn -main [& args]
  (let [minimist (cljs.nodejs/require "minimist")
          argv     (minimist (clj->js (vec args)))              ; minimist's main command object
          e        (or (.-e argv) "e option")                   ; a useful pattern for grabbing -options
          arg      (or (aget (aget argv "_") 0) "default_arg")] ; the primary, optionless argument
  
  (println argv))) 

(set! *main-cli-fn* -main) ; sends node's process.argv to -main