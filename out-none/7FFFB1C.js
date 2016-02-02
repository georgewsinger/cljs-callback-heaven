goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35333__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35334__i = 0, G__35334__a = new Array(arguments.length -  0);
while (G__35334__i < G__35334__a.length) {G__35334__a[G__35334__i] = arguments[G__35334__i + 0]; ++G__35334__i;}
  args = new cljs.core.IndexedSeq(G__35334__a,0);
} 
return G__35333__delegate.call(this,args);};
G__35333.cljs$lang$maxFixedArity = 0;
G__35333.cljs$lang$applyTo = (function (arglist__35335){
var args = cljs.core.seq(arglist__35335);
return G__35333__delegate(args);
});
G__35333.cljs$core$IFn$_invoke$arity$variadic = G__35333__delegate;
return G__35333;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35336__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35337__i = 0, G__35337__a = new Array(arguments.length -  0);
while (G__35337__i < G__35337__a.length) {G__35337__a[G__35337__i] = arguments[G__35337__i + 0]; ++G__35337__i;}
  args = new cljs.core.IndexedSeq(G__35337__a,0);
} 
return G__35336__delegate.call(this,args);};
G__35336.cljs$lang$maxFixedArity = 0;
G__35336.cljs$lang$applyTo = (function (arglist__35338){
var args = cljs.core.seq(arglist__35338);
return G__35336__delegate(args);
});
G__35336.cljs$core$IFn$_invoke$arity$variadic = G__35336__delegate;
return G__35336;
})()
;

return null;
});
