goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14796__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14797__i = 0, G__14797__a = new Array(arguments.length -  0);
while (G__14797__i < G__14797__a.length) {G__14797__a[G__14797__i] = arguments[G__14797__i + 0]; ++G__14797__i;}
  args = new cljs.core.IndexedSeq(G__14797__a,0);
} 
return G__14796__delegate.call(this,args);};
G__14796.cljs$lang$maxFixedArity = 0;
G__14796.cljs$lang$applyTo = (function (arglist__14798){
var args = cljs.core.seq(arglist__14798);
return G__14796__delegate(args);
});
G__14796.cljs$core$IFn$_invoke$arity$variadic = G__14796__delegate;
return G__14796;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14799__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14800__i = 0, G__14800__a = new Array(arguments.length -  0);
while (G__14800__i < G__14800__a.length) {G__14800__a[G__14800__i] = arguments[G__14800__i + 0]; ++G__14800__i;}
  args = new cljs.core.IndexedSeq(G__14800__a,0);
} 
return G__14799__delegate.call(this,args);};
G__14799.cljs$lang$maxFixedArity = 0;
G__14799.cljs$lang$applyTo = (function (arglist__14801){
var args = cljs.core.seq(arglist__14801);
return G__14799__delegate(args);
});
G__14799.cljs$core$IFn$_invoke$arity$variadic = G__14799__delegate;
return G__14799;
})()
;

return null;
});
