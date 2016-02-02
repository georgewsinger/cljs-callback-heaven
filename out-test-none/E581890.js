goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9824__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9825__i = 0, G__9825__a = new Array(arguments.length -  0);
while (G__9825__i < G__9825__a.length) {G__9825__a[G__9825__i] = arguments[G__9825__i + 0]; ++G__9825__i;}
  args = new cljs.core.IndexedSeq(G__9825__a,0);
} 
return G__9824__delegate.call(this,args);};
G__9824.cljs$lang$maxFixedArity = 0;
G__9824.cljs$lang$applyTo = (function (arglist__9826){
var args = cljs.core.seq(arglist__9826);
return G__9824__delegate(args);
});
G__9824.cljs$core$IFn$_invoke$arity$variadic = G__9824__delegate;
return G__9824;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9827__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9828__i = 0, G__9828__a = new Array(arguments.length -  0);
while (G__9828__i < G__9828__a.length) {G__9828__a[G__9828__i] = arguments[G__9828__i + 0]; ++G__9828__i;}
  args = new cljs.core.IndexedSeq(G__9828__a,0);
} 
return G__9827__delegate.call(this,args);};
G__9827.cljs$lang$maxFixedArity = 0;
G__9827.cljs$lang$applyTo = (function (arglist__9829){
var args = cljs.core.seq(arglist__9829);
return G__9827__delegate(args);
});
G__9827.cljs$core$IFn$_invoke$arity$variadic = G__9827__delegate;
return G__9827;
})()
;

return null;
});
