(ns cljs-async-patterns.macros)

(defmacro <? [func E-msg]
   `(cljs.core.async.macros/go 
      (let [~'c     (cljs.core.async/chan 1) 
            ;~'cb    (cljs-async-patterns.core/>? ~'c ~E-msg)
           ~'rep    (replace (quote {~'_ (cljs-async-patterns.core/>? ~'c ~E-msg) }) (quote ~(pop func)))
           ;~'rep    (replace (quote {~'_ (cljs-async-patterns.core/>? ~'c ~E-msg) }) (quote ~func))
          ]
       ;~'rep
      ; ~(apply (first func) ~'rep)
       (~'<! ~'c))))
