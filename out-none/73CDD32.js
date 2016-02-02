goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56256__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56257__i = 0, G__56257__a = new Array(arguments.length -  0);
while (G__56257__i < G__56257__a.length) {G__56257__a[G__56257__i] = arguments[G__56257__i + 0]; ++G__56257__i;}
  args = new cljs.core.IndexedSeq(G__56257__a,0);
} 
return G__56256__delegate.call(this,args);};
G__56256.cljs$lang$maxFixedArity = 0;
G__56256.cljs$lang$applyTo = (function (arglist__56258){
var args = cljs.core.seq(arglist__56258);
return G__56256__delegate(args);
});
G__56256.cljs$core$IFn$_invoke$arity$variadic = G__56256__delegate;
return G__56256;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56259__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56260__i = 0, G__56260__a = new Array(arguments.length -  0);
while (G__56260__i < G__56260__a.length) {G__56260__a[G__56260__i] = arguments[G__56260__i + 0]; ++G__56260__i;}
  args = new cljs.core.IndexedSeq(G__56260__a,0);
} 
return G__56259__delegate.call(this,args);};
G__56259.cljs$lang$maxFixedArity = 0;
G__56259.cljs$lang$applyTo = (function (arglist__56261){
var args = cljs.core.seq(arglist__56261);
return G__56259__delegate(args);
});
G__56259.cljs$core$IFn$_invoke$arity$variadic = G__56259__delegate;
return G__56259;
})()
;

return null;
});
