goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61209__i = 0, G__61209__a = new Array(arguments.length -  0);
while (G__61209__i < G__61209__a.length) {G__61209__a[G__61209__i] = arguments[G__61209__i + 0]; ++G__61209__i;}
  args = new cljs.core.IndexedSeq(G__61209__a,0);
} 
return G__61208__delegate.call(this,args);};
G__61208.cljs$lang$maxFixedArity = 0;
G__61208.cljs$lang$applyTo = (function (arglist__61210){
var args = cljs.core.seq(arglist__61210);
return G__61208__delegate(args);
});
G__61208.cljs$core$IFn$_invoke$arity$variadic = G__61208__delegate;
return G__61208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61212__i = 0, G__61212__a = new Array(arguments.length -  0);
while (G__61212__i < G__61212__a.length) {G__61212__a[G__61212__i] = arguments[G__61212__i + 0]; ++G__61212__i;}
  args = new cljs.core.IndexedSeq(G__61212__a,0);
} 
return G__61211__delegate.call(this,args);};
G__61211.cljs$lang$maxFixedArity = 0;
G__61211.cljs$lang$applyTo = (function (arglist__61213){
var args = cljs.core.seq(arglist__61213);
return G__61211__delegate(args);
});
G__61211.cljs$core$IFn$_invoke$arity$variadic = G__61211__delegate;
return G__61211;
})()
;

return null;
});
