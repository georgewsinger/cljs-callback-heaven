goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__207385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__207385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__207386__i = 0, G__207386__a = new Array(arguments.length -  0);
while (G__207386__i < G__207386__a.length) {G__207386__a[G__207386__i] = arguments[G__207386__i + 0]; ++G__207386__i;}
  args = new cljs.core.IndexedSeq(G__207386__a,0);
} 
return G__207385__delegate.call(this,args);};
G__207385.cljs$lang$maxFixedArity = 0;
G__207385.cljs$lang$applyTo = (function (arglist__207387){
var args = cljs.core.seq(arglist__207387);
return G__207385__delegate(args);
});
G__207385.cljs$core$IFn$_invoke$arity$variadic = G__207385__delegate;
return G__207385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__207388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__207388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__207389__i = 0, G__207389__a = new Array(arguments.length -  0);
while (G__207389__i < G__207389__a.length) {G__207389__a[G__207389__i] = arguments[G__207389__i + 0]; ++G__207389__i;}
  args = new cljs.core.IndexedSeq(G__207389__a,0);
} 
return G__207388__delegate.call(this,args);};
G__207388.cljs$lang$maxFixedArity = 0;
G__207388.cljs$lang$applyTo = (function (arglist__207390){
var args = cljs.core.seq(arglist__207390);
return G__207388__delegate(args);
});
G__207388.cljs$core$IFn$_invoke$arity$variadic = G__207388__delegate;
return G__207388;
})()
;

return null;
});
