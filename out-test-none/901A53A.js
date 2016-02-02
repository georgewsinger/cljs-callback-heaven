goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14269__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14270__i = 0, G__14270__a = new Array(arguments.length -  0);
while (G__14270__i < G__14270__a.length) {G__14270__a[G__14270__i] = arguments[G__14270__i + 0]; ++G__14270__i;}
  args = new cljs.core.IndexedSeq(G__14270__a,0);
} 
return G__14269__delegate.call(this,args);};
G__14269.cljs$lang$maxFixedArity = 0;
G__14269.cljs$lang$applyTo = (function (arglist__14271){
var args = cljs.core.seq(arglist__14271);
return G__14269__delegate(args);
});
G__14269.cljs$core$IFn$_invoke$arity$variadic = G__14269__delegate;
return G__14269;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14272__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14273__i = 0, G__14273__a = new Array(arguments.length -  0);
while (G__14273__i < G__14273__a.length) {G__14273__a[G__14273__i] = arguments[G__14273__i + 0]; ++G__14273__i;}
  args = new cljs.core.IndexedSeq(G__14273__a,0);
} 
return G__14272__delegate.call(this,args);};
G__14272.cljs$lang$maxFixedArity = 0;
G__14272.cljs$lang$applyTo = (function (arglist__14274){
var args = cljs.core.seq(arglist__14274);
return G__14272__delegate(args);
});
G__14272.cljs$core$IFn$_invoke$arity$variadic = G__14272__delegate;
return G__14272;
})()
;

return null;
});
