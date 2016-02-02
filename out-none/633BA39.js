goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61500__i = 0, G__61500__a = new Array(arguments.length -  0);
while (G__61500__i < G__61500__a.length) {G__61500__a[G__61500__i] = arguments[G__61500__i + 0]; ++G__61500__i;}
  args = new cljs.core.IndexedSeq(G__61500__a,0);
} 
return G__61499__delegate.call(this,args);};
G__61499.cljs$lang$maxFixedArity = 0;
G__61499.cljs$lang$applyTo = (function (arglist__61501){
var args = cljs.core.seq(arglist__61501);
return G__61499__delegate(args);
});
G__61499.cljs$core$IFn$_invoke$arity$variadic = G__61499__delegate;
return G__61499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61503__i = 0, G__61503__a = new Array(arguments.length -  0);
while (G__61503__i < G__61503__a.length) {G__61503__a[G__61503__i] = arguments[G__61503__i + 0]; ++G__61503__i;}
  args = new cljs.core.IndexedSeq(G__61503__a,0);
} 
return G__61502__delegate.call(this,args);};
G__61502.cljs$lang$maxFixedArity = 0;
G__61502.cljs$lang$applyTo = (function (arglist__61504){
var args = cljs.core.seq(arglist__61504);
return G__61502__delegate(args);
});
G__61502.cljs$core$IFn$_invoke$arity$variadic = G__61502__delegate;
return G__61502;
})()
;

return null;
});
