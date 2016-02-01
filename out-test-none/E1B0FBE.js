goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16397__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16398__i = 0, G__16398__a = new Array(arguments.length -  0);
while (G__16398__i < G__16398__a.length) {G__16398__a[G__16398__i] = arguments[G__16398__i + 0]; ++G__16398__i;}
  args = new cljs.core.IndexedSeq(G__16398__a,0);
} 
return G__16397__delegate.call(this,args);};
G__16397.cljs$lang$maxFixedArity = 0;
G__16397.cljs$lang$applyTo = (function (arglist__16399){
var args = cljs.core.seq(arglist__16399);
return G__16397__delegate(args);
});
G__16397.cljs$core$IFn$_invoke$arity$variadic = G__16397__delegate;
return G__16397;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16400__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16401__i = 0, G__16401__a = new Array(arguments.length -  0);
while (G__16401__i < G__16401__a.length) {G__16401__a[G__16401__i] = arguments[G__16401__i + 0]; ++G__16401__i;}
  args = new cljs.core.IndexedSeq(G__16401__a,0);
} 
return G__16400__delegate.call(this,args);};
G__16400.cljs$lang$maxFixedArity = 0;
G__16400.cljs$lang$applyTo = (function (arglist__16402){
var args = cljs.core.seq(arglist__16402);
return G__16400__delegate(args);
});
G__16400.cljs$core$IFn$_invoke$arity$variadic = G__16400__delegate;
return G__16400;
})()
;

return null;
});
