goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148125__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148126__i = 0, G__148126__a = new Array(arguments.length -  0);
while (G__148126__i < G__148126__a.length) {G__148126__a[G__148126__i] = arguments[G__148126__i + 0]; ++G__148126__i;}
  args = new cljs.core.IndexedSeq(G__148126__a,0);
} 
return G__148125__delegate.call(this,args);};
G__148125.cljs$lang$maxFixedArity = 0;
G__148125.cljs$lang$applyTo = (function (arglist__148127){
var args = cljs.core.seq(arglist__148127);
return G__148125__delegate(args);
});
G__148125.cljs$core$IFn$_invoke$arity$variadic = G__148125__delegate;
return G__148125;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148128__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148129__i = 0, G__148129__a = new Array(arguments.length -  0);
while (G__148129__i < G__148129__a.length) {G__148129__a[G__148129__i] = arguments[G__148129__i + 0]; ++G__148129__i;}
  args = new cljs.core.IndexedSeq(G__148129__a,0);
} 
return G__148128__delegate.call(this,args);};
G__148128.cljs$lang$maxFixedArity = 0;
G__148128.cljs$lang$applyTo = (function (arglist__148130){
var args = cljs.core.seq(arglist__148130);
return G__148128__delegate(args);
});
G__148128.cljs$core$IFn$_invoke$arity$variadic = G__148128__delegate;
return G__148128;
})()
;

return null;
});
