goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42029__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42030__i = 0, G__42030__a = new Array(arguments.length -  0);
while (G__42030__i < G__42030__a.length) {G__42030__a[G__42030__i] = arguments[G__42030__i + 0]; ++G__42030__i;}
  args = new cljs.core.IndexedSeq(G__42030__a,0);
} 
return G__42029__delegate.call(this,args);};
G__42029.cljs$lang$maxFixedArity = 0;
G__42029.cljs$lang$applyTo = (function (arglist__42031){
var args = cljs.core.seq(arglist__42031);
return G__42029__delegate(args);
});
G__42029.cljs$core$IFn$_invoke$arity$variadic = G__42029__delegate;
return G__42029;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42032__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42033__i = 0, G__42033__a = new Array(arguments.length -  0);
while (G__42033__i < G__42033__a.length) {G__42033__a[G__42033__i] = arguments[G__42033__i + 0]; ++G__42033__i;}
  args = new cljs.core.IndexedSeq(G__42033__a,0);
} 
return G__42032__delegate.call(this,args);};
G__42032.cljs$lang$maxFixedArity = 0;
G__42032.cljs$lang$applyTo = (function (arglist__42034){
var args = cljs.core.seq(arglist__42034);
return G__42032__delegate(args);
});
G__42032.cljs$core$IFn$_invoke$arity$variadic = G__42032__delegate;
return G__42032;
})()
;

return null;
});
