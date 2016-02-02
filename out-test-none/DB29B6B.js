goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61197__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61198__i = 0, G__61198__a = new Array(arguments.length -  0);
while (G__61198__i < G__61198__a.length) {G__61198__a[G__61198__i] = arguments[G__61198__i + 0]; ++G__61198__i;}
  args = new cljs.core.IndexedSeq(G__61198__a,0);
} 
return G__61197__delegate.call(this,args);};
G__61197.cljs$lang$maxFixedArity = 0;
G__61197.cljs$lang$applyTo = (function (arglist__61199){
var args = cljs.core.seq(arglist__61199);
return G__61197__delegate(args);
});
G__61197.cljs$core$IFn$_invoke$arity$variadic = G__61197__delegate;
return G__61197;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61200__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61201__i = 0, G__61201__a = new Array(arguments.length -  0);
while (G__61201__i < G__61201__a.length) {G__61201__a[G__61201__i] = arguments[G__61201__i + 0]; ++G__61201__i;}
  args = new cljs.core.IndexedSeq(G__61201__a,0);
} 
return G__61200__delegate.call(this,args);};
G__61200.cljs$lang$maxFixedArity = 0;
G__61200.cljs$lang$applyTo = (function (arglist__61202){
var args = cljs.core.seq(arglist__61202);
return G__61200__delegate(args);
});
G__61200.cljs$core$IFn$_invoke$arity$variadic = G__61200__delegate;
return G__61200;
})()
;

return null;
});
