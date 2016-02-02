goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10954__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10955__i = 0, G__10955__a = new Array(arguments.length -  0);
while (G__10955__i < G__10955__a.length) {G__10955__a[G__10955__i] = arguments[G__10955__i + 0]; ++G__10955__i;}
  args = new cljs.core.IndexedSeq(G__10955__a,0);
} 
return G__10954__delegate.call(this,args);};
G__10954.cljs$lang$maxFixedArity = 0;
G__10954.cljs$lang$applyTo = (function (arglist__10956){
var args = cljs.core.seq(arglist__10956);
return G__10954__delegate(args);
});
G__10954.cljs$core$IFn$_invoke$arity$variadic = G__10954__delegate;
return G__10954;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10957__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10958__i = 0, G__10958__a = new Array(arguments.length -  0);
while (G__10958__i < G__10958__a.length) {G__10958__a[G__10958__i] = arguments[G__10958__i + 0]; ++G__10958__i;}
  args = new cljs.core.IndexedSeq(G__10958__a,0);
} 
return G__10957__delegate.call(this,args);};
G__10957.cljs$lang$maxFixedArity = 0;
G__10957.cljs$lang$applyTo = (function (arglist__10959){
var args = cljs.core.seq(arglist__10959);
return G__10957__delegate(args);
});
G__10957.cljs$core$IFn$_invoke$arity$variadic = G__10957__delegate;
return G__10957;
})()
;

return null;
});
