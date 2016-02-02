goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14829__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14830__i = 0, G__14830__a = new Array(arguments.length -  0);
while (G__14830__i < G__14830__a.length) {G__14830__a[G__14830__i] = arguments[G__14830__i + 0]; ++G__14830__i;}
  args = new cljs.core.IndexedSeq(G__14830__a,0);
} 
return G__14829__delegate.call(this,args);};
G__14829.cljs$lang$maxFixedArity = 0;
G__14829.cljs$lang$applyTo = (function (arglist__14831){
var args = cljs.core.seq(arglist__14831);
return G__14829__delegate(args);
});
G__14829.cljs$core$IFn$_invoke$arity$variadic = G__14829__delegate;
return G__14829;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14832__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14833__i = 0, G__14833__a = new Array(arguments.length -  0);
while (G__14833__i < G__14833__a.length) {G__14833__a[G__14833__i] = arguments[G__14833__i + 0]; ++G__14833__i;}
  args = new cljs.core.IndexedSeq(G__14833__a,0);
} 
return G__14832__delegate.call(this,args);};
G__14832.cljs$lang$maxFixedArity = 0;
G__14832.cljs$lang$applyTo = (function (arglist__14834){
var args = cljs.core.seq(arglist__14834);
return G__14832__delegate(args);
});
G__14832.cljs$core$IFn$_invoke$arity$variadic = G__14832__delegate;
return G__14832;
})()
;

return null;
});
