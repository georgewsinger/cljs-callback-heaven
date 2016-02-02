goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21098__i = 0, G__21098__a = new Array(arguments.length -  0);
while (G__21098__i < G__21098__a.length) {G__21098__a[G__21098__i] = arguments[G__21098__i + 0]; ++G__21098__i;}
  args = new cljs.core.IndexedSeq(G__21098__a,0);
} 
return G__21097__delegate.call(this,args);};
G__21097.cljs$lang$maxFixedArity = 0;
G__21097.cljs$lang$applyTo = (function (arglist__21099){
var args = cljs.core.seq(arglist__21099);
return G__21097__delegate(args);
});
G__21097.cljs$core$IFn$_invoke$arity$variadic = G__21097__delegate;
return G__21097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21101__i = 0, G__21101__a = new Array(arguments.length -  0);
while (G__21101__i < G__21101__a.length) {G__21101__a[G__21101__i] = arguments[G__21101__i + 0]; ++G__21101__i;}
  args = new cljs.core.IndexedSeq(G__21101__a,0);
} 
return G__21100__delegate.call(this,args);};
G__21100.cljs$lang$maxFixedArity = 0;
G__21100.cljs$lang$applyTo = (function (arglist__21102){
var args = cljs.core.seq(arglist__21102);
return G__21100__delegate(args);
});
G__21100.cljs$core$IFn$_invoke$arity$variadic = G__21100__delegate;
return G__21100;
})()
;

return null;
});
