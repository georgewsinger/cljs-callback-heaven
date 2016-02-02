goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235639__i = 0, G__235639__a = new Array(arguments.length -  0);
while (G__235639__i < G__235639__a.length) {G__235639__a[G__235639__i] = arguments[G__235639__i + 0]; ++G__235639__i;}
  args = new cljs.core.IndexedSeq(G__235639__a,0);
} 
return G__235638__delegate.call(this,args);};
G__235638.cljs$lang$maxFixedArity = 0;
G__235638.cljs$lang$applyTo = (function (arglist__235640){
var args = cljs.core.seq(arglist__235640);
return G__235638__delegate(args);
});
G__235638.cljs$core$IFn$_invoke$arity$variadic = G__235638__delegate;
return G__235638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235642__i = 0, G__235642__a = new Array(arguments.length -  0);
while (G__235642__i < G__235642__a.length) {G__235642__a[G__235642__i] = arguments[G__235642__i + 0]; ++G__235642__i;}
  args = new cljs.core.IndexedSeq(G__235642__a,0);
} 
return G__235641__delegate.call(this,args);};
G__235641.cljs$lang$maxFixedArity = 0;
G__235641.cljs$lang$applyTo = (function (arglist__235643){
var args = cljs.core.seq(arglist__235643);
return G__235641__delegate(args);
});
G__235641.cljs$core$IFn$_invoke$arity$variadic = G__235641__delegate;
return G__235641;
})()
;

return null;
});
