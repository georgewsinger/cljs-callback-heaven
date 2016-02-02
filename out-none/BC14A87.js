goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16772__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16773__i = 0, G__16773__a = new Array(arguments.length -  0);
while (G__16773__i < G__16773__a.length) {G__16773__a[G__16773__i] = arguments[G__16773__i + 0]; ++G__16773__i;}
  args = new cljs.core.IndexedSeq(G__16773__a,0);
} 
return G__16772__delegate.call(this,args);};
G__16772.cljs$lang$maxFixedArity = 0;
G__16772.cljs$lang$applyTo = (function (arglist__16774){
var args = cljs.core.seq(arglist__16774);
return G__16772__delegate(args);
});
G__16772.cljs$core$IFn$_invoke$arity$variadic = G__16772__delegate;
return G__16772;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16775__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16776__i = 0, G__16776__a = new Array(arguments.length -  0);
while (G__16776__i < G__16776__a.length) {G__16776__a[G__16776__i] = arguments[G__16776__i + 0]; ++G__16776__i;}
  args = new cljs.core.IndexedSeq(G__16776__a,0);
} 
return G__16775__delegate.call(this,args);};
G__16775.cljs$lang$maxFixedArity = 0;
G__16775.cljs$lang$applyTo = (function (arglist__16777){
var args = cljs.core.seq(arglist__16777);
return G__16775__delegate(args);
});
G__16775.cljs$core$IFn$_invoke$arity$variadic = G__16775__delegate;
return G__16775;
})()
;

return null;
});
