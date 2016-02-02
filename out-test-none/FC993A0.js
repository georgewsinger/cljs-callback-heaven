goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37426__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37427__i = 0, G__37427__a = new Array(arguments.length -  0);
while (G__37427__i < G__37427__a.length) {G__37427__a[G__37427__i] = arguments[G__37427__i + 0]; ++G__37427__i;}
  args = new cljs.core.IndexedSeq(G__37427__a,0);
} 
return G__37426__delegate.call(this,args);};
G__37426.cljs$lang$maxFixedArity = 0;
G__37426.cljs$lang$applyTo = (function (arglist__37428){
var args = cljs.core.seq(arglist__37428);
return G__37426__delegate(args);
});
G__37426.cljs$core$IFn$_invoke$arity$variadic = G__37426__delegate;
return G__37426;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37429__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37430__i = 0, G__37430__a = new Array(arguments.length -  0);
while (G__37430__i < G__37430__a.length) {G__37430__a[G__37430__i] = arguments[G__37430__i + 0]; ++G__37430__i;}
  args = new cljs.core.IndexedSeq(G__37430__a,0);
} 
return G__37429__delegate.call(this,args);};
G__37429.cljs$lang$maxFixedArity = 0;
G__37429.cljs$lang$applyTo = (function (arglist__37431){
var args = cljs.core.seq(arglist__37431);
return G__37429__delegate(args);
});
G__37429.cljs$core$IFn$_invoke$arity$variadic = G__37429__delegate;
return G__37429;
})()
;

return null;
});
