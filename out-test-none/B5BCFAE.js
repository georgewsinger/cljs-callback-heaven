goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__218689__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__218689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218690__i = 0, G__218690__a = new Array(arguments.length -  0);
while (G__218690__i < G__218690__a.length) {G__218690__a[G__218690__i] = arguments[G__218690__i + 0]; ++G__218690__i;}
  args = new cljs.core.IndexedSeq(G__218690__a,0);
} 
return G__218689__delegate.call(this,args);};
G__218689.cljs$lang$maxFixedArity = 0;
G__218689.cljs$lang$applyTo = (function (arglist__218691){
var args = cljs.core.seq(arglist__218691);
return G__218689__delegate(args);
});
G__218689.cljs$core$IFn$_invoke$arity$variadic = G__218689__delegate;
return G__218689;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__218692__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__218692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218693__i = 0, G__218693__a = new Array(arguments.length -  0);
while (G__218693__i < G__218693__a.length) {G__218693__a[G__218693__i] = arguments[G__218693__i + 0]; ++G__218693__i;}
  args = new cljs.core.IndexedSeq(G__218693__a,0);
} 
return G__218692__delegate.call(this,args);};
G__218692.cljs$lang$maxFixedArity = 0;
G__218692.cljs$lang$applyTo = (function (arglist__218694){
var args = cljs.core.seq(arglist__218694);
return G__218692__delegate(args);
});
G__218692.cljs$core$IFn$_invoke$arity$variadic = G__218692__delegate;
return G__218692;
})()
;

return null;
});
