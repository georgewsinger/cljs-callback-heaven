goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35800__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35801__i = 0, G__35801__a = new Array(arguments.length -  0);
while (G__35801__i < G__35801__a.length) {G__35801__a[G__35801__i] = arguments[G__35801__i + 0]; ++G__35801__i;}
  args = new cljs.core.IndexedSeq(G__35801__a,0);
} 
return G__35800__delegate.call(this,args);};
G__35800.cljs$lang$maxFixedArity = 0;
G__35800.cljs$lang$applyTo = (function (arglist__35802){
var args = cljs.core.seq(arglist__35802);
return G__35800__delegate(args);
});
G__35800.cljs$core$IFn$_invoke$arity$variadic = G__35800__delegate;
return G__35800;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35803__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35804__i = 0, G__35804__a = new Array(arguments.length -  0);
while (G__35804__i < G__35804__a.length) {G__35804__a[G__35804__i] = arguments[G__35804__i + 0]; ++G__35804__i;}
  args = new cljs.core.IndexedSeq(G__35804__a,0);
} 
return G__35803__delegate.call(this,args);};
G__35803.cljs$lang$maxFixedArity = 0;
G__35803.cljs$lang$applyTo = (function (arglist__35805){
var args = cljs.core.seq(arglist__35805);
return G__35803__delegate(args);
});
G__35803.cljs$core$IFn$_invoke$arity$variadic = G__35803__delegate;
return G__35803;
})()
;

return null;
});
