goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__343329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__343329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343330__i = 0, G__343330__a = new Array(arguments.length -  0);
while (G__343330__i < G__343330__a.length) {G__343330__a[G__343330__i] = arguments[G__343330__i + 0]; ++G__343330__i;}
  args = new cljs.core.IndexedSeq(G__343330__a,0);
} 
return G__343329__delegate.call(this,args);};
G__343329.cljs$lang$maxFixedArity = 0;
G__343329.cljs$lang$applyTo = (function (arglist__343331){
var args = cljs.core.seq(arglist__343331);
return G__343329__delegate(args);
});
G__343329.cljs$core$IFn$_invoke$arity$variadic = G__343329__delegate;
return G__343329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__343332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__343332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343333__i = 0, G__343333__a = new Array(arguments.length -  0);
while (G__343333__i < G__343333__a.length) {G__343333__a[G__343333__i] = arguments[G__343333__i + 0]; ++G__343333__i;}
  args = new cljs.core.IndexedSeq(G__343333__a,0);
} 
return G__343332__delegate.call(this,args);};
G__343332.cljs$lang$maxFixedArity = 0;
G__343332.cljs$lang$applyTo = (function (arglist__343334){
var args = cljs.core.seq(arglist__343334);
return G__343332__delegate(args);
});
G__343332.cljs$core$IFn$_invoke$arity$variadic = G__343332__delegate;
return G__343332;
})()
;

return null;
});
