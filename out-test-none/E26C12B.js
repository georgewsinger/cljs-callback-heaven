goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13211__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13212__i = 0, G__13212__a = new Array(arguments.length -  0);
while (G__13212__i < G__13212__a.length) {G__13212__a[G__13212__i] = arguments[G__13212__i + 0]; ++G__13212__i;}
  args = new cljs.core.IndexedSeq(G__13212__a,0);
} 
return G__13211__delegate.call(this,args);};
G__13211.cljs$lang$maxFixedArity = 0;
G__13211.cljs$lang$applyTo = (function (arglist__13213){
var args = cljs.core.seq(arglist__13213);
return G__13211__delegate(args);
});
G__13211.cljs$core$IFn$_invoke$arity$variadic = G__13211__delegate;
return G__13211;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13214__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13215__i = 0, G__13215__a = new Array(arguments.length -  0);
while (G__13215__i < G__13215__a.length) {G__13215__a[G__13215__i] = arguments[G__13215__i + 0]; ++G__13215__i;}
  args = new cljs.core.IndexedSeq(G__13215__a,0);
} 
return G__13214__delegate.call(this,args);};
G__13214.cljs$lang$maxFixedArity = 0;
G__13214.cljs$lang$applyTo = (function (arglist__13216){
var args = cljs.core.seq(arglist__13216);
return G__13214__delegate(args);
});
G__13214.cljs$core$IFn$_invoke$arity$variadic = G__13214__delegate;
return G__13214;
})()
;

return null;
});
