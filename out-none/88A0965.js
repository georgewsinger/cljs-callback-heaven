goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43005__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43006__i = 0, G__43006__a = new Array(arguments.length -  0);
while (G__43006__i < G__43006__a.length) {G__43006__a[G__43006__i] = arguments[G__43006__i + 0]; ++G__43006__i;}
  args = new cljs.core.IndexedSeq(G__43006__a,0);
} 
return G__43005__delegate.call(this,args);};
G__43005.cljs$lang$maxFixedArity = 0;
G__43005.cljs$lang$applyTo = (function (arglist__43007){
var args = cljs.core.seq(arglist__43007);
return G__43005__delegate(args);
});
G__43005.cljs$core$IFn$_invoke$arity$variadic = G__43005__delegate;
return G__43005;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43008__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43009__i = 0, G__43009__a = new Array(arguments.length -  0);
while (G__43009__i < G__43009__a.length) {G__43009__a[G__43009__i] = arguments[G__43009__i + 0]; ++G__43009__i;}
  args = new cljs.core.IndexedSeq(G__43009__a,0);
} 
return G__43008__delegate.call(this,args);};
G__43008.cljs$lang$maxFixedArity = 0;
G__43008.cljs$lang$applyTo = (function (arglist__43010){
var args = cljs.core.seq(arglist__43010);
return G__43008__delegate(args);
});
G__43008.cljs$core$IFn$_invoke$arity$variadic = G__43008__delegate;
return G__43008;
})()
;

return null;
});
