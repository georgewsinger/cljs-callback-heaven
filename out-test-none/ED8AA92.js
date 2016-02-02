goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313197__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313198__i = 0, G__313198__a = new Array(arguments.length -  0);
while (G__313198__i < G__313198__a.length) {G__313198__a[G__313198__i] = arguments[G__313198__i + 0]; ++G__313198__i;}
  args = new cljs.core.IndexedSeq(G__313198__a,0);
} 
return G__313197__delegate.call(this,args);};
G__313197.cljs$lang$maxFixedArity = 0;
G__313197.cljs$lang$applyTo = (function (arglist__313199){
var args = cljs.core.seq(arglist__313199);
return G__313197__delegate(args);
});
G__313197.cljs$core$IFn$_invoke$arity$variadic = G__313197__delegate;
return G__313197;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313200__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313201__i = 0, G__313201__a = new Array(arguments.length -  0);
while (G__313201__i < G__313201__a.length) {G__313201__a[G__313201__i] = arguments[G__313201__i + 0]; ++G__313201__i;}
  args = new cljs.core.IndexedSeq(G__313201__a,0);
} 
return G__313200__delegate.call(this,args);};
G__313200.cljs$lang$maxFixedArity = 0;
G__313200.cljs$lang$applyTo = (function (arglist__313202){
var args = cljs.core.seq(arglist__313202);
return G__313200__delegate(args);
});
G__313200.cljs$core$IFn$_invoke$arity$variadic = G__313200__delegate;
return G__313200;
})()
;

return null;
});
