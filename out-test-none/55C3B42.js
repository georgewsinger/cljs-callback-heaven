goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37094__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37095__i = 0, G__37095__a = new Array(arguments.length -  0);
while (G__37095__i < G__37095__a.length) {G__37095__a[G__37095__i] = arguments[G__37095__i + 0]; ++G__37095__i;}
  args = new cljs.core.IndexedSeq(G__37095__a,0);
} 
return G__37094__delegate.call(this,args);};
G__37094.cljs$lang$maxFixedArity = 0;
G__37094.cljs$lang$applyTo = (function (arglist__37096){
var args = cljs.core.seq(arglist__37096);
return G__37094__delegate(args);
});
G__37094.cljs$core$IFn$_invoke$arity$variadic = G__37094__delegate;
return G__37094;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37097__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37098__i = 0, G__37098__a = new Array(arguments.length -  0);
while (G__37098__i < G__37098__a.length) {G__37098__a[G__37098__i] = arguments[G__37098__i + 0]; ++G__37098__i;}
  args = new cljs.core.IndexedSeq(G__37098__a,0);
} 
return G__37097__delegate.call(this,args);};
G__37097.cljs$lang$maxFixedArity = 0;
G__37097.cljs$lang$applyTo = (function (arglist__37099){
var args = cljs.core.seq(arglist__37099);
return G__37097__delegate(args);
});
G__37097.cljs$core$IFn$_invoke$arity$variadic = G__37097__delegate;
return G__37097;
})()
;

return null;
});
