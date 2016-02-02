(ns cljs-callback-heaven.macros)

(defmacro <? 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>? ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>? ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <1 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>1 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>1 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <2 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>2 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>2 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))

(defmacro <3 
  ([func]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>3 ~c)} func)
           (cljs.core.async/<! ~c)))))
  ([func E-msg]
    (let [c (gensym "c")]
      `(cljs.core.async.macros/go 
         (let [~c (cljs.core.async/chan 1)]
           ~(replace {'_ `(cljs-callback-heaven.core/>3 ~c ~E-msg)} func)
           (cljs.core.async/<! ~c))))))
