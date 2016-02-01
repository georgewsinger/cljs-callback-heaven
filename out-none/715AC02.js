goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8578__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8579__i = 0, G__8579__a = new Array(arguments.length -  0);
while (G__8579__i < G__8579__a.length) {G__8579__a[G__8579__i] = arguments[G__8579__i + 0]; ++G__8579__i;}
  args = new cljs.core.IndexedSeq(G__8579__a,0);
} 
return G__8578__delegate.call(this,args);};
G__8578.cljs$lang$maxFixedArity = 0;
G__8578.cljs$lang$applyTo = (function (arglist__8580){
var args = cljs.core.seq(arglist__8580);
return G__8578__delegate(args);
});
G__8578.cljs$core$IFn$_invoke$arity$variadic = G__8578__delegate;
return G__8578;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8581__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8582__i = 0, G__8582__a = new Array(arguments.length -  0);
while (G__8582__i < G__8582__a.length) {G__8582__a[G__8582__i] = arguments[G__8582__i + 0]; ++G__8582__i;}
  args = new cljs.core.IndexedSeq(G__8582__a,0);
} 
return G__8581__delegate.call(this,args);};
G__8581.cljs$lang$maxFixedArity = 0;
G__8581.cljs$lang$applyTo = (function (arglist__8583){
var args = cljs.core.seq(arglist__8583);
return G__8581__delegate(args);
});
G__8581.cljs$core$IFn$_invoke$arity$variadic = G__8581__delegate;
return G__8581;
})()
;

return null;
});
