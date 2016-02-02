goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17158__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17159__i = 0, G__17159__a = new Array(arguments.length -  0);
while (G__17159__i < G__17159__a.length) {G__17159__a[G__17159__i] = arguments[G__17159__i + 0]; ++G__17159__i;}
  args = new cljs.core.IndexedSeq(G__17159__a,0);
} 
return G__17158__delegate.call(this,args);};
G__17158.cljs$lang$maxFixedArity = 0;
G__17158.cljs$lang$applyTo = (function (arglist__17160){
var args = cljs.core.seq(arglist__17160);
return G__17158__delegate(args);
});
G__17158.cljs$core$IFn$_invoke$arity$variadic = G__17158__delegate;
return G__17158;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17161__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17162__i = 0, G__17162__a = new Array(arguments.length -  0);
while (G__17162__i < G__17162__a.length) {G__17162__a[G__17162__i] = arguments[G__17162__i + 0]; ++G__17162__i;}
  args = new cljs.core.IndexedSeq(G__17162__a,0);
} 
return G__17161__delegate.call(this,args);};
G__17161.cljs$lang$maxFixedArity = 0;
G__17161.cljs$lang$applyTo = (function (arglist__17163){
var args = cljs.core.seq(arglist__17163);
return G__17161__delegate(args);
});
G__17161.cljs$core$IFn$_invoke$arity$variadic = G__17161__delegate;
return G__17161;
})()
;

return null;
});
