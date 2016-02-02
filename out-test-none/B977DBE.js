goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35364__i = 0, G__35364__a = new Array(arguments.length -  0);
while (G__35364__i < G__35364__a.length) {G__35364__a[G__35364__i] = arguments[G__35364__i + 0]; ++G__35364__i;}
  args = new cljs.core.IndexedSeq(G__35364__a,0);
} 
return G__35363__delegate.call(this,args);};
G__35363.cljs$lang$maxFixedArity = 0;
G__35363.cljs$lang$applyTo = (function (arglist__35365){
var args = cljs.core.seq(arglist__35365);
return G__35363__delegate(args);
});
G__35363.cljs$core$IFn$_invoke$arity$variadic = G__35363__delegate;
return G__35363;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35367__i = 0, G__35367__a = new Array(arguments.length -  0);
while (G__35367__i < G__35367__a.length) {G__35367__a[G__35367__i] = arguments[G__35367__i + 0]; ++G__35367__i;}
  args = new cljs.core.IndexedSeq(G__35367__a,0);
} 
return G__35366__delegate.call(this,args);};
G__35366.cljs$lang$maxFixedArity = 0;
G__35366.cljs$lang$applyTo = (function (arglist__35368){
var args = cljs.core.seq(arglist__35368);
return G__35366__delegate(args);
});
G__35366.cljs$core$IFn$_invoke$arity$variadic = G__35366__delegate;
return G__35366;
})()
;

return null;
});
