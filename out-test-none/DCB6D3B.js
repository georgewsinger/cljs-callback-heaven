goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30250__i = 0, G__30250__a = new Array(arguments.length -  0);
while (G__30250__i < G__30250__a.length) {G__30250__a[G__30250__i] = arguments[G__30250__i + 0]; ++G__30250__i;}
  args = new cljs.core.IndexedSeq(G__30250__a,0);
} 
return G__30249__delegate.call(this,args);};
G__30249.cljs$lang$maxFixedArity = 0;
G__30249.cljs$lang$applyTo = (function (arglist__30251){
var args = cljs.core.seq(arglist__30251);
return G__30249__delegate(args);
});
G__30249.cljs$core$IFn$_invoke$arity$variadic = G__30249__delegate;
return G__30249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30253__i = 0, G__30253__a = new Array(arguments.length -  0);
while (G__30253__i < G__30253__a.length) {G__30253__a[G__30253__i] = arguments[G__30253__i + 0]; ++G__30253__i;}
  args = new cljs.core.IndexedSeq(G__30253__a,0);
} 
return G__30252__delegate.call(this,args);};
G__30252.cljs$lang$maxFixedArity = 0;
G__30252.cljs$lang$applyTo = (function (arglist__30254){
var args = cljs.core.seq(arglist__30254);
return G__30252__delegate(args);
});
G__30252.cljs$core$IFn$_invoke$arity$variadic = G__30252__delegate;
return G__30252;
})()
;

return null;
});
