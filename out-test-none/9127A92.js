goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27198__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27199__i = 0, G__27199__a = new Array(arguments.length -  0);
while (G__27199__i < G__27199__a.length) {G__27199__a[G__27199__i] = arguments[G__27199__i + 0]; ++G__27199__i;}
  args = new cljs.core.IndexedSeq(G__27199__a,0);
} 
return G__27198__delegate.call(this,args);};
G__27198.cljs$lang$maxFixedArity = 0;
G__27198.cljs$lang$applyTo = (function (arglist__27200){
var args = cljs.core.seq(arglist__27200);
return G__27198__delegate(args);
});
G__27198.cljs$core$IFn$_invoke$arity$variadic = G__27198__delegate;
return G__27198;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27201__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27202__i = 0, G__27202__a = new Array(arguments.length -  0);
while (G__27202__i < G__27202__a.length) {G__27202__a[G__27202__i] = arguments[G__27202__i + 0]; ++G__27202__i;}
  args = new cljs.core.IndexedSeq(G__27202__a,0);
} 
return G__27201__delegate.call(this,args);};
G__27201.cljs$lang$maxFixedArity = 0;
G__27201.cljs$lang$applyTo = (function (arglist__27203){
var args = cljs.core.seq(arglist__27203);
return G__27201__delegate(args);
});
G__27201.cljs$core$IFn$_invoke$arity$variadic = G__27201__delegate;
return G__27201;
})()
;

return null;
});
