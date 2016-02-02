goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16462__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16463__i = 0, G__16463__a = new Array(arguments.length -  0);
while (G__16463__i < G__16463__a.length) {G__16463__a[G__16463__i] = arguments[G__16463__i + 0]; ++G__16463__i;}
  args = new cljs.core.IndexedSeq(G__16463__a,0);
} 
return G__16462__delegate.call(this,args);};
G__16462.cljs$lang$maxFixedArity = 0;
G__16462.cljs$lang$applyTo = (function (arglist__16464){
var args = cljs.core.seq(arglist__16464);
return G__16462__delegate(args);
});
G__16462.cljs$core$IFn$_invoke$arity$variadic = G__16462__delegate;
return G__16462;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16465__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16466__i = 0, G__16466__a = new Array(arguments.length -  0);
while (G__16466__i < G__16466__a.length) {G__16466__a[G__16466__i] = arguments[G__16466__i + 0]; ++G__16466__i;}
  args = new cljs.core.IndexedSeq(G__16466__a,0);
} 
return G__16465__delegate.call(this,args);};
G__16465.cljs$lang$maxFixedArity = 0;
G__16465.cljs$lang$applyTo = (function (arglist__16467){
var args = cljs.core.seq(arglist__16467);
return G__16465__delegate(args);
});
G__16465.cljs$core$IFn$_invoke$arity$variadic = G__16465__delegate;
return G__16465;
})()
;

return null;
});
