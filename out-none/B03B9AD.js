goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9528__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9529__i = 0, G__9529__a = new Array(arguments.length -  0);
while (G__9529__i < G__9529__a.length) {G__9529__a[G__9529__i] = arguments[G__9529__i + 0]; ++G__9529__i;}
  args = new cljs.core.IndexedSeq(G__9529__a,0);
} 
return G__9528__delegate.call(this,args);};
G__9528.cljs$lang$maxFixedArity = 0;
G__9528.cljs$lang$applyTo = (function (arglist__9530){
var args = cljs.core.seq(arglist__9530);
return G__9528__delegate(args);
});
G__9528.cljs$core$IFn$_invoke$arity$variadic = G__9528__delegate;
return G__9528;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9531__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9532__i = 0, G__9532__a = new Array(arguments.length -  0);
while (G__9532__i < G__9532__a.length) {G__9532__a[G__9532__i] = arguments[G__9532__i + 0]; ++G__9532__i;}
  args = new cljs.core.IndexedSeq(G__9532__a,0);
} 
return G__9531__delegate.call(this,args);};
G__9531.cljs$lang$maxFixedArity = 0;
G__9531.cljs$lang$applyTo = (function (arglist__9533){
var args = cljs.core.seq(arglist__9533);
return G__9531__delegate(args);
});
G__9531.cljs$core$IFn$_invoke$arity$variadic = G__9531__delegate;
return G__9531;
})()
;

return null;
});
