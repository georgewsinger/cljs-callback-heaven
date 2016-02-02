goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29775__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29776__i = 0, G__29776__a = new Array(arguments.length -  0);
while (G__29776__i < G__29776__a.length) {G__29776__a[G__29776__i] = arguments[G__29776__i + 0]; ++G__29776__i;}
  args = new cljs.core.IndexedSeq(G__29776__a,0);
} 
return G__29775__delegate.call(this,args);};
G__29775.cljs$lang$maxFixedArity = 0;
G__29775.cljs$lang$applyTo = (function (arglist__29777){
var args = cljs.core.seq(arglist__29777);
return G__29775__delegate(args);
});
G__29775.cljs$core$IFn$_invoke$arity$variadic = G__29775__delegate;
return G__29775;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29778__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29779__i = 0, G__29779__a = new Array(arguments.length -  0);
while (G__29779__i < G__29779__a.length) {G__29779__a[G__29779__i] = arguments[G__29779__i + 0]; ++G__29779__i;}
  args = new cljs.core.IndexedSeq(G__29779__a,0);
} 
return G__29778__delegate.call(this,args);};
G__29778.cljs$lang$maxFixedArity = 0;
G__29778.cljs$lang$applyTo = (function (arglist__29780){
var args = cljs.core.seq(arglist__29780);
return G__29778__delegate(args);
});
G__29778.cljs$core$IFn$_invoke$arity$variadic = G__29778__delegate;
return G__29778;
})()
;

return null;
});
