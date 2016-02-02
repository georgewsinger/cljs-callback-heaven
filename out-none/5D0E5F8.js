goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58660__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58661__i = 0, G__58661__a = new Array(arguments.length -  0);
while (G__58661__i < G__58661__a.length) {G__58661__a[G__58661__i] = arguments[G__58661__i + 0]; ++G__58661__i;}
  args = new cljs.core.IndexedSeq(G__58661__a,0);
} 
return G__58660__delegate.call(this,args);};
G__58660.cljs$lang$maxFixedArity = 0;
G__58660.cljs$lang$applyTo = (function (arglist__58662){
var args = cljs.core.seq(arglist__58662);
return G__58660__delegate(args);
});
G__58660.cljs$core$IFn$_invoke$arity$variadic = G__58660__delegate;
return G__58660;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58663__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58664__i = 0, G__58664__a = new Array(arguments.length -  0);
while (G__58664__i < G__58664__a.length) {G__58664__a[G__58664__i] = arguments[G__58664__i + 0]; ++G__58664__i;}
  args = new cljs.core.IndexedSeq(G__58664__a,0);
} 
return G__58663__delegate.call(this,args);};
G__58663.cljs$lang$maxFixedArity = 0;
G__58663.cljs$lang$applyTo = (function (arglist__58665){
var args = cljs.core.seq(arglist__58665);
return G__58663__delegate(args);
});
G__58663.cljs$core$IFn$_invoke$arity$variadic = G__58663__delegate;
return G__58663;
})()
;

return null;
});
