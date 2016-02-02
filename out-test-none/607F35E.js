goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9714__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9715__i = 0, G__9715__a = new Array(arguments.length -  0);
while (G__9715__i < G__9715__a.length) {G__9715__a[G__9715__i] = arguments[G__9715__i + 0]; ++G__9715__i;}
  args = new cljs.core.IndexedSeq(G__9715__a,0);
} 
return G__9714__delegate.call(this,args);};
G__9714.cljs$lang$maxFixedArity = 0;
G__9714.cljs$lang$applyTo = (function (arglist__9716){
var args = cljs.core.seq(arglist__9716);
return G__9714__delegate(args);
});
G__9714.cljs$core$IFn$_invoke$arity$variadic = G__9714__delegate;
return G__9714;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9717__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9718__i = 0, G__9718__a = new Array(arguments.length -  0);
while (G__9718__i < G__9718__a.length) {G__9718__a[G__9718__i] = arguments[G__9718__i + 0]; ++G__9718__i;}
  args = new cljs.core.IndexedSeq(G__9718__a,0);
} 
return G__9717__delegate.call(this,args);};
G__9717.cljs$lang$maxFixedArity = 0;
G__9717.cljs$lang$applyTo = (function (arglist__9719){
var args = cljs.core.seq(arglist__9719);
return G__9717__delegate(args);
});
G__9717.cljs$core$IFn$_invoke$arity$variadic = G__9717__delegate;
return G__9717;
})()
;

return null;
});
