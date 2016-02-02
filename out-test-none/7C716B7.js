goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25986__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25987__i = 0, G__25987__a = new Array(arguments.length -  0);
while (G__25987__i < G__25987__a.length) {G__25987__a[G__25987__i] = arguments[G__25987__i + 0]; ++G__25987__i;}
  args = new cljs.core.IndexedSeq(G__25987__a,0);
} 
return G__25986__delegate.call(this,args);};
G__25986.cljs$lang$maxFixedArity = 0;
G__25986.cljs$lang$applyTo = (function (arglist__25988){
var args = cljs.core.seq(arglist__25988);
return G__25986__delegate(args);
});
G__25986.cljs$core$IFn$_invoke$arity$variadic = G__25986__delegate;
return G__25986;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25989__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25990__i = 0, G__25990__a = new Array(arguments.length -  0);
while (G__25990__i < G__25990__a.length) {G__25990__a[G__25990__i] = arguments[G__25990__i + 0]; ++G__25990__i;}
  args = new cljs.core.IndexedSeq(G__25990__a,0);
} 
return G__25989__delegate.call(this,args);};
G__25989.cljs$lang$maxFixedArity = 0;
G__25989.cljs$lang$applyTo = (function (arglist__25991){
var args = cljs.core.seq(arglist__25991);
return G__25989__delegate(args);
});
G__25989.cljs$core$IFn$_invoke$arity$variadic = G__25989__delegate;
return G__25989;
})()
;

return null;
});
