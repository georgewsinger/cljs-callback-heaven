goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9169__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9170__i = 0, G__9170__a = new Array(arguments.length -  0);
while (G__9170__i < G__9170__a.length) {G__9170__a[G__9170__i] = arguments[G__9170__i + 0]; ++G__9170__i;}
  args = new cljs.core.IndexedSeq(G__9170__a,0);
} 
return G__9169__delegate.call(this,args);};
G__9169.cljs$lang$maxFixedArity = 0;
G__9169.cljs$lang$applyTo = (function (arglist__9171){
var args = cljs.core.seq(arglist__9171);
return G__9169__delegate(args);
});
G__9169.cljs$core$IFn$_invoke$arity$variadic = G__9169__delegate;
return G__9169;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9172__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9173__i = 0, G__9173__a = new Array(arguments.length -  0);
while (G__9173__i < G__9173__a.length) {G__9173__a[G__9173__i] = arguments[G__9173__i + 0]; ++G__9173__i;}
  args = new cljs.core.IndexedSeq(G__9173__a,0);
} 
return G__9172__delegate.call(this,args);};
G__9172.cljs$lang$maxFixedArity = 0;
G__9172.cljs$lang$applyTo = (function (arglist__9174){
var args = cljs.core.seq(arglist__9174);
return G__9172__delegate(args);
});
G__9172.cljs$core$IFn$_invoke$arity$variadic = G__9172__delegate;
return G__9172;
})()
;

return null;
});
