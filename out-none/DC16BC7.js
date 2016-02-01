goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9450__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9451__i = 0, G__9451__a = new Array(arguments.length -  0);
while (G__9451__i < G__9451__a.length) {G__9451__a[G__9451__i] = arguments[G__9451__i + 0]; ++G__9451__i;}
  args = new cljs.core.IndexedSeq(G__9451__a,0);
} 
return G__9450__delegate.call(this,args);};
G__9450.cljs$lang$maxFixedArity = 0;
G__9450.cljs$lang$applyTo = (function (arglist__9452){
var args = cljs.core.seq(arglist__9452);
return G__9450__delegate(args);
});
G__9450.cljs$core$IFn$_invoke$arity$variadic = G__9450__delegate;
return G__9450;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9453__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9454__i = 0, G__9454__a = new Array(arguments.length -  0);
while (G__9454__i < G__9454__a.length) {G__9454__a[G__9454__i] = arguments[G__9454__i + 0]; ++G__9454__i;}
  args = new cljs.core.IndexedSeq(G__9454__a,0);
} 
return G__9453__delegate.call(this,args);};
G__9453.cljs$lang$maxFixedArity = 0;
G__9453.cljs$lang$applyTo = (function (arglist__9455){
var args = cljs.core.seq(arglist__9455);
return G__9453__delegate(args);
});
G__9453.cljs$core$IFn$_invoke$arity$variadic = G__9453__delegate;
return G__9453;
})()
;

return null;
});
