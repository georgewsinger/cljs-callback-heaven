goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33403__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33404__i = 0, G__33404__a = new Array(arguments.length -  0);
while (G__33404__i < G__33404__a.length) {G__33404__a[G__33404__i] = arguments[G__33404__i + 0]; ++G__33404__i;}
  args = new cljs.core.IndexedSeq(G__33404__a,0);
} 
return G__33403__delegate.call(this,args);};
G__33403.cljs$lang$maxFixedArity = 0;
G__33403.cljs$lang$applyTo = (function (arglist__33405){
var args = cljs.core.seq(arglist__33405);
return G__33403__delegate(args);
});
G__33403.cljs$core$IFn$_invoke$arity$variadic = G__33403__delegate;
return G__33403;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33406__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33407__i = 0, G__33407__a = new Array(arguments.length -  0);
while (G__33407__i < G__33407__a.length) {G__33407__a[G__33407__i] = arguments[G__33407__i + 0]; ++G__33407__i;}
  args = new cljs.core.IndexedSeq(G__33407__a,0);
} 
return G__33406__delegate.call(this,args);};
G__33406.cljs$lang$maxFixedArity = 0;
G__33406.cljs$lang$applyTo = (function (arglist__33408){
var args = cljs.core.seq(arglist__33408);
return G__33406__delegate(args);
});
G__33406.cljs$core$IFn$_invoke$arity$variadic = G__33406__delegate;
return G__33406;
})()
;

return null;
});
