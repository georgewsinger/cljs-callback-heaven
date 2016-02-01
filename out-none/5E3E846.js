goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9333__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9334__i = 0, G__9334__a = new Array(arguments.length -  0);
while (G__9334__i < G__9334__a.length) {G__9334__a[G__9334__i] = arguments[G__9334__i + 0]; ++G__9334__i;}
  args = new cljs.core.IndexedSeq(G__9334__a,0);
} 
return G__9333__delegate.call(this,args);};
G__9333.cljs$lang$maxFixedArity = 0;
G__9333.cljs$lang$applyTo = (function (arglist__9335){
var args = cljs.core.seq(arglist__9335);
return G__9333__delegate(args);
});
G__9333.cljs$core$IFn$_invoke$arity$variadic = G__9333__delegate;
return G__9333;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9336__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9337__i = 0, G__9337__a = new Array(arguments.length -  0);
while (G__9337__i < G__9337__a.length) {G__9337__a[G__9337__i] = arguments[G__9337__i + 0]; ++G__9337__i;}
  args = new cljs.core.IndexedSeq(G__9337__a,0);
} 
return G__9336__delegate.call(this,args);};
G__9336.cljs$lang$maxFixedArity = 0;
G__9336.cljs$lang$applyTo = (function (arglist__9338){
var args = cljs.core.seq(arglist__9338);
return G__9336__delegate(args);
});
G__9336.cljs$core$IFn$_invoke$arity$variadic = G__9336__delegate;
return G__9336;
})()
;

return null;
});
