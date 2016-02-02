goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34386__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34387__i = 0, G__34387__a = new Array(arguments.length -  0);
while (G__34387__i < G__34387__a.length) {G__34387__a[G__34387__i] = arguments[G__34387__i + 0]; ++G__34387__i;}
  args = new cljs.core.IndexedSeq(G__34387__a,0);
} 
return G__34386__delegate.call(this,args);};
G__34386.cljs$lang$maxFixedArity = 0;
G__34386.cljs$lang$applyTo = (function (arglist__34388){
var args = cljs.core.seq(arglist__34388);
return G__34386__delegate(args);
});
G__34386.cljs$core$IFn$_invoke$arity$variadic = G__34386__delegate;
return G__34386;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34389__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34390__i = 0, G__34390__a = new Array(arguments.length -  0);
while (G__34390__i < G__34390__a.length) {G__34390__a[G__34390__i] = arguments[G__34390__i + 0]; ++G__34390__i;}
  args = new cljs.core.IndexedSeq(G__34390__a,0);
} 
return G__34389__delegate.call(this,args);};
G__34389.cljs$lang$maxFixedArity = 0;
G__34389.cljs$lang$applyTo = (function (arglist__34391){
var args = cljs.core.seq(arglist__34391);
return G__34389__delegate(args);
});
G__34389.cljs$core$IFn$_invoke$arity$variadic = G__34389__delegate;
return G__34389;
})()
;

return null;
});
