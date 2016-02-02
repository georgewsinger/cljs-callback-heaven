goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24836__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24837__i = 0, G__24837__a = new Array(arguments.length -  0);
while (G__24837__i < G__24837__a.length) {G__24837__a[G__24837__i] = arguments[G__24837__i + 0]; ++G__24837__i;}
  args = new cljs.core.IndexedSeq(G__24837__a,0);
} 
return G__24836__delegate.call(this,args);};
G__24836.cljs$lang$maxFixedArity = 0;
G__24836.cljs$lang$applyTo = (function (arglist__24838){
var args = cljs.core.seq(arglist__24838);
return G__24836__delegate(args);
});
G__24836.cljs$core$IFn$_invoke$arity$variadic = G__24836__delegate;
return G__24836;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24839__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24840__i = 0, G__24840__a = new Array(arguments.length -  0);
while (G__24840__i < G__24840__a.length) {G__24840__a[G__24840__i] = arguments[G__24840__i + 0]; ++G__24840__i;}
  args = new cljs.core.IndexedSeq(G__24840__a,0);
} 
return G__24839__delegate.call(this,args);};
G__24839.cljs$lang$maxFixedArity = 0;
G__24839.cljs$lang$applyTo = (function (arglist__24841){
var args = cljs.core.seq(arglist__24841);
return G__24839__delegate(args);
});
G__24839.cljs$core$IFn$_invoke$arity$variadic = G__24839__delegate;
return G__24839;
})()
;

return null;
});
