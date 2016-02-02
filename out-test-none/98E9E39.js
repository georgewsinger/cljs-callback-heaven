goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35951__i = 0, G__35951__a = new Array(arguments.length -  0);
while (G__35951__i < G__35951__a.length) {G__35951__a[G__35951__i] = arguments[G__35951__i + 0]; ++G__35951__i;}
  args = new cljs.core.IndexedSeq(G__35951__a,0);
} 
return G__35950__delegate.call(this,args);};
G__35950.cljs$lang$maxFixedArity = 0;
G__35950.cljs$lang$applyTo = (function (arglist__35952){
var args = cljs.core.seq(arglist__35952);
return G__35950__delegate(args);
});
G__35950.cljs$core$IFn$_invoke$arity$variadic = G__35950__delegate;
return G__35950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35954__i = 0, G__35954__a = new Array(arguments.length -  0);
while (G__35954__i < G__35954__a.length) {G__35954__a[G__35954__i] = arguments[G__35954__i + 0]; ++G__35954__i;}
  args = new cljs.core.IndexedSeq(G__35954__a,0);
} 
return G__35953__delegate.call(this,args);};
G__35953.cljs$lang$maxFixedArity = 0;
G__35953.cljs$lang$applyTo = (function (arglist__35955){
var args = cljs.core.seq(arglist__35955);
return G__35953__delegate(args);
});
G__35953.cljs$core$IFn$_invoke$arity$variadic = G__35953__delegate;
return G__35953;
})()
;

return null;
});
