goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38804__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38805__i = 0, G__38805__a = new Array(arguments.length -  0);
while (G__38805__i < G__38805__a.length) {G__38805__a[G__38805__i] = arguments[G__38805__i + 0]; ++G__38805__i;}
  args = new cljs.core.IndexedSeq(G__38805__a,0);
} 
return G__38804__delegate.call(this,args);};
G__38804.cljs$lang$maxFixedArity = 0;
G__38804.cljs$lang$applyTo = (function (arglist__38806){
var args = cljs.core.seq(arglist__38806);
return G__38804__delegate(args);
});
G__38804.cljs$core$IFn$_invoke$arity$variadic = G__38804__delegate;
return G__38804;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38807__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38808__i = 0, G__38808__a = new Array(arguments.length -  0);
while (G__38808__i < G__38808__a.length) {G__38808__a[G__38808__i] = arguments[G__38808__i + 0]; ++G__38808__i;}
  args = new cljs.core.IndexedSeq(G__38808__a,0);
} 
return G__38807__delegate.call(this,args);};
G__38807.cljs$lang$maxFixedArity = 0;
G__38807.cljs$lang$applyTo = (function (arglist__38809){
var args = cljs.core.seq(arglist__38809);
return G__38807__delegate(args);
});
G__38807.cljs$core$IFn$_invoke$arity$variadic = G__38807__delegate;
return G__38807;
})()
;

return null;
});
