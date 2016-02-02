goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9725__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9726__i = 0, G__9726__a = new Array(arguments.length -  0);
while (G__9726__i < G__9726__a.length) {G__9726__a[G__9726__i] = arguments[G__9726__i + 0]; ++G__9726__i;}
  args = new cljs.core.IndexedSeq(G__9726__a,0);
} 
return G__9725__delegate.call(this,args);};
G__9725.cljs$lang$maxFixedArity = 0;
G__9725.cljs$lang$applyTo = (function (arglist__9727){
var args = cljs.core.seq(arglist__9727);
return G__9725__delegate(args);
});
G__9725.cljs$core$IFn$_invoke$arity$variadic = G__9725__delegate;
return G__9725;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9728__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9729__i = 0, G__9729__a = new Array(arguments.length -  0);
while (G__9729__i < G__9729__a.length) {G__9729__a[G__9729__i] = arguments[G__9729__i + 0]; ++G__9729__i;}
  args = new cljs.core.IndexedSeq(G__9729__a,0);
} 
return G__9728__delegate.call(this,args);};
G__9728.cljs$lang$maxFixedArity = 0;
G__9728.cljs$lang$applyTo = (function (arglist__9730){
var args = cljs.core.seq(arglist__9730);
return G__9728__delegate(args);
});
G__9728.cljs$core$IFn$_invoke$arity$variadic = G__9728__delegate;
return G__9728;
})()
;

return null;
});
