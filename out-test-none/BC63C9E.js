goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9796__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9797__i = 0, G__9797__a = new Array(arguments.length -  0);
while (G__9797__i < G__9797__a.length) {G__9797__a[G__9797__i] = arguments[G__9797__i + 0]; ++G__9797__i;}
  args = new cljs.core.IndexedSeq(G__9797__a,0);
} 
return G__9796__delegate.call(this,args);};
G__9796.cljs$lang$maxFixedArity = 0;
G__9796.cljs$lang$applyTo = (function (arglist__9798){
var args = cljs.core.seq(arglist__9798);
return G__9796__delegate(args);
});
G__9796.cljs$core$IFn$_invoke$arity$variadic = G__9796__delegate;
return G__9796;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9799__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9800__i = 0, G__9800__a = new Array(arguments.length -  0);
while (G__9800__i < G__9800__a.length) {G__9800__a[G__9800__i] = arguments[G__9800__i + 0]; ++G__9800__i;}
  args = new cljs.core.IndexedSeq(G__9800__a,0);
} 
return G__9799__delegate.call(this,args);};
G__9799.cljs$lang$maxFixedArity = 0;
G__9799.cljs$lang$applyTo = (function (arglist__9801){
var args = cljs.core.seq(arglist__9801);
return G__9799__delegate(args);
});
G__9799.cljs$core$IFn$_invoke$arity$variadic = G__9799__delegate;
return G__9799;
})()
;

return null;
});
