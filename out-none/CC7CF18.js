goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18833__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18834__i = 0, G__18834__a = new Array(arguments.length -  0);
while (G__18834__i < G__18834__a.length) {G__18834__a[G__18834__i] = arguments[G__18834__i + 0]; ++G__18834__i;}
  args = new cljs.core.IndexedSeq(G__18834__a,0);
} 
return G__18833__delegate.call(this,args);};
G__18833.cljs$lang$maxFixedArity = 0;
G__18833.cljs$lang$applyTo = (function (arglist__18835){
var args = cljs.core.seq(arglist__18835);
return G__18833__delegate(args);
});
G__18833.cljs$core$IFn$_invoke$arity$variadic = G__18833__delegate;
return G__18833;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18836__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18837__i = 0, G__18837__a = new Array(arguments.length -  0);
while (G__18837__i < G__18837__a.length) {G__18837__a[G__18837__i] = arguments[G__18837__i + 0]; ++G__18837__i;}
  args = new cljs.core.IndexedSeq(G__18837__a,0);
} 
return G__18836__delegate.call(this,args);};
G__18836.cljs$lang$maxFixedArity = 0;
G__18836.cljs$lang$applyTo = (function (arglist__18838){
var args = cljs.core.seq(arglist__18838);
return G__18836__delegate(args);
});
G__18836.cljs$core$IFn$_invoke$arity$variadic = G__18836__delegate;
return G__18836;
})()
;

return null;
});
