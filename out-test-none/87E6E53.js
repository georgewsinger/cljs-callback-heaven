goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9840__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9841__i = 0, G__9841__a = new Array(arguments.length -  0);
while (G__9841__i < G__9841__a.length) {G__9841__a[G__9841__i] = arguments[G__9841__i + 0]; ++G__9841__i;}
  args = new cljs.core.IndexedSeq(G__9841__a,0);
} 
return G__9840__delegate.call(this,args);};
G__9840.cljs$lang$maxFixedArity = 0;
G__9840.cljs$lang$applyTo = (function (arglist__9842){
var args = cljs.core.seq(arglist__9842);
return G__9840__delegate(args);
});
G__9840.cljs$core$IFn$_invoke$arity$variadic = G__9840__delegate;
return G__9840;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9843__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9844__i = 0, G__9844__a = new Array(arguments.length -  0);
while (G__9844__i < G__9844__a.length) {G__9844__a[G__9844__i] = arguments[G__9844__i + 0]; ++G__9844__i;}
  args = new cljs.core.IndexedSeq(G__9844__a,0);
} 
return G__9843__delegate.call(this,args);};
G__9843.cljs$lang$maxFixedArity = 0;
G__9843.cljs$lang$applyTo = (function (arglist__9845){
var args = cljs.core.seq(arglist__9845);
return G__9843__delegate(args);
});
G__9843.cljs$core$IFn$_invoke$arity$variadic = G__9843__delegate;
return G__9843;
})()
;

return null;
});
