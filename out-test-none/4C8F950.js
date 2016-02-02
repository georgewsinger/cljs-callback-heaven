goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25529__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25530__i = 0, G__25530__a = new Array(arguments.length -  0);
while (G__25530__i < G__25530__a.length) {G__25530__a[G__25530__i] = arguments[G__25530__i + 0]; ++G__25530__i;}
  args = new cljs.core.IndexedSeq(G__25530__a,0);
} 
return G__25529__delegate.call(this,args);};
G__25529.cljs$lang$maxFixedArity = 0;
G__25529.cljs$lang$applyTo = (function (arglist__25531){
var args = cljs.core.seq(arglist__25531);
return G__25529__delegate(args);
});
G__25529.cljs$core$IFn$_invoke$arity$variadic = G__25529__delegate;
return G__25529;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25532__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25533__i = 0, G__25533__a = new Array(arguments.length -  0);
while (G__25533__i < G__25533__a.length) {G__25533__a[G__25533__i] = arguments[G__25533__i + 0]; ++G__25533__i;}
  args = new cljs.core.IndexedSeq(G__25533__a,0);
} 
return G__25532__delegate.call(this,args);};
G__25532.cljs$lang$maxFixedArity = 0;
G__25532.cljs$lang$applyTo = (function (arglist__25534){
var args = cljs.core.seq(arglist__25534);
return G__25532__delegate(args);
});
G__25532.cljs$core$IFn$_invoke$arity$variadic = G__25532__delegate;
return G__25532;
})()
;

return null;
});
