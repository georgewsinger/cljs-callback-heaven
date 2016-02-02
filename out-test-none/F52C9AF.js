goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__264682__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__264682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__264683__i = 0, G__264683__a = new Array(arguments.length -  0);
while (G__264683__i < G__264683__a.length) {G__264683__a[G__264683__i] = arguments[G__264683__i + 0]; ++G__264683__i;}
  args = new cljs.core.IndexedSeq(G__264683__a,0);
} 
return G__264682__delegate.call(this,args);};
G__264682.cljs$lang$maxFixedArity = 0;
G__264682.cljs$lang$applyTo = (function (arglist__264684){
var args = cljs.core.seq(arglist__264684);
return G__264682__delegate(args);
});
G__264682.cljs$core$IFn$_invoke$arity$variadic = G__264682__delegate;
return G__264682;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__264685__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__264685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__264686__i = 0, G__264686__a = new Array(arguments.length -  0);
while (G__264686__i < G__264686__a.length) {G__264686__a[G__264686__i] = arguments[G__264686__i + 0]; ++G__264686__i;}
  args = new cljs.core.IndexedSeq(G__264686__a,0);
} 
return G__264685__delegate.call(this,args);};
G__264685.cljs$lang$maxFixedArity = 0;
G__264685.cljs$lang$applyTo = (function (arglist__264687){
var args = cljs.core.seq(arglist__264687);
return G__264685__delegate(args);
});
G__264685.cljs$core$IFn$_invoke$arity$variadic = G__264685__delegate;
return G__264685;
})()
;

return null;
});
