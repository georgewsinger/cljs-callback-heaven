goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35940__i = 0, G__35940__a = new Array(arguments.length -  0);
while (G__35940__i < G__35940__a.length) {G__35940__a[G__35940__i] = arguments[G__35940__i + 0]; ++G__35940__i;}
  args = new cljs.core.IndexedSeq(G__35940__a,0);
} 
return G__35939__delegate.call(this,args);};
G__35939.cljs$lang$maxFixedArity = 0;
G__35939.cljs$lang$applyTo = (function (arglist__35941){
var args = cljs.core.seq(arglist__35941);
return G__35939__delegate(args);
});
G__35939.cljs$core$IFn$_invoke$arity$variadic = G__35939__delegate;
return G__35939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35943__i = 0, G__35943__a = new Array(arguments.length -  0);
while (G__35943__i < G__35943__a.length) {G__35943__a[G__35943__i] = arguments[G__35943__i + 0]; ++G__35943__i;}
  args = new cljs.core.IndexedSeq(G__35943__a,0);
} 
return G__35942__delegate.call(this,args);};
G__35942.cljs$lang$maxFixedArity = 0;
G__35942.cljs$lang$applyTo = (function (arglist__35944){
var args = cljs.core.seq(arglist__35944);
return G__35942__delegate(args);
});
G__35942.cljs$core$IFn$_invoke$arity$variadic = G__35942__delegate;
return G__35942;
})()
;

return null;
});
