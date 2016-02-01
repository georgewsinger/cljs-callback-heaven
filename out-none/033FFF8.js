goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9809__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9810__i = 0, G__9810__a = new Array(arguments.length -  0);
while (G__9810__i < G__9810__a.length) {G__9810__a[G__9810__i] = arguments[G__9810__i + 0]; ++G__9810__i;}
  args = new cljs.core.IndexedSeq(G__9810__a,0);
} 
return G__9809__delegate.call(this,args);};
G__9809.cljs$lang$maxFixedArity = 0;
G__9809.cljs$lang$applyTo = (function (arglist__9811){
var args = cljs.core.seq(arglist__9811);
return G__9809__delegate(args);
});
G__9809.cljs$core$IFn$_invoke$arity$variadic = G__9809__delegate;
return G__9809;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9812__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9813__i = 0, G__9813__a = new Array(arguments.length -  0);
while (G__9813__i < G__9813__a.length) {G__9813__a[G__9813__i] = arguments[G__9813__i + 0]; ++G__9813__i;}
  args = new cljs.core.IndexedSeq(G__9813__a,0);
} 
return G__9812__delegate.call(this,args);};
G__9812.cljs$lang$maxFixedArity = 0;
G__9812.cljs$lang$applyTo = (function (arglist__9814){
var args = cljs.core.seq(arglist__9814);
return G__9812__delegate(args);
});
G__9812.cljs$core$IFn$_invoke$arity$variadic = G__9812__delegate;
return G__9812;
})()
;

return null;
});
