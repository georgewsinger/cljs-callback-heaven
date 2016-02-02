goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11380__i = 0, G__11380__a = new Array(arguments.length -  0);
while (G__11380__i < G__11380__a.length) {G__11380__a[G__11380__i] = arguments[G__11380__i + 0]; ++G__11380__i;}
  args = new cljs.core.IndexedSeq(G__11380__a,0);
} 
return G__11379__delegate.call(this,args);};
G__11379.cljs$lang$maxFixedArity = 0;
G__11379.cljs$lang$applyTo = (function (arglist__11381){
var args = cljs.core.seq(arglist__11381);
return G__11379__delegate(args);
});
G__11379.cljs$core$IFn$_invoke$arity$variadic = G__11379__delegate;
return G__11379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11383__i = 0, G__11383__a = new Array(arguments.length -  0);
while (G__11383__i < G__11383__a.length) {G__11383__a[G__11383__i] = arguments[G__11383__i + 0]; ++G__11383__i;}
  args = new cljs.core.IndexedSeq(G__11383__a,0);
} 
return G__11382__delegate.call(this,args);};
G__11382.cljs$lang$maxFixedArity = 0;
G__11382.cljs$lang$applyTo = (function (arglist__11384){
var args = cljs.core.seq(arglist__11384);
return G__11382__delegate(args);
});
G__11382.cljs$core$IFn$_invoke$arity$variadic = G__11382__delegate;
return G__11382;
})()
;

return null;
});
