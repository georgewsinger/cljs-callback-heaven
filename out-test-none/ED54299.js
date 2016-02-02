goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27833__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27834__i = 0, G__27834__a = new Array(arguments.length -  0);
while (G__27834__i < G__27834__a.length) {G__27834__a[G__27834__i] = arguments[G__27834__i + 0]; ++G__27834__i;}
  args = new cljs.core.IndexedSeq(G__27834__a,0);
} 
return G__27833__delegate.call(this,args);};
G__27833.cljs$lang$maxFixedArity = 0;
G__27833.cljs$lang$applyTo = (function (arglist__27835){
var args = cljs.core.seq(arglist__27835);
return G__27833__delegate(args);
});
G__27833.cljs$core$IFn$_invoke$arity$variadic = G__27833__delegate;
return G__27833;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27836__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27837__i = 0, G__27837__a = new Array(arguments.length -  0);
while (G__27837__i < G__27837__a.length) {G__27837__a[G__27837__i] = arguments[G__27837__i + 0]; ++G__27837__i;}
  args = new cljs.core.IndexedSeq(G__27837__a,0);
} 
return G__27836__delegate.call(this,args);};
G__27836.cljs$lang$maxFixedArity = 0;
G__27836.cljs$lang$applyTo = (function (arglist__27838){
var args = cljs.core.seq(arglist__27838);
return G__27836__delegate(args);
});
G__27836.cljs$core$IFn$_invoke$arity$variadic = G__27836__delegate;
return G__27836;
})()
;

return null;
});
