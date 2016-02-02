goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19167__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19168__i = 0, G__19168__a = new Array(arguments.length -  0);
while (G__19168__i < G__19168__a.length) {G__19168__a[G__19168__i] = arguments[G__19168__i + 0]; ++G__19168__i;}
  args = new cljs.core.IndexedSeq(G__19168__a,0);
} 
return G__19167__delegate.call(this,args);};
G__19167.cljs$lang$maxFixedArity = 0;
G__19167.cljs$lang$applyTo = (function (arglist__19169){
var args = cljs.core.seq(arglist__19169);
return G__19167__delegate(args);
});
G__19167.cljs$core$IFn$_invoke$arity$variadic = G__19167__delegate;
return G__19167;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19170__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19171__i = 0, G__19171__a = new Array(arguments.length -  0);
while (G__19171__i < G__19171__a.length) {G__19171__a[G__19171__i] = arguments[G__19171__i + 0]; ++G__19171__i;}
  args = new cljs.core.IndexedSeq(G__19171__a,0);
} 
return G__19170__delegate.call(this,args);};
G__19170.cljs$lang$maxFixedArity = 0;
G__19170.cljs$lang$applyTo = (function (arglist__19172){
var args = cljs.core.seq(arglist__19172);
return G__19170__delegate(args);
});
G__19170.cljs$core$IFn$_invoke$arity$variadic = G__19170__delegate;
return G__19170;
})()
;

return null;
});
