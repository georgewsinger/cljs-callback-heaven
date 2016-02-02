goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64836__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64837__i = 0, G__64837__a = new Array(arguments.length -  0);
while (G__64837__i < G__64837__a.length) {G__64837__a[G__64837__i] = arguments[G__64837__i + 0]; ++G__64837__i;}
  args = new cljs.core.IndexedSeq(G__64837__a,0);
} 
return G__64836__delegate.call(this,args);};
G__64836.cljs$lang$maxFixedArity = 0;
G__64836.cljs$lang$applyTo = (function (arglist__64838){
var args = cljs.core.seq(arglist__64838);
return G__64836__delegate(args);
});
G__64836.cljs$core$IFn$_invoke$arity$variadic = G__64836__delegate;
return G__64836;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64839__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64840__i = 0, G__64840__a = new Array(arguments.length -  0);
while (G__64840__i < G__64840__a.length) {G__64840__a[G__64840__i] = arguments[G__64840__i + 0]; ++G__64840__i;}
  args = new cljs.core.IndexedSeq(G__64840__a,0);
} 
return G__64839__delegate.call(this,args);};
G__64839.cljs$lang$maxFixedArity = 0;
G__64839.cljs$lang$applyTo = (function (arglist__64841){
var args = cljs.core.seq(arglist__64841);
return G__64839__delegate(args);
});
G__64839.cljs$core$IFn$_invoke$arity$variadic = G__64839__delegate;
return G__64839;
})()
;

return null;
});
