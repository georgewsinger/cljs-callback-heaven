goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__244707__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__244707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__244708__i = 0, G__244708__a = new Array(arguments.length -  0);
while (G__244708__i < G__244708__a.length) {G__244708__a[G__244708__i] = arguments[G__244708__i + 0]; ++G__244708__i;}
  args = new cljs.core.IndexedSeq(G__244708__a,0);
} 
return G__244707__delegate.call(this,args);};
G__244707.cljs$lang$maxFixedArity = 0;
G__244707.cljs$lang$applyTo = (function (arglist__244709){
var args = cljs.core.seq(arglist__244709);
return G__244707__delegate(args);
});
G__244707.cljs$core$IFn$_invoke$arity$variadic = G__244707__delegate;
return G__244707;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__244710__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__244710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__244711__i = 0, G__244711__a = new Array(arguments.length -  0);
while (G__244711__i < G__244711__a.length) {G__244711__a[G__244711__i] = arguments[G__244711__i + 0]; ++G__244711__i;}
  args = new cljs.core.IndexedSeq(G__244711__a,0);
} 
return G__244710__delegate.call(this,args);};
G__244710.cljs$lang$maxFixedArity = 0;
G__244710.cljs$lang$applyTo = (function (arglist__244712){
var args = cljs.core.seq(arglist__244712);
return G__244710__delegate(args);
});
G__244710.cljs$core$IFn$_invoke$arity$variadic = G__244710__delegate;
return G__244710;
})()
;

return null;
});
