goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16603__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16604__i = 0, G__16604__a = new Array(arguments.length -  0);
while (G__16604__i < G__16604__a.length) {G__16604__a[G__16604__i] = arguments[G__16604__i + 0]; ++G__16604__i;}
  args = new cljs.core.IndexedSeq(G__16604__a,0);
} 
return G__16603__delegate.call(this,args);};
G__16603.cljs$lang$maxFixedArity = 0;
G__16603.cljs$lang$applyTo = (function (arglist__16605){
var args = cljs.core.seq(arglist__16605);
return G__16603__delegate(args);
});
G__16603.cljs$core$IFn$_invoke$arity$variadic = G__16603__delegate;
return G__16603;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16606__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16607__i = 0, G__16607__a = new Array(arguments.length -  0);
while (G__16607__i < G__16607__a.length) {G__16607__a[G__16607__i] = arguments[G__16607__i + 0]; ++G__16607__i;}
  args = new cljs.core.IndexedSeq(G__16607__a,0);
} 
return G__16606__delegate.call(this,args);};
G__16606.cljs$lang$maxFixedArity = 0;
G__16606.cljs$lang$applyTo = (function (arglist__16608){
var args = cljs.core.seq(arglist__16608);
return G__16606__delegate(args);
});
G__16606.cljs$core$IFn$_invoke$arity$variadic = G__16606__delegate;
return G__16606;
})()
;

return null;
});
