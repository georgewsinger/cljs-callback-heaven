goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__210211__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__210211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210212__i = 0, G__210212__a = new Array(arguments.length -  0);
while (G__210212__i < G__210212__a.length) {G__210212__a[G__210212__i] = arguments[G__210212__i + 0]; ++G__210212__i;}
  args = new cljs.core.IndexedSeq(G__210212__a,0);
} 
return G__210211__delegate.call(this,args);};
G__210211.cljs$lang$maxFixedArity = 0;
G__210211.cljs$lang$applyTo = (function (arglist__210213){
var args = cljs.core.seq(arglist__210213);
return G__210211__delegate(args);
});
G__210211.cljs$core$IFn$_invoke$arity$variadic = G__210211__delegate;
return G__210211;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__210214__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__210214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210215__i = 0, G__210215__a = new Array(arguments.length -  0);
while (G__210215__i < G__210215__a.length) {G__210215__a[G__210215__i] = arguments[G__210215__i + 0]; ++G__210215__i;}
  args = new cljs.core.IndexedSeq(G__210215__a,0);
} 
return G__210214__delegate.call(this,args);};
G__210214.cljs$lang$maxFixedArity = 0;
G__210214.cljs$lang$applyTo = (function (arglist__210216){
var args = cljs.core.seq(arglist__210216);
return G__210214__delegate(args);
});
G__210214.cljs$core$IFn$_invoke$arity$variadic = G__210214__delegate;
return G__210214;
})()
;

return null;
});
