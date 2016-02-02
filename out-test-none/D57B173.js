goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159429__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159430__i = 0, G__159430__a = new Array(arguments.length -  0);
while (G__159430__i < G__159430__a.length) {G__159430__a[G__159430__i] = arguments[G__159430__i + 0]; ++G__159430__i;}
  args = new cljs.core.IndexedSeq(G__159430__a,0);
} 
return G__159429__delegate.call(this,args);};
G__159429.cljs$lang$maxFixedArity = 0;
G__159429.cljs$lang$applyTo = (function (arglist__159431){
var args = cljs.core.seq(arglist__159431);
return G__159429__delegate(args);
});
G__159429.cljs$core$IFn$_invoke$arity$variadic = G__159429__delegate;
return G__159429;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159432__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159433__i = 0, G__159433__a = new Array(arguments.length -  0);
while (G__159433__i < G__159433__a.length) {G__159433__a[G__159433__i] = arguments[G__159433__i + 0]; ++G__159433__i;}
  args = new cljs.core.IndexedSeq(G__159433__a,0);
} 
return G__159432__delegate.call(this,args);};
G__159432.cljs$lang$maxFixedArity = 0;
G__159432.cljs$lang$applyTo = (function (arglist__159434){
var args = cljs.core.seq(arglist__159434);
return G__159432__delegate(args);
});
G__159432.cljs$core$IFn$_invoke$arity$variadic = G__159432__delegate;
return G__159432;
})()
;

return null;
});
