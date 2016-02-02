goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67658__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67659__i = 0, G__67659__a = new Array(arguments.length -  0);
while (G__67659__i < G__67659__a.length) {G__67659__a[G__67659__i] = arguments[G__67659__i + 0]; ++G__67659__i;}
  args = new cljs.core.IndexedSeq(G__67659__a,0);
} 
return G__67658__delegate.call(this,args);};
G__67658.cljs$lang$maxFixedArity = 0;
G__67658.cljs$lang$applyTo = (function (arglist__67660){
var args = cljs.core.seq(arglist__67660);
return G__67658__delegate(args);
});
G__67658.cljs$core$IFn$_invoke$arity$variadic = G__67658__delegate;
return G__67658;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67661__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67662__i = 0, G__67662__a = new Array(arguments.length -  0);
while (G__67662__i < G__67662__a.length) {G__67662__a[G__67662__i] = arguments[G__67662__i + 0]; ++G__67662__i;}
  args = new cljs.core.IndexedSeq(G__67662__a,0);
} 
return G__67661__delegate.call(this,args);};
G__67661.cljs$lang$maxFixedArity = 0;
G__67661.cljs$lang$applyTo = (function (arglist__67663){
var args = cljs.core.seq(arglist__67663);
return G__67661__delegate(args);
});
G__67661.cljs$core$IFn$_invoke$arity$variadic = G__67661__delegate;
return G__67661;
})()
;

return null;
});
