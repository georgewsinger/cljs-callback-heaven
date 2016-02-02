goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33050__i = 0, G__33050__a = new Array(arguments.length -  0);
while (G__33050__i < G__33050__a.length) {G__33050__a[G__33050__i] = arguments[G__33050__i + 0]; ++G__33050__i;}
  args = new cljs.core.IndexedSeq(G__33050__a,0);
} 
return G__33049__delegate.call(this,args);};
G__33049.cljs$lang$maxFixedArity = 0;
G__33049.cljs$lang$applyTo = (function (arglist__33051){
var args = cljs.core.seq(arglist__33051);
return G__33049__delegate(args);
});
G__33049.cljs$core$IFn$_invoke$arity$variadic = G__33049__delegate;
return G__33049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33053__i = 0, G__33053__a = new Array(arguments.length -  0);
while (G__33053__i < G__33053__a.length) {G__33053__a[G__33053__i] = arguments[G__33053__i + 0]; ++G__33053__i;}
  args = new cljs.core.IndexedSeq(G__33053__a,0);
} 
return G__33052__delegate.call(this,args);};
G__33052.cljs$lang$maxFixedArity = 0;
G__33052.cljs$lang$applyTo = (function (arglist__33054){
var args = cljs.core.seq(arglist__33054);
return G__33052__delegate(args);
});
G__33052.cljs$core$IFn$_invoke$arity$variadic = G__33052__delegate;
return G__33052;
})()
;

return null;
});
