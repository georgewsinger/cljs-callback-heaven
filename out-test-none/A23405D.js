goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__247754__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__247754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247755__i = 0, G__247755__a = new Array(arguments.length -  0);
while (G__247755__i < G__247755__a.length) {G__247755__a[G__247755__i] = arguments[G__247755__i + 0]; ++G__247755__i;}
  args = new cljs.core.IndexedSeq(G__247755__a,0);
} 
return G__247754__delegate.call(this,args);};
G__247754.cljs$lang$maxFixedArity = 0;
G__247754.cljs$lang$applyTo = (function (arglist__247756){
var args = cljs.core.seq(arglist__247756);
return G__247754__delegate(args);
});
G__247754.cljs$core$IFn$_invoke$arity$variadic = G__247754__delegate;
return G__247754;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__247757__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__247757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247758__i = 0, G__247758__a = new Array(arguments.length -  0);
while (G__247758__i < G__247758__a.length) {G__247758__a[G__247758__i] = arguments[G__247758__i + 0]; ++G__247758__i;}
  args = new cljs.core.IndexedSeq(G__247758__a,0);
} 
return G__247757__delegate.call(this,args);};
G__247757.cljs$lang$maxFixedArity = 0;
G__247757.cljs$lang$applyTo = (function (arglist__247759){
var args = cljs.core.seq(arglist__247759);
return G__247757__delegate(args);
});
G__247757.cljs$core$IFn$_invoke$arity$variadic = G__247757__delegate;
return G__247757;
})()
;

return null;
});
