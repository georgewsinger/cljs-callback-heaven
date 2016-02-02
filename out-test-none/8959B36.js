goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9769__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9770__i = 0, G__9770__a = new Array(arguments.length -  0);
while (G__9770__i < G__9770__a.length) {G__9770__a[G__9770__i] = arguments[G__9770__i + 0]; ++G__9770__i;}
  args = new cljs.core.IndexedSeq(G__9770__a,0);
} 
return G__9769__delegate.call(this,args);};
G__9769.cljs$lang$maxFixedArity = 0;
G__9769.cljs$lang$applyTo = (function (arglist__9771){
var args = cljs.core.seq(arglist__9771);
return G__9769__delegate(args);
});
G__9769.cljs$core$IFn$_invoke$arity$variadic = G__9769__delegate;
return G__9769;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9772__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9773__i = 0, G__9773__a = new Array(arguments.length -  0);
while (G__9773__i < G__9773__a.length) {G__9773__a[G__9773__i] = arguments[G__9773__i + 0]; ++G__9773__i;}
  args = new cljs.core.IndexedSeq(G__9773__a,0);
} 
return G__9772__delegate.call(this,args);};
G__9772.cljs$lang$maxFixedArity = 0;
G__9772.cljs$lang$applyTo = (function (arglist__9774){
var args = cljs.core.seq(arglist__9774);
return G__9772__delegate(args);
});
G__9772.cljs$core$IFn$_invoke$arity$variadic = G__9772__delegate;
return G__9772;
})()
;

return null;
});
