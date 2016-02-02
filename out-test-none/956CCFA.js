goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37081__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37082__i = 0, G__37082__a = new Array(arguments.length -  0);
while (G__37082__i < G__37082__a.length) {G__37082__a[G__37082__i] = arguments[G__37082__i + 0]; ++G__37082__i;}
  args = new cljs.core.IndexedSeq(G__37082__a,0);
} 
return G__37081__delegate.call(this,args);};
G__37081.cljs$lang$maxFixedArity = 0;
G__37081.cljs$lang$applyTo = (function (arglist__37083){
var args = cljs.core.seq(arglist__37083);
return G__37081__delegate(args);
});
G__37081.cljs$core$IFn$_invoke$arity$variadic = G__37081__delegate;
return G__37081;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37084__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37085__i = 0, G__37085__a = new Array(arguments.length -  0);
while (G__37085__i < G__37085__a.length) {G__37085__a[G__37085__i] = arguments[G__37085__i + 0]; ++G__37085__i;}
  args = new cljs.core.IndexedSeq(G__37085__a,0);
} 
return G__37084__delegate.call(this,args);};
G__37084.cljs$lang$maxFixedArity = 0;
G__37084.cljs$lang$applyTo = (function (arglist__37086){
var args = cljs.core.seq(arglist__37086);
return G__37084__delegate(args);
});
G__37084.cljs$core$IFn$_invoke$arity$variadic = G__37084__delegate;
return G__37084;
})()
;

return null;
});
