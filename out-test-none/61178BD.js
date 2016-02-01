goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14496__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14497__i = 0, G__14497__a = new Array(arguments.length -  0);
while (G__14497__i < G__14497__a.length) {G__14497__a[G__14497__i] = arguments[G__14497__i + 0]; ++G__14497__i;}
  args = new cljs.core.IndexedSeq(G__14497__a,0);
} 
return G__14496__delegate.call(this,args);};
G__14496.cljs$lang$maxFixedArity = 0;
G__14496.cljs$lang$applyTo = (function (arglist__14498){
var args = cljs.core.seq(arglist__14498);
return G__14496__delegate(args);
});
G__14496.cljs$core$IFn$_invoke$arity$variadic = G__14496__delegate;
return G__14496;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14499__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14500__i = 0, G__14500__a = new Array(arguments.length -  0);
while (G__14500__i < G__14500__a.length) {G__14500__a[G__14500__i] = arguments[G__14500__i + 0]; ++G__14500__i;}
  args = new cljs.core.IndexedSeq(G__14500__a,0);
} 
return G__14499__delegate.call(this,args);};
G__14499.cljs$lang$maxFixedArity = 0;
G__14499.cljs$lang$applyTo = (function (arglist__14501){
var args = cljs.core.seq(arglist__14501);
return G__14499__delegate(args);
});
G__14499.cljs$core$IFn$_invoke$arity$variadic = G__14499__delegate;
return G__14499;
})()
;

return null;
});
