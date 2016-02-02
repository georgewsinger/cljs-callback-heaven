goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14472__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14473__i = 0, G__14473__a = new Array(arguments.length -  0);
while (G__14473__i < G__14473__a.length) {G__14473__a[G__14473__i] = arguments[G__14473__i + 0]; ++G__14473__i;}
  args = new cljs.core.IndexedSeq(G__14473__a,0);
} 
return G__14472__delegate.call(this,args);};
G__14472.cljs$lang$maxFixedArity = 0;
G__14472.cljs$lang$applyTo = (function (arglist__14474){
var args = cljs.core.seq(arglist__14474);
return G__14472__delegate(args);
});
G__14472.cljs$core$IFn$_invoke$arity$variadic = G__14472__delegate;
return G__14472;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14475__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14476__i = 0, G__14476__a = new Array(arguments.length -  0);
while (G__14476__i < G__14476__a.length) {G__14476__a[G__14476__i] = arguments[G__14476__i + 0]; ++G__14476__i;}
  args = new cljs.core.IndexedSeq(G__14476__a,0);
} 
return G__14475__delegate.call(this,args);};
G__14475.cljs$lang$maxFixedArity = 0;
G__14475.cljs$lang$applyTo = (function (arglist__14477){
var args = cljs.core.seq(arglist__14477);
return G__14475__delegate(args);
});
G__14475.cljs$core$IFn$_invoke$arity$variadic = G__14475__delegate;
return G__14475;
})()
;

return null;
});
