goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__75340__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__75340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75341__i = 0, G__75341__a = new Array(arguments.length -  0);
while (G__75341__i < G__75341__a.length) {G__75341__a[G__75341__i] = arguments[G__75341__i + 0]; ++G__75341__i;}
  args = new cljs.core.IndexedSeq(G__75341__a,0);
} 
return G__75340__delegate.call(this,args);};
G__75340.cljs$lang$maxFixedArity = 0;
G__75340.cljs$lang$applyTo = (function (arglist__75342){
var args = cljs.core.seq(arglist__75342);
return G__75340__delegate(args);
});
G__75340.cljs$core$IFn$_invoke$arity$variadic = G__75340__delegate;
return G__75340;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__75343__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__75343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75344__i = 0, G__75344__a = new Array(arguments.length -  0);
while (G__75344__i < G__75344__a.length) {G__75344__a[G__75344__i] = arguments[G__75344__i + 0]; ++G__75344__i;}
  args = new cljs.core.IndexedSeq(G__75344__a,0);
} 
return G__75343__delegate.call(this,args);};
G__75343.cljs$lang$maxFixedArity = 0;
G__75343.cljs$lang$applyTo = (function (arglist__75345){
var args = cljs.core.seq(arglist__75345);
return G__75343__delegate(args);
});
G__75343.cljs$core$IFn$_invoke$arity$variadic = G__75343__delegate;
return G__75343;
})()
;

return null;
});
