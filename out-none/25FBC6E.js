goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20498__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20499__i = 0, G__20499__a = new Array(arguments.length -  0);
while (G__20499__i < G__20499__a.length) {G__20499__a[G__20499__i] = arguments[G__20499__i + 0]; ++G__20499__i;}
  args = new cljs.core.IndexedSeq(G__20499__a,0);
} 
return G__20498__delegate.call(this,args);};
G__20498.cljs$lang$maxFixedArity = 0;
G__20498.cljs$lang$applyTo = (function (arglist__20500){
var args = cljs.core.seq(arglist__20500);
return G__20498__delegate(args);
});
G__20498.cljs$core$IFn$_invoke$arity$variadic = G__20498__delegate;
return G__20498;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20501__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20502__i = 0, G__20502__a = new Array(arguments.length -  0);
while (G__20502__i < G__20502__a.length) {G__20502__a[G__20502__i] = arguments[G__20502__i + 0]; ++G__20502__i;}
  args = new cljs.core.IndexedSeq(G__20502__a,0);
} 
return G__20501__delegate.call(this,args);};
G__20501.cljs$lang$maxFixedArity = 0;
G__20501.cljs$lang$applyTo = (function (arglist__20503){
var args = cljs.core.seq(arglist__20503);
return G__20501__delegate(args);
});
G__20501.cljs$core$IFn$_invoke$arity$variadic = G__20501__delegate;
return G__20501;
})()
;

return null;
});
