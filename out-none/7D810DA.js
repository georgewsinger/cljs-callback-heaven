goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__69224__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__69224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69225__i = 0, G__69225__a = new Array(arguments.length -  0);
while (G__69225__i < G__69225__a.length) {G__69225__a[G__69225__i] = arguments[G__69225__i + 0]; ++G__69225__i;}
  args = new cljs.core.IndexedSeq(G__69225__a,0);
} 
return G__69224__delegate.call(this,args);};
G__69224.cljs$lang$maxFixedArity = 0;
G__69224.cljs$lang$applyTo = (function (arglist__69226){
var args = cljs.core.seq(arglist__69226);
return G__69224__delegate(args);
});
G__69224.cljs$core$IFn$_invoke$arity$variadic = G__69224__delegate;
return G__69224;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__69227__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__69227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69228__i = 0, G__69228__a = new Array(arguments.length -  0);
while (G__69228__i < G__69228__a.length) {G__69228__a[G__69228__i] = arguments[G__69228__i + 0]; ++G__69228__i;}
  args = new cljs.core.IndexedSeq(G__69228__a,0);
} 
return G__69227__delegate.call(this,args);};
G__69227.cljs$lang$maxFixedArity = 0;
G__69227.cljs$lang$applyTo = (function (arglist__69229){
var args = cljs.core.seq(arglist__69229);
return G__69227__delegate(args);
});
G__69227.cljs$core$IFn$_invoke$arity$variadic = G__69227__delegate;
return G__69227;
})()
;

return null;
});
