goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9372__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9373__i = 0, G__9373__a = new Array(arguments.length -  0);
while (G__9373__i < G__9373__a.length) {G__9373__a[G__9373__i] = arguments[G__9373__i + 0]; ++G__9373__i;}
  args = new cljs.core.IndexedSeq(G__9373__a,0);
} 
return G__9372__delegate.call(this,args);};
G__9372.cljs$lang$maxFixedArity = 0;
G__9372.cljs$lang$applyTo = (function (arglist__9374){
var args = cljs.core.seq(arglist__9374);
return G__9372__delegate(args);
});
G__9372.cljs$core$IFn$_invoke$arity$variadic = G__9372__delegate;
return G__9372;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9375__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9376__i = 0, G__9376__a = new Array(arguments.length -  0);
while (G__9376__i < G__9376__a.length) {G__9376__a[G__9376__i] = arguments[G__9376__i + 0]; ++G__9376__i;}
  args = new cljs.core.IndexedSeq(G__9376__a,0);
} 
return G__9375__delegate.call(this,args);};
G__9375.cljs$lang$maxFixedArity = 0;
G__9375.cljs$lang$applyTo = (function (arglist__9377){
var args = cljs.core.seq(arglist__9377);
return G__9375__delegate(args);
});
G__9375.cljs$core$IFn$_invoke$arity$variadic = G__9375__delegate;
return G__9375;
})()
;

return null;
});
