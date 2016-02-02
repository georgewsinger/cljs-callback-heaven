goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__99388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__99388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99389__i = 0, G__99389__a = new Array(arguments.length -  0);
while (G__99389__i < G__99389__a.length) {G__99389__a[G__99389__i] = arguments[G__99389__i + 0]; ++G__99389__i;}
  args = new cljs.core.IndexedSeq(G__99389__a,0);
} 
return G__99388__delegate.call(this,args);};
G__99388.cljs$lang$maxFixedArity = 0;
G__99388.cljs$lang$applyTo = (function (arglist__99390){
var args = cljs.core.seq(arglist__99390);
return G__99388__delegate(args);
});
G__99388.cljs$core$IFn$_invoke$arity$variadic = G__99388__delegate;
return G__99388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__99391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__99391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99392__i = 0, G__99392__a = new Array(arguments.length -  0);
while (G__99392__i < G__99392__a.length) {G__99392__a[G__99392__i] = arguments[G__99392__i + 0]; ++G__99392__i;}
  args = new cljs.core.IndexedSeq(G__99392__a,0);
} 
return G__99391__delegate.call(this,args);};
G__99391.cljs$lang$maxFixedArity = 0;
G__99391.cljs$lang$applyTo = (function (arglist__99393){
var args = cljs.core.seq(arglist__99393);
return G__99391__delegate(args);
});
G__99391.cljs$core$IFn$_invoke$arity$variadic = G__99391__delegate;
return G__99391;
})()
;

return null;
});
