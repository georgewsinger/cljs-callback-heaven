goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9595__i = 0, G__9595__a = new Array(arguments.length -  0);
while (G__9595__i < G__9595__a.length) {G__9595__a[G__9595__i] = arguments[G__9595__i + 0]; ++G__9595__i;}
  args = new cljs.core.IndexedSeq(G__9595__a,0);
} 
return G__9594__delegate.call(this,args);};
G__9594.cljs$lang$maxFixedArity = 0;
G__9594.cljs$lang$applyTo = (function (arglist__9596){
var args = cljs.core.seq(arglist__9596);
return G__9594__delegate(args);
});
G__9594.cljs$core$IFn$_invoke$arity$variadic = G__9594__delegate;
return G__9594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9598__i = 0, G__9598__a = new Array(arguments.length -  0);
while (G__9598__i < G__9598__a.length) {G__9598__a[G__9598__i] = arguments[G__9598__i + 0]; ++G__9598__i;}
  args = new cljs.core.IndexedSeq(G__9598__a,0);
} 
return G__9597__delegate.call(this,args);};
G__9597.cljs$lang$maxFixedArity = 0;
G__9597.cljs$lang$applyTo = (function (arglist__9599){
var args = cljs.core.seq(arglist__9599);
return G__9597__delegate(args);
});
G__9597.cljs$core$IFn$_invoke$arity$variadic = G__9597__delegate;
return G__9597;
})()
;

return null;
});
