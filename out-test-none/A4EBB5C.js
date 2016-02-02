goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12725__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12726__i = 0, G__12726__a = new Array(arguments.length -  0);
while (G__12726__i < G__12726__a.length) {G__12726__a[G__12726__i] = arguments[G__12726__i + 0]; ++G__12726__i;}
  args = new cljs.core.IndexedSeq(G__12726__a,0);
} 
return G__12725__delegate.call(this,args);};
G__12725.cljs$lang$maxFixedArity = 0;
G__12725.cljs$lang$applyTo = (function (arglist__12727){
var args = cljs.core.seq(arglist__12727);
return G__12725__delegate(args);
});
G__12725.cljs$core$IFn$_invoke$arity$variadic = G__12725__delegate;
return G__12725;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12728__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12729__i = 0, G__12729__a = new Array(arguments.length -  0);
while (G__12729__i < G__12729__a.length) {G__12729__a[G__12729__i] = arguments[G__12729__i + 0]; ++G__12729__i;}
  args = new cljs.core.IndexedSeq(G__12729__a,0);
} 
return G__12728__delegate.call(this,args);};
G__12728.cljs$lang$maxFixedArity = 0;
G__12728.cljs$lang$applyTo = (function (arglist__12730){
var args = cljs.core.seq(arglist__12730);
return G__12728__delegate(args);
});
G__12728.cljs$core$IFn$_invoke$arity$variadic = G__12728__delegate;
return G__12728;
})()
;

return null;
});
