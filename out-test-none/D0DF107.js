goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24266__i = 0, G__24266__a = new Array(arguments.length -  0);
while (G__24266__i < G__24266__a.length) {G__24266__a[G__24266__i] = arguments[G__24266__i + 0]; ++G__24266__i;}
  args = new cljs.core.IndexedSeq(G__24266__a,0);
} 
return G__24265__delegate.call(this,args);};
G__24265.cljs$lang$maxFixedArity = 0;
G__24265.cljs$lang$applyTo = (function (arglist__24267){
var args = cljs.core.seq(arglist__24267);
return G__24265__delegate(args);
});
G__24265.cljs$core$IFn$_invoke$arity$variadic = G__24265__delegate;
return G__24265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24269__i = 0, G__24269__a = new Array(arguments.length -  0);
while (G__24269__i < G__24269__a.length) {G__24269__a[G__24269__i] = arguments[G__24269__i + 0]; ++G__24269__i;}
  args = new cljs.core.IndexedSeq(G__24269__a,0);
} 
return G__24268__delegate.call(this,args);};
G__24268.cljs$lang$maxFixedArity = 0;
G__24268.cljs$lang$applyTo = (function (arglist__24270){
var args = cljs.core.seq(arglist__24270);
return G__24268__delegate(args);
});
G__24268.cljs$core$IFn$_invoke$arity$variadic = G__24268__delegate;
return G__24268;
})()
;

return null;
});
