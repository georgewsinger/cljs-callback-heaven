goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36102__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36103__i = 0, G__36103__a = new Array(arguments.length -  0);
while (G__36103__i < G__36103__a.length) {G__36103__a[G__36103__i] = arguments[G__36103__i + 0]; ++G__36103__i;}
  args = new cljs.core.IndexedSeq(G__36103__a,0);
} 
return G__36102__delegate.call(this,args);};
G__36102.cljs$lang$maxFixedArity = 0;
G__36102.cljs$lang$applyTo = (function (arglist__36104){
var args = cljs.core.seq(arglist__36104);
return G__36102__delegate(args);
});
G__36102.cljs$core$IFn$_invoke$arity$variadic = G__36102__delegate;
return G__36102;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36105__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36106__i = 0, G__36106__a = new Array(arguments.length -  0);
while (G__36106__i < G__36106__a.length) {G__36106__a[G__36106__i] = arguments[G__36106__i + 0]; ++G__36106__i;}
  args = new cljs.core.IndexedSeq(G__36106__a,0);
} 
return G__36105__delegate.call(this,args);};
G__36105.cljs$lang$maxFixedArity = 0;
G__36105.cljs$lang$applyTo = (function (arglist__36107){
var args = cljs.core.seq(arglist__36107);
return G__36105__delegate(args);
});
G__36105.cljs$core$IFn$_invoke$arity$variadic = G__36105__delegate;
return G__36105;
})()
;

return null;
});
