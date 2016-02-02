goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__176385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__176385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176386__i = 0, G__176386__a = new Array(arguments.length -  0);
while (G__176386__i < G__176386__a.length) {G__176386__a[G__176386__i] = arguments[G__176386__i + 0]; ++G__176386__i;}
  args = new cljs.core.IndexedSeq(G__176386__a,0);
} 
return G__176385__delegate.call(this,args);};
G__176385.cljs$lang$maxFixedArity = 0;
G__176385.cljs$lang$applyTo = (function (arglist__176387){
var args = cljs.core.seq(arglist__176387);
return G__176385__delegate(args);
});
G__176385.cljs$core$IFn$_invoke$arity$variadic = G__176385__delegate;
return G__176385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__176388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__176388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176389__i = 0, G__176389__a = new Array(arguments.length -  0);
while (G__176389__i < G__176389__a.length) {G__176389__a[G__176389__i] = arguments[G__176389__i + 0]; ++G__176389__i;}
  args = new cljs.core.IndexedSeq(G__176389__a,0);
} 
return G__176388__delegate.call(this,args);};
G__176388.cljs$lang$maxFixedArity = 0;
G__176388.cljs$lang$applyTo = (function (arglist__176390){
var args = cljs.core.seq(arglist__176390);
return G__176388__delegate(args);
});
G__176388.cljs$core$IFn$_invoke$arity$variadic = G__176388__delegate;
return G__176388;
})()
;

return null;
});
