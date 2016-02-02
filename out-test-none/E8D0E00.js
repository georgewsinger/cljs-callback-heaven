goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18751__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18752__i = 0, G__18752__a = new Array(arguments.length -  0);
while (G__18752__i < G__18752__a.length) {G__18752__a[G__18752__i] = arguments[G__18752__i + 0]; ++G__18752__i;}
  args = new cljs.core.IndexedSeq(G__18752__a,0);
} 
return G__18751__delegate.call(this,args);};
G__18751.cljs$lang$maxFixedArity = 0;
G__18751.cljs$lang$applyTo = (function (arglist__18753){
var args = cljs.core.seq(arglist__18753);
return G__18751__delegate(args);
});
G__18751.cljs$core$IFn$_invoke$arity$variadic = G__18751__delegate;
return G__18751;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18754__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18755__i = 0, G__18755__a = new Array(arguments.length -  0);
while (G__18755__i < G__18755__a.length) {G__18755__a[G__18755__i] = arguments[G__18755__i + 0]; ++G__18755__i;}
  args = new cljs.core.IndexedSeq(G__18755__a,0);
} 
return G__18754__delegate.call(this,args);};
G__18754.cljs$lang$maxFixedArity = 0;
G__18754.cljs$lang$applyTo = (function (arglist__18756){
var args = cljs.core.seq(arglist__18756);
return G__18754__delegate(args);
});
G__18754.cljs$core$IFn$_invoke$arity$variadic = G__18754__delegate;
return G__18754;
})()
;

return null;
});
