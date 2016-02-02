goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11390__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11391__i = 0, G__11391__a = new Array(arguments.length -  0);
while (G__11391__i < G__11391__a.length) {G__11391__a[G__11391__i] = arguments[G__11391__i + 0]; ++G__11391__i;}
  args = new cljs.core.IndexedSeq(G__11391__a,0);
} 
return G__11390__delegate.call(this,args);};
G__11390.cljs$lang$maxFixedArity = 0;
G__11390.cljs$lang$applyTo = (function (arglist__11392){
var args = cljs.core.seq(arglist__11392);
return G__11390__delegate(args);
});
G__11390.cljs$core$IFn$_invoke$arity$variadic = G__11390__delegate;
return G__11390;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11393__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11394__i = 0, G__11394__a = new Array(arguments.length -  0);
while (G__11394__i < G__11394__a.length) {G__11394__a[G__11394__i] = arguments[G__11394__i + 0]; ++G__11394__i;}
  args = new cljs.core.IndexedSeq(G__11394__a,0);
} 
return G__11393__delegate.call(this,args);};
G__11393.cljs$lang$maxFixedArity = 0;
G__11393.cljs$lang$applyTo = (function (arglist__11395){
var args = cljs.core.seq(arglist__11395);
return G__11393__delegate(args);
});
G__11393.cljs$core$IFn$_invoke$arity$variadic = G__11393__delegate;
return G__11393;
})()
;

return null;
});
