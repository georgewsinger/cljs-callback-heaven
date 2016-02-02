goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9995__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9996__i = 0, G__9996__a = new Array(arguments.length -  0);
while (G__9996__i < G__9996__a.length) {G__9996__a[G__9996__i] = arguments[G__9996__i + 0]; ++G__9996__i;}
  args = new cljs.core.IndexedSeq(G__9996__a,0);
} 
return G__9995__delegate.call(this,args);};
G__9995.cljs$lang$maxFixedArity = 0;
G__9995.cljs$lang$applyTo = (function (arglist__9997){
var args = cljs.core.seq(arglist__9997);
return G__9995__delegate(args);
});
G__9995.cljs$core$IFn$_invoke$arity$variadic = G__9995__delegate;
return G__9995;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9998__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9999__i = 0, G__9999__a = new Array(arguments.length -  0);
while (G__9999__i < G__9999__a.length) {G__9999__a[G__9999__i] = arguments[G__9999__i + 0]; ++G__9999__i;}
  args = new cljs.core.IndexedSeq(G__9999__a,0);
} 
return G__9998__delegate.call(this,args);};
G__9998.cljs$lang$maxFixedArity = 0;
G__9998.cljs$lang$applyTo = (function (arglist__10000){
var args = cljs.core.seq(arglist__10000);
return G__9998__delegate(args);
});
G__9998.cljs$core$IFn$_invoke$arity$variadic = G__9998__delegate;
return G__9998;
})()
;

return null;
});
