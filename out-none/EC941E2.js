goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19247__i = 0, G__19247__a = new Array(arguments.length -  0);
while (G__19247__i < G__19247__a.length) {G__19247__a[G__19247__i] = arguments[G__19247__i + 0]; ++G__19247__i;}
  args = new cljs.core.IndexedSeq(G__19247__a,0);
} 
return G__19246__delegate.call(this,args);};
G__19246.cljs$lang$maxFixedArity = 0;
G__19246.cljs$lang$applyTo = (function (arglist__19248){
var args = cljs.core.seq(arglist__19248);
return G__19246__delegate(args);
});
G__19246.cljs$core$IFn$_invoke$arity$variadic = G__19246__delegate;
return G__19246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19250__i = 0, G__19250__a = new Array(arguments.length -  0);
while (G__19250__i < G__19250__a.length) {G__19250__a[G__19250__i] = arguments[G__19250__i + 0]; ++G__19250__i;}
  args = new cljs.core.IndexedSeq(G__19250__a,0);
} 
return G__19249__delegate.call(this,args);};
G__19249.cljs$lang$maxFixedArity = 0;
G__19249.cljs$lang$applyTo = (function (arglist__19251){
var args = cljs.core.seq(arglist__19251);
return G__19249__delegate(args);
});
G__19249.cljs$core$IFn$_invoke$arity$variadic = G__19249__delegate;
return G__19249;
})()
;

return null;
});
