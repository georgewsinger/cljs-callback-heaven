goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11163__i = 0, G__11163__a = new Array(arguments.length -  0);
while (G__11163__i < G__11163__a.length) {G__11163__a[G__11163__i] = arguments[G__11163__i + 0]; ++G__11163__i;}
  args = new cljs.core.IndexedSeq(G__11163__a,0);
} 
return G__11162__delegate.call(this,args);};
G__11162.cljs$lang$maxFixedArity = 0;
G__11162.cljs$lang$applyTo = (function (arglist__11164){
var args = cljs.core.seq(arglist__11164);
return G__11162__delegate(args);
});
G__11162.cljs$core$IFn$_invoke$arity$variadic = G__11162__delegate;
return G__11162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11166__i = 0, G__11166__a = new Array(arguments.length -  0);
while (G__11166__i < G__11166__a.length) {G__11166__a[G__11166__i] = arguments[G__11166__i + 0]; ++G__11166__i;}
  args = new cljs.core.IndexedSeq(G__11166__a,0);
} 
return G__11165__delegate.call(this,args);};
G__11165.cljs$lang$maxFixedArity = 0;
G__11165.cljs$lang$applyTo = (function (arglist__11167){
var args = cljs.core.seq(arglist__11167);
return G__11165__delegate(args);
});
G__11165.cljs$core$IFn$_invoke$arity$variadic = G__11165__delegate;
return G__11165;
})()
;

return null;
});
