goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20666__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20667__i = 0, G__20667__a = new Array(arguments.length -  0);
while (G__20667__i < G__20667__a.length) {G__20667__a[G__20667__i] = arguments[G__20667__i + 0]; ++G__20667__i;}
  args = new cljs.core.IndexedSeq(G__20667__a,0);
} 
return G__20666__delegate.call(this,args);};
G__20666.cljs$lang$maxFixedArity = 0;
G__20666.cljs$lang$applyTo = (function (arglist__20668){
var args = cljs.core.seq(arglist__20668);
return G__20666__delegate(args);
});
G__20666.cljs$core$IFn$_invoke$arity$variadic = G__20666__delegate;
return G__20666;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20669__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20670__i = 0, G__20670__a = new Array(arguments.length -  0);
while (G__20670__i < G__20670__a.length) {G__20670__a[G__20670__i] = arguments[G__20670__i + 0]; ++G__20670__i;}
  args = new cljs.core.IndexedSeq(G__20670__a,0);
} 
return G__20669__delegate.call(this,args);};
G__20669.cljs$lang$maxFixedArity = 0;
G__20669.cljs$lang$applyTo = (function (arglist__20671){
var args = cljs.core.seq(arglist__20671);
return G__20669__delegate(args);
});
G__20669.cljs$core$IFn$_invoke$arity$variadic = G__20669__delegate;
return G__20669;
})()
;

return null;
});
