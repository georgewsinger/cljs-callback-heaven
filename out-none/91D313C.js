goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14833__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14834__i = 0, G__14834__a = new Array(arguments.length -  0);
while (G__14834__i < G__14834__a.length) {G__14834__a[G__14834__i] = arguments[G__14834__i + 0]; ++G__14834__i;}
  args = new cljs.core.IndexedSeq(G__14834__a,0);
} 
return G__14833__delegate.call(this,args);};
G__14833.cljs$lang$maxFixedArity = 0;
G__14833.cljs$lang$applyTo = (function (arglist__14835){
var args = cljs.core.seq(arglist__14835);
return G__14833__delegate(args);
});
G__14833.cljs$core$IFn$_invoke$arity$variadic = G__14833__delegate;
return G__14833;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14836__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14837__i = 0, G__14837__a = new Array(arguments.length -  0);
while (G__14837__i < G__14837__a.length) {G__14837__a[G__14837__i] = arguments[G__14837__i + 0]; ++G__14837__i;}
  args = new cljs.core.IndexedSeq(G__14837__a,0);
} 
return G__14836__delegate.call(this,args);};
G__14836.cljs$lang$maxFixedArity = 0;
G__14836.cljs$lang$applyTo = (function (arglist__14838){
var args = cljs.core.seq(arglist__14838);
return G__14836__delegate(args);
});
G__14836.cljs$core$IFn$_invoke$arity$variadic = G__14836__delegate;
return G__14836;
})()
;

return null;
});
