goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9730__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9731__i = 0, G__9731__a = new Array(arguments.length -  0);
while (G__9731__i < G__9731__a.length) {G__9731__a[G__9731__i] = arguments[G__9731__i + 0]; ++G__9731__i;}
  args = new cljs.core.IndexedSeq(G__9731__a,0);
} 
return G__9730__delegate.call(this,args);};
G__9730.cljs$lang$maxFixedArity = 0;
G__9730.cljs$lang$applyTo = (function (arglist__9732){
var args = cljs.core.seq(arglist__9732);
return G__9730__delegate(args);
});
G__9730.cljs$core$IFn$_invoke$arity$variadic = G__9730__delegate;
return G__9730;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9733__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9734__i = 0, G__9734__a = new Array(arguments.length -  0);
while (G__9734__i < G__9734__a.length) {G__9734__a[G__9734__i] = arguments[G__9734__i + 0]; ++G__9734__i;}
  args = new cljs.core.IndexedSeq(G__9734__a,0);
} 
return G__9733__delegate.call(this,args);};
G__9733.cljs$lang$maxFixedArity = 0;
G__9733.cljs$lang$applyTo = (function (arglist__9735){
var args = cljs.core.seq(arglist__9735);
return G__9733__delegate(args);
});
G__9733.cljs$core$IFn$_invoke$arity$variadic = G__9733__delegate;
return G__9733;
})()
;

return null;
});
