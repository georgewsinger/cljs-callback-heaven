goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70469__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70470__i = 0, G__70470__a = new Array(arguments.length -  0);
while (G__70470__i < G__70470__a.length) {G__70470__a[G__70470__i] = arguments[G__70470__i + 0]; ++G__70470__i;}
  args = new cljs.core.IndexedSeq(G__70470__a,0);
} 
return G__70469__delegate.call(this,args);};
G__70469.cljs$lang$maxFixedArity = 0;
G__70469.cljs$lang$applyTo = (function (arglist__70471){
var args = cljs.core.seq(arglist__70471);
return G__70469__delegate(args);
});
G__70469.cljs$core$IFn$_invoke$arity$variadic = G__70469__delegate;
return G__70469;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70472__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70473__i = 0, G__70473__a = new Array(arguments.length -  0);
while (G__70473__i < G__70473__a.length) {G__70473__a[G__70473__i] = arguments[G__70473__i + 0]; ++G__70473__i;}
  args = new cljs.core.IndexedSeq(G__70473__a,0);
} 
return G__70472__delegate.call(this,args);};
G__70472.cljs$lang$maxFixedArity = 0;
G__70472.cljs$lang$applyTo = (function (arglist__70474){
var args = cljs.core.seq(arglist__70474);
return G__70472__delegate(args);
});
G__70472.cljs$core$IFn$_invoke$arity$variadic = G__70472__delegate;
return G__70472;
})()
;

return null;
});
