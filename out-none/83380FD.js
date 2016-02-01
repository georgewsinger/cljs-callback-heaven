goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14639__i = 0, G__14639__a = new Array(arguments.length -  0);
while (G__14639__i < G__14639__a.length) {G__14639__a[G__14639__i] = arguments[G__14639__i + 0]; ++G__14639__i;}
  args = new cljs.core.IndexedSeq(G__14639__a,0);
} 
return G__14638__delegate.call(this,args);};
G__14638.cljs$lang$maxFixedArity = 0;
G__14638.cljs$lang$applyTo = (function (arglist__14640){
var args = cljs.core.seq(arglist__14640);
return G__14638__delegate(args);
});
G__14638.cljs$core$IFn$_invoke$arity$variadic = G__14638__delegate;
return G__14638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14642__i = 0, G__14642__a = new Array(arguments.length -  0);
while (G__14642__i < G__14642__a.length) {G__14642__a[G__14642__i] = arguments[G__14642__i + 0]; ++G__14642__i;}
  args = new cljs.core.IndexedSeq(G__14642__a,0);
} 
return G__14641__delegate.call(this,args);};
G__14641.cljs$lang$maxFixedArity = 0;
G__14641.cljs$lang$applyTo = (function (arglist__14643){
var args = cljs.core.seq(arglist__14643);
return G__14641__delegate(args);
});
G__14641.cljs$core$IFn$_invoke$arity$variadic = G__14641__delegate;
return G__14641;
})()
;

return null;
});
