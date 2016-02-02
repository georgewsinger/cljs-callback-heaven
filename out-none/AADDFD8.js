goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43803__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43804__i = 0, G__43804__a = new Array(arguments.length -  0);
while (G__43804__i < G__43804__a.length) {G__43804__a[G__43804__i] = arguments[G__43804__i + 0]; ++G__43804__i;}
  args = new cljs.core.IndexedSeq(G__43804__a,0);
} 
return G__43803__delegate.call(this,args);};
G__43803.cljs$lang$maxFixedArity = 0;
G__43803.cljs$lang$applyTo = (function (arglist__43805){
var args = cljs.core.seq(arglist__43805);
return G__43803__delegate(args);
});
G__43803.cljs$core$IFn$_invoke$arity$variadic = G__43803__delegate;
return G__43803;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43806__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43807__i = 0, G__43807__a = new Array(arguments.length -  0);
while (G__43807__i < G__43807__a.length) {G__43807__a[G__43807__i] = arguments[G__43807__i + 0]; ++G__43807__i;}
  args = new cljs.core.IndexedSeq(G__43807__a,0);
} 
return G__43806__delegate.call(this,args);};
G__43806.cljs$lang$maxFixedArity = 0;
G__43806.cljs$lang$applyTo = (function (arglist__43808){
var args = cljs.core.seq(arglist__43808);
return G__43806__delegate(args);
});
G__43806.cljs$core$IFn$_invoke$arity$variadic = G__43806__delegate;
return G__43806;
})()
;

return null;
});
