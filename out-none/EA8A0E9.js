goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70892__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70893__i = 0, G__70893__a = new Array(arguments.length -  0);
while (G__70893__i < G__70893__a.length) {G__70893__a[G__70893__i] = arguments[G__70893__i + 0]; ++G__70893__i;}
  args = new cljs.core.IndexedSeq(G__70893__a,0);
} 
return G__70892__delegate.call(this,args);};
G__70892.cljs$lang$maxFixedArity = 0;
G__70892.cljs$lang$applyTo = (function (arglist__70894){
var args = cljs.core.seq(arglist__70894);
return G__70892__delegate(args);
});
G__70892.cljs$core$IFn$_invoke$arity$variadic = G__70892__delegate;
return G__70892;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70895__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70896__i = 0, G__70896__a = new Array(arguments.length -  0);
while (G__70896__i < G__70896__a.length) {G__70896__a[G__70896__i] = arguments[G__70896__i + 0]; ++G__70896__i;}
  args = new cljs.core.IndexedSeq(G__70896__a,0);
} 
return G__70895__delegate.call(this,args);};
G__70895.cljs$lang$maxFixedArity = 0;
G__70895.cljs$lang$applyTo = (function (arglist__70897){
var args = cljs.core.seq(arglist__70897);
return G__70895__delegate(args);
});
G__70895.cljs$core$IFn$_invoke$arity$variadic = G__70895__delegate;
return G__70895;
})()
;

return null;
});
