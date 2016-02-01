goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16386__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16387__i = 0, G__16387__a = new Array(arguments.length -  0);
while (G__16387__i < G__16387__a.length) {G__16387__a[G__16387__i] = arguments[G__16387__i + 0]; ++G__16387__i;}
  args = new cljs.core.IndexedSeq(G__16387__a,0);
} 
return G__16386__delegate.call(this,args);};
G__16386.cljs$lang$maxFixedArity = 0;
G__16386.cljs$lang$applyTo = (function (arglist__16388){
var args = cljs.core.seq(arglist__16388);
return G__16386__delegate(args);
});
G__16386.cljs$core$IFn$_invoke$arity$variadic = G__16386__delegate;
return G__16386;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16389__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16390__i = 0, G__16390__a = new Array(arguments.length -  0);
while (G__16390__i < G__16390__a.length) {G__16390__a[G__16390__i] = arguments[G__16390__i + 0]; ++G__16390__i;}
  args = new cljs.core.IndexedSeq(G__16390__a,0);
} 
return G__16389__delegate.call(this,args);};
G__16389.cljs$lang$maxFixedArity = 0;
G__16389.cljs$lang$applyTo = (function (arglist__16391){
var args = cljs.core.seq(arglist__16391);
return G__16389__delegate(args);
});
G__16389.cljs$core$IFn$_invoke$arity$variadic = G__16389__delegate;
return G__16389;
})()
;

return null;
});
