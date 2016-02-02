goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14921__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14922__i = 0, G__14922__a = new Array(arguments.length -  0);
while (G__14922__i < G__14922__a.length) {G__14922__a[G__14922__i] = arguments[G__14922__i + 0]; ++G__14922__i;}
  args = new cljs.core.IndexedSeq(G__14922__a,0);
} 
return G__14921__delegate.call(this,args);};
G__14921.cljs$lang$maxFixedArity = 0;
G__14921.cljs$lang$applyTo = (function (arglist__14923){
var args = cljs.core.seq(arglist__14923);
return G__14921__delegate(args);
});
G__14921.cljs$core$IFn$_invoke$arity$variadic = G__14921__delegate;
return G__14921;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14924__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14925__i = 0, G__14925__a = new Array(arguments.length -  0);
while (G__14925__i < G__14925__a.length) {G__14925__a[G__14925__i] = arguments[G__14925__i + 0]; ++G__14925__i;}
  args = new cljs.core.IndexedSeq(G__14925__a,0);
} 
return G__14924__delegate.call(this,args);};
G__14924.cljs$lang$maxFixedArity = 0;
G__14924.cljs$lang$applyTo = (function (arglist__14926){
var args = cljs.core.seq(arglist__14926);
return G__14924__delegate(args);
});
G__14924.cljs$core$IFn$_invoke$arity$variadic = G__14924__delegate;
return G__14924;
})()
;

return null;
});
