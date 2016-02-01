goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8782__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8783__i = 0, G__8783__a = new Array(arguments.length -  0);
while (G__8783__i < G__8783__a.length) {G__8783__a[G__8783__i] = arguments[G__8783__i + 0]; ++G__8783__i;}
  args = new cljs.core.IndexedSeq(G__8783__a,0);
} 
return G__8782__delegate.call(this,args);};
G__8782.cljs$lang$maxFixedArity = 0;
G__8782.cljs$lang$applyTo = (function (arglist__8784){
var args = cljs.core.seq(arglist__8784);
return G__8782__delegate(args);
});
G__8782.cljs$core$IFn$_invoke$arity$variadic = G__8782__delegate;
return G__8782;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8785__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8786__i = 0, G__8786__a = new Array(arguments.length -  0);
while (G__8786__i < G__8786__a.length) {G__8786__a[G__8786__i] = arguments[G__8786__i + 0]; ++G__8786__i;}
  args = new cljs.core.IndexedSeq(G__8786__a,0);
} 
return G__8785__delegate.call(this,args);};
G__8785.cljs$lang$maxFixedArity = 0;
G__8785.cljs$lang$applyTo = (function (arglist__8787){
var args = cljs.core.seq(arglist__8787);
return G__8785__delegate(args);
});
G__8785.cljs$core$IFn$_invoke$arity$variadic = G__8785__delegate;
return G__8785;
})()
;

return null;
});
