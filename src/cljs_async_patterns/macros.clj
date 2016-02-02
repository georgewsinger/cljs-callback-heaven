(ns cljs-async-patterns.macros)

;#_(defmacro infix [func E-msg]
;  `(go (let [c     (chan 1) 
;             cb    (>? c ~E-msg)
;             rep   (replace '{_ cb} ~func)]
;          (<! c))))

(defmacro newest [func E-msg]
 ;(println "func: " )
   `(cljs.core.async.macros/go 
      (let [~'c     (cljs.core.async/chan 1) 
            ~'cb    (cljs-async-patterns.core/>? ~'c ~E-msg)
           ;~'rep    (replace (quote {~'_ 7}) (quote ~func))
           ~'rep    (replace (quote {~'_ (cljs-async-patterns.core/>? ~'c ~E-msg) }) (quote ~func))
           ;~'rep    (replace ~'{_ (cljs-async-patterns.core/>? ~'c ~E-msg)} ~'func)
           ;~'rep    (replace ~`{~'_ ~~'cb} ~'func)
     ]
     ;(println (first (next &form)))
     (println "func: " (quote ~func))
     (println "rep: " ~'rep)
       ;~'rep
       ;(~'<! ~'c)
)))


;(defmacro <? [func E-msg] 1)
   

;(core/<print 
; #_(cljs.core.async.macros/go 
;   (clojure.core/let [cljs-async-patterns.macros/c (cljs.core.async/chan 1) 
;                      cb                          `(cljs-async-patterns.core/>? cljs-async-patterns.macros/c "ERROR:") 
;                      rep                          (clojure.core/replace `{~'_ ~cb} '(.readFile (node/require "fs") "/home/george/1" "utf8" _))
;                     ] 
;     (println rep)
;     #_(<! cljs-async-patterns.macros/c)))
;)

(defmacro infiot
  "Use this macro when you pine for the notation of your childhood"
  [infixed]
  (list (second infixed) (first infixed) (last infixed)))
