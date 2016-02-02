goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18995__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18996__i = 0, G__18996__a = new Array(arguments.length -  0);
while (G__18996__i < G__18996__a.length) {G__18996__a[G__18996__i] = arguments[G__18996__i + 0]; ++G__18996__i;}
  args = new cljs.core.IndexedSeq(G__18996__a,0);
} 
return G__18995__delegate.call(this,args);};
G__18995.cljs$lang$maxFixedArity = 0;
G__18995.cljs$lang$applyTo = (function (arglist__18997){
var args = cljs.core.seq(arglist__18997);
return G__18995__delegate(args);
});
G__18995.cljs$core$IFn$_invoke$arity$variadic = G__18995__delegate;
return G__18995;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18998__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18999__i = 0, G__18999__a = new Array(arguments.length -  0);
while (G__18999__i < G__18999__a.length) {G__18999__a[G__18999__i] = arguments[G__18999__i + 0]; ++G__18999__i;}
  args = new cljs.core.IndexedSeq(G__18999__a,0);
} 
return G__18998__delegate.call(this,args);};
G__18998.cljs$lang$maxFixedArity = 0;
G__18998.cljs$lang$applyTo = (function (arglist__19000){
var args = cljs.core.seq(arglist__19000);
return G__18998__delegate(args);
});
G__18998.cljs$core$IFn$_invoke$arity$variadic = G__18998__delegate;
return G__18998;
})()
;

return null;
});
