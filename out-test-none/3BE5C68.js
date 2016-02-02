goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17973__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17974__i = 0, G__17974__a = new Array(arguments.length -  0);
while (G__17974__i < G__17974__a.length) {G__17974__a[G__17974__i] = arguments[G__17974__i + 0]; ++G__17974__i;}
  args = new cljs.core.IndexedSeq(G__17974__a,0);
} 
return G__17973__delegate.call(this,args);};
G__17973.cljs$lang$maxFixedArity = 0;
G__17973.cljs$lang$applyTo = (function (arglist__17975){
var args = cljs.core.seq(arglist__17975);
return G__17973__delegate(args);
});
G__17973.cljs$core$IFn$_invoke$arity$variadic = G__17973__delegate;
return G__17973;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17976__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17977__i = 0, G__17977__a = new Array(arguments.length -  0);
while (G__17977__i < G__17977__a.length) {G__17977__a[G__17977__i] = arguments[G__17977__i + 0]; ++G__17977__i;}
  args = new cljs.core.IndexedSeq(G__17977__a,0);
} 
return G__17976__delegate.call(this,args);};
G__17976.cljs$lang$maxFixedArity = 0;
G__17976.cljs$lang$applyTo = (function (arglist__17978){
var args = cljs.core.seq(arglist__17978);
return G__17976__delegate(args);
});
G__17976.cljs$core$IFn$_invoke$arity$variadic = G__17976__delegate;
return G__17976;
})()
;

return null;
});
