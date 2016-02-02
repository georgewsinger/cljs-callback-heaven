goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9119__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9120__i = 0, G__9120__a = new Array(arguments.length -  0);
while (G__9120__i < G__9120__a.length) {G__9120__a[G__9120__i] = arguments[G__9120__i + 0]; ++G__9120__i;}
  args = new cljs.core.IndexedSeq(G__9120__a,0);
} 
return G__9119__delegate.call(this,args);};
G__9119.cljs$lang$maxFixedArity = 0;
G__9119.cljs$lang$applyTo = (function (arglist__9121){
var args = cljs.core.seq(arglist__9121);
return G__9119__delegate(args);
});
G__9119.cljs$core$IFn$_invoke$arity$variadic = G__9119__delegate;
return G__9119;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9122__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9123__i = 0, G__9123__a = new Array(arguments.length -  0);
while (G__9123__i < G__9123__a.length) {G__9123__a[G__9123__i] = arguments[G__9123__i + 0]; ++G__9123__i;}
  args = new cljs.core.IndexedSeq(G__9123__a,0);
} 
return G__9122__delegate.call(this,args);};
G__9122.cljs$lang$maxFixedArity = 0;
G__9122.cljs$lang$applyTo = (function (arglist__9124){
var args = cljs.core.seq(arglist__9124);
return G__9122__delegate(args);
});
G__9122.cljs$core$IFn$_invoke$arity$variadic = G__9122__delegate;
return G__9122;
})()
;

return null;
});
