goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__207374__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__207374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__207375__i = 0, G__207375__a = new Array(arguments.length -  0);
while (G__207375__i < G__207375__a.length) {G__207375__a[G__207375__i] = arguments[G__207375__i + 0]; ++G__207375__i;}
  args = new cljs.core.IndexedSeq(G__207375__a,0);
} 
return G__207374__delegate.call(this,args);};
G__207374.cljs$lang$maxFixedArity = 0;
G__207374.cljs$lang$applyTo = (function (arglist__207376){
var args = cljs.core.seq(arglist__207376);
return G__207374__delegate(args);
});
G__207374.cljs$core$IFn$_invoke$arity$variadic = G__207374__delegate;
return G__207374;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__207377__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__207377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__207378__i = 0, G__207378__a = new Array(arguments.length -  0);
while (G__207378__i < G__207378__a.length) {G__207378__a[G__207378__i] = arguments[G__207378__i + 0]; ++G__207378__i;}
  args = new cljs.core.IndexedSeq(G__207378__a,0);
} 
return G__207377__delegate.call(this,args);};
G__207377.cljs$lang$maxFixedArity = 0;
G__207377.cljs$lang$applyTo = (function (arglist__207379){
var args = cljs.core.seq(arglist__207379);
return G__207377__delegate(args);
});
G__207377.cljs$core$IFn$_invoke$arity$variadic = G__207377__delegate;
return G__207377;
})()
;

return null;
});
