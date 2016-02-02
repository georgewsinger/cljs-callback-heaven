goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9973__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9974__i = 0, G__9974__a = new Array(arguments.length -  0);
while (G__9974__i < G__9974__a.length) {G__9974__a[G__9974__i] = arguments[G__9974__i + 0]; ++G__9974__i;}
  args = new cljs.core.IndexedSeq(G__9974__a,0);
} 
return G__9973__delegate.call(this,args);};
G__9973.cljs$lang$maxFixedArity = 0;
G__9973.cljs$lang$applyTo = (function (arglist__9975){
var args = cljs.core.seq(arglist__9975);
return G__9973__delegate(args);
});
G__9973.cljs$core$IFn$_invoke$arity$variadic = G__9973__delegate;
return G__9973;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9976__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9977__i = 0, G__9977__a = new Array(arguments.length -  0);
while (G__9977__i < G__9977__a.length) {G__9977__a[G__9977__i] = arguments[G__9977__i + 0]; ++G__9977__i;}
  args = new cljs.core.IndexedSeq(G__9977__a,0);
} 
return G__9976__delegate.call(this,args);};
G__9976.cljs$lang$maxFixedArity = 0;
G__9976.cljs$lang$applyTo = (function (arglist__9978){
var args = cljs.core.seq(arglist__9978);
return G__9976__delegate(args);
});
G__9976.cljs$core$IFn$_invoke$arity$variadic = G__9976__delegate;
return G__9976;
})()
;

return null;
});
