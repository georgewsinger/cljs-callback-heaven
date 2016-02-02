goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23163__i = 0, G__23163__a = new Array(arguments.length -  0);
while (G__23163__i < G__23163__a.length) {G__23163__a[G__23163__i] = arguments[G__23163__i + 0]; ++G__23163__i;}
  args = new cljs.core.IndexedSeq(G__23163__a,0);
} 
return G__23162__delegate.call(this,args);};
G__23162.cljs$lang$maxFixedArity = 0;
G__23162.cljs$lang$applyTo = (function (arglist__23164){
var args = cljs.core.seq(arglist__23164);
return G__23162__delegate(args);
});
G__23162.cljs$core$IFn$_invoke$arity$variadic = G__23162__delegate;
return G__23162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23166__i = 0, G__23166__a = new Array(arguments.length -  0);
while (G__23166__i < G__23166__a.length) {G__23166__a[G__23166__i] = arguments[G__23166__i + 0]; ++G__23166__i;}
  args = new cljs.core.IndexedSeq(G__23166__a,0);
} 
return G__23165__delegate.call(this,args);};
G__23165.cljs$lang$maxFixedArity = 0;
G__23165.cljs$lang$applyTo = (function (arglist__23167){
var args = cljs.core.seq(arglist__23167);
return G__23165__delegate(args);
});
G__23165.cljs$core$IFn$_invoke$arity$variadic = G__23165__delegate;
return G__23165;
})()
;

return null;
});
