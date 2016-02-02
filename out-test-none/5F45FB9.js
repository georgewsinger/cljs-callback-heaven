goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17098__i = 0, G__17098__a = new Array(arguments.length -  0);
while (G__17098__i < G__17098__a.length) {G__17098__a[G__17098__i] = arguments[G__17098__i + 0]; ++G__17098__i;}
  args = new cljs.core.IndexedSeq(G__17098__a,0);
} 
return G__17097__delegate.call(this,args);};
G__17097.cljs$lang$maxFixedArity = 0;
G__17097.cljs$lang$applyTo = (function (arglist__17099){
var args = cljs.core.seq(arglist__17099);
return G__17097__delegate(args);
});
G__17097.cljs$core$IFn$_invoke$arity$variadic = G__17097__delegate;
return G__17097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17101__i = 0, G__17101__a = new Array(arguments.length -  0);
while (G__17101__i < G__17101__a.length) {G__17101__a[G__17101__i] = arguments[G__17101__i + 0]; ++G__17101__i;}
  args = new cljs.core.IndexedSeq(G__17101__a,0);
} 
return G__17100__delegate.call(this,args);};
G__17100.cljs$lang$maxFixedArity = 0;
G__17100.cljs$lang$applyTo = (function (arglist__17102){
var args = cljs.core.seq(arglist__17102);
return G__17100__delegate(args);
});
G__17100.cljs$core$IFn$_invoke$arity$variadic = G__17100__delegate;
return G__17100;
})()
;

return null;
});
