goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8699__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8700__i = 0, G__8700__a = new Array(arguments.length -  0);
while (G__8700__i < G__8700__a.length) {G__8700__a[G__8700__i] = arguments[G__8700__i + 0]; ++G__8700__i;}
  args = new cljs.core.IndexedSeq(G__8700__a,0);
} 
return G__8699__delegate.call(this,args);};
G__8699.cljs$lang$maxFixedArity = 0;
G__8699.cljs$lang$applyTo = (function (arglist__8701){
var args = cljs.core.seq(arglist__8701);
return G__8699__delegate(args);
});
G__8699.cljs$core$IFn$_invoke$arity$variadic = G__8699__delegate;
return G__8699;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8702__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8703__i = 0, G__8703__a = new Array(arguments.length -  0);
while (G__8703__i < G__8703__a.length) {G__8703__a[G__8703__i] = arguments[G__8703__i + 0]; ++G__8703__i;}
  args = new cljs.core.IndexedSeq(G__8703__a,0);
} 
return G__8702__delegate.call(this,args);};
G__8702.cljs$lang$maxFixedArity = 0;
G__8702.cljs$lang$applyTo = (function (arglist__8704){
var args = cljs.core.seq(arglist__8704);
return G__8702__delegate(args);
});
G__8702.cljs$core$IFn$_invoke$arity$variadic = G__8702__delegate;
return G__8702;
})()
;

return null;
});
