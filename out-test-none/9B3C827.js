goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19772__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19773__i = 0, G__19773__a = new Array(arguments.length -  0);
while (G__19773__i < G__19773__a.length) {G__19773__a[G__19773__i] = arguments[G__19773__i + 0]; ++G__19773__i;}
  args = new cljs.core.IndexedSeq(G__19773__a,0);
} 
return G__19772__delegate.call(this,args);};
G__19772.cljs$lang$maxFixedArity = 0;
G__19772.cljs$lang$applyTo = (function (arglist__19774){
var args = cljs.core.seq(arglist__19774);
return G__19772__delegate(args);
});
G__19772.cljs$core$IFn$_invoke$arity$variadic = G__19772__delegate;
return G__19772;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19775__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19776__i = 0, G__19776__a = new Array(arguments.length -  0);
while (G__19776__i < G__19776__a.length) {G__19776__a[G__19776__i] = arguments[G__19776__i + 0]; ++G__19776__i;}
  args = new cljs.core.IndexedSeq(G__19776__a,0);
} 
return G__19775__delegate.call(this,args);};
G__19775.cljs$lang$maxFixedArity = 0;
G__19775.cljs$lang$applyTo = (function (arglist__19777){
var args = cljs.core.seq(arglist__19777);
return G__19775__delegate(args);
});
G__19775.cljs$core$IFn$_invoke$arity$variadic = G__19775__delegate;
return G__19775;
})()
;

return null;
});
