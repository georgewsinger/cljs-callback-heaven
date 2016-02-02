goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313798__i = 0, G__313798__a = new Array(arguments.length -  0);
while (G__313798__i < G__313798__a.length) {G__313798__a[G__313798__i] = arguments[G__313798__i + 0]; ++G__313798__i;}
  args = new cljs.core.IndexedSeq(G__313798__a,0);
} 
return G__313797__delegate.call(this,args);};
G__313797.cljs$lang$maxFixedArity = 0;
G__313797.cljs$lang$applyTo = (function (arglist__313799){
var args = cljs.core.seq(arglist__313799);
return G__313797__delegate(args);
});
G__313797.cljs$core$IFn$_invoke$arity$variadic = G__313797__delegate;
return G__313797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313801__i = 0, G__313801__a = new Array(arguments.length -  0);
while (G__313801__i < G__313801__a.length) {G__313801__a[G__313801__i] = arguments[G__313801__i + 0]; ++G__313801__i;}
  args = new cljs.core.IndexedSeq(G__313801__a,0);
} 
return G__313800__delegate.call(this,args);};
G__313800.cljs$lang$maxFixedArity = 0;
G__313800.cljs$lang$applyTo = (function (arglist__313802){
var args = cljs.core.seq(arglist__313802);
return G__313800__delegate(args);
});
G__313800.cljs$core$IFn$_invoke$arity$variadic = G__313800__delegate;
return G__313800;
})()
;

return null;
});
