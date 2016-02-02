goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14911__i = 0, G__14911__a = new Array(arguments.length -  0);
while (G__14911__i < G__14911__a.length) {G__14911__a[G__14911__i] = arguments[G__14911__i + 0]; ++G__14911__i;}
  args = new cljs.core.IndexedSeq(G__14911__a,0);
} 
return G__14910__delegate.call(this,args);};
G__14910.cljs$lang$maxFixedArity = 0;
G__14910.cljs$lang$applyTo = (function (arglist__14912){
var args = cljs.core.seq(arglist__14912);
return G__14910__delegate(args);
});
G__14910.cljs$core$IFn$_invoke$arity$variadic = G__14910__delegate;
return G__14910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14914__i = 0, G__14914__a = new Array(arguments.length -  0);
while (G__14914__i < G__14914__a.length) {G__14914__a[G__14914__i] = arguments[G__14914__i + 0]; ++G__14914__i;}
  args = new cljs.core.IndexedSeq(G__14914__a,0);
} 
return G__14913__delegate.call(this,args);};
G__14913.cljs$lang$maxFixedArity = 0;
G__14913.cljs$lang$applyTo = (function (arglist__14915){
var args = cljs.core.seq(arglist__14915);
return G__14913__delegate(args);
});
G__14913.cljs$core$IFn$_invoke$arity$variadic = G__14913__delegate;
return G__14913;
})()
;

return null;
});
