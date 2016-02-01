goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9699__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9700__i = 0, G__9700__a = new Array(arguments.length -  0);
while (G__9700__i < G__9700__a.length) {G__9700__a[G__9700__i] = arguments[G__9700__i + 0]; ++G__9700__i;}
  args = new cljs.core.IndexedSeq(G__9700__a,0);
} 
return G__9699__delegate.call(this,args);};
G__9699.cljs$lang$maxFixedArity = 0;
G__9699.cljs$lang$applyTo = (function (arglist__9701){
var args = cljs.core.seq(arglist__9701);
return G__9699__delegate(args);
});
G__9699.cljs$core$IFn$_invoke$arity$variadic = G__9699__delegate;
return G__9699;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9702__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9703__i = 0, G__9703__a = new Array(arguments.length -  0);
while (G__9703__i < G__9703__a.length) {G__9703__a[G__9703__i] = arguments[G__9703__i + 0]; ++G__9703__i;}
  args = new cljs.core.IndexedSeq(G__9703__a,0);
} 
return G__9702__delegate.call(this,args);};
G__9702.cljs$lang$maxFixedArity = 0;
G__9702.cljs$lang$applyTo = (function (arglist__9704){
var args = cljs.core.seq(arglist__9704);
return G__9702__delegate(args);
});
G__9702.cljs$core$IFn$_invoke$arity$variadic = G__9702__delegate;
return G__9702;
})()
;

return null;
});
