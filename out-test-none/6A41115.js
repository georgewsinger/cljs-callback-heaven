goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__218678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__218678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218679__i = 0, G__218679__a = new Array(arguments.length -  0);
while (G__218679__i < G__218679__a.length) {G__218679__a[G__218679__i] = arguments[G__218679__i + 0]; ++G__218679__i;}
  args = new cljs.core.IndexedSeq(G__218679__a,0);
} 
return G__218678__delegate.call(this,args);};
G__218678.cljs$lang$maxFixedArity = 0;
G__218678.cljs$lang$applyTo = (function (arglist__218680){
var args = cljs.core.seq(arglist__218680);
return G__218678__delegate(args);
});
G__218678.cljs$core$IFn$_invoke$arity$variadic = G__218678__delegate;
return G__218678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__218681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__218681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218682__i = 0, G__218682__a = new Array(arguments.length -  0);
while (G__218682__i < G__218682__a.length) {G__218682__a[G__218682__i] = arguments[G__218682__i + 0]; ++G__218682__i;}
  args = new cljs.core.IndexedSeq(G__218682__a,0);
} 
return G__218681__delegate.call(this,args);};
G__218681.cljs$lang$maxFixedArity = 0;
G__218681.cljs$lang$applyTo = (function (arglist__218683){
var args = cljs.core.seq(arglist__218683);
return G__218681__delegate(args);
});
G__218681.cljs$core$IFn$_invoke$arity$variadic = G__218681__delegate;
return G__218681;
})()
;

return null;
});
