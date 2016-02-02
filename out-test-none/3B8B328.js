goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10572__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10573__i = 0, G__10573__a = new Array(arguments.length -  0);
while (G__10573__i < G__10573__a.length) {G__10573__a[G__10573__i] = arguments[G__10573__i + 0]; ++G__10573__i;}
  args = new cljs.core.IndexedSeq(G__10573__a,0);
} 
return G__10572__delegate.call(this,args);};
G__10572.cljs$lang$maxFixedArity = 0;
G__10572.cljs$lang$applyTo = (function (arglist__10574){
var args = cljs.core.seq(arglist__10574);
return G__10572__delegate(args);
});
G__10572.cljs$core$IFn$_invoke$arity$variadic = G__10572__delegate;
return G__10572;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10575__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10576__i = 0, G__10576__a = new Array(arguments.length -  0);
while (G__10576__i < G__10576__a.length) {G__10576__a[G__10576__i] = arguments[G__10576__i + 0]; ++G__10576__i;}
  args = new cljs.core.IndexedSeq(G__10576__a,0);
} 
return G__10575__delegate.call(this,args);};
G__10575.cljs$lang$maxFixedArity = 0;
G__10575.cljs$lang$applyTo = (function (arglist__10577){
var args = cljs.core.seq(arglist__10577);
return G__10575__delegate(args);
});
G__10575.cljs$core$IFn$_invoke$arity$variadic = G__10575__delegate;
return G__10575;
})()
;

return null;
});
