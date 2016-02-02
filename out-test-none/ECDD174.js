goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40839__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40840__i = 0, G__40840__a = new Array(arguments.length -  0);
while (G__40840__i < G__40840__a.length) {G__40840__a[G__40840__i] = arguments[G__40840__i + 0]; ++G__40840__i;}
  args = new cljs.core.IndexedSeq(G__40840__a,0);
} 
return G__40839__delegate.call(this,args);};
G__40839.cljs$lang$maxFixedArity = 0;
G__40839.cljs$lang$applyTo = (function (arglist__40841){
var args = cljs.core.seq(arglist__40841);
return G__40839__delegate(args);
});
G__40839.cljs$core$IFn$_invoke$arity$variadic = G__40839__delegate;
return G__40839;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40842__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40843__i = 0, G__40843__a = new Array(arguments.length -  0);
while (G__40843__i < G__40843__a.length) {G__40843__a[G__40843__i] = arguments[G__40843__i + 0]; ++G__40843__i;}
  args = new cljs.core.IndexedSeq(G__40843__a,0);
} 
return G__40842__delegate.call(this,args);};
G__40842.cljs$lang$maxFixedArity = 0;
G__40842.cljs$lang$applyTo = (function (arglist__40844){
var args = cljs.core.seq(arglist__40844);
return G__40842__delegate(args);
});
G__40842.cljs$core$IFn$_invoke$arity$variadic = G__40842__delegate;
return G__40842;
})()
;

return null;
});
