goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9633__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9634__i = 0, G__9634__a = new Array(arguments.length -  0);
while (G__9634__i < G__9634__a.length) {G__9634__a[G__9634__i] = arguments[G__9634__i + 0]; ++G__9634__i;}
  args = new cljs.core.IndexedSeq(G__9634__a,0);
} 
return G__9633__delegate.call(this,args);};
G__9633.cljs$lang$maxFixedArity = 0;
G__9633.cljs$lang$applyTo = (function (arglist__9635){
var args = cljs.core.seq(arglist__9635);
return G__9633__delegate(args);
});
G__9633.cljs$core$IFn$_invoke$arity$variadic = G__9633__delegate;
return G__9633;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9636__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9637__i = 0, G__9637__a = new Array(arguments.length -  0);
while (G__9637__i < G__9637__a.length) {G__9637__a[G__9637__i] = arguments[G__9637__i + 0]; ++G__9637__i;}
  args = new cljs.core.IndexedSeq(G__9637__a,0);
} 
return G__9636__delegate.call(this,args);};
G__9636.cljs$lang$maxFixedArity = 0;
G__9636.cljs$lang$applyTo = (function (arglist__9638){
var args = cljs.core.seq(arglist__9638);
return G__9636__delegate(args);
});
G__9636.cljs$core$IFn$_invoke$arity$variadic = G__9636__delegate;
return G__9636;
})()
;

return null;
});
