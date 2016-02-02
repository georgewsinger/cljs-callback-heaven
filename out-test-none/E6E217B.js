goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10594__i = 0, G__10594__a = new Array(arguments.length -  0);
while (G__10594__i < G__10594__a.length) {G__10594__a[G__10594__i] = arguments[G__10594__i + 0]; ++G__10594__i;}
  args = new cljs.core.IndexedSeq(G__10594__a,0);
} 
return G__10593__delegate.call(this,args);};
G__10593.cljs$lang$maxFixedArity = 0;
G__10593.cljs$lang$applyTo = (function (arglist__10595){
var args = cljs.core.seq(arglist__10595);
return G__10593__delegate(args);
});
G__10593.cljs$core$IFn$_invoke$arity$variadic = G__10593__delegate;
return G__10593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10597__i = 0, G__10597__a = new Array(arguments.length -  0);
while (G__10597__i < G__10597__a.length) {G__10597__a[G__10597__i] = arguments[G__10597__i + 0]; ++G__10597__i;}
  args = new cljs.core.IndexedSeq(G__10597__a,0);
} 
return G__10596__delegate.call(this,args);};
G__10596.cljs$lang$maxFixedArity = 0;
G__10596.cljs$lang$applyTo = (function (arglist__10598){
var args = cljs.core.seq(arglist__10598);
return G__10596__delegate(args);
});
G__10596.cljs$core$IFn$_invoke$arity$variadic = G__10596__delegate;
return G__10596;
})()
;

return null;
});
