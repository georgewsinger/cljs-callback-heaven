goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__84165__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__84165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84166__i = 0, G__84166__a = new Array(arguments.length -  0);
while (G__84166__i < G__84166__a.length) {G__84166__a[G__84166__i] = arguments[G__84166__i + 0]; ++G__84166__i;}
  args = new cljs.core.IndexedSeq(G__84166__a,0);
} 
return G__84165__delegate.call(this,args);};
G__84165.cljs$lang$maxFixedArity = 0;
G__84165.cljs$lang$applyTo = (function (arglist__84167){
var args = cljs.core.seq(arglist__84167);
return G__84165__delegate(args);
});
G__84165.cljs$core$IFn$_invoke$arity$variadic = G__84165__delegate;
return G__84165;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__84168__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__84168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84169__i = 0, G__84169__a = new Array(arguments.length -  0);
while (G__84169__i < G__84169__a.length) {G__84169__a[G__84169__i] = arguments[G__84169__i + 0]; ++G__84169__i;}
  args = new cljs.core.IndexedSeq(G__84169__a,0);
} 
return G__84168__delegate.call(this,args);};
G__84168.cljs$lang$maxFixedArity = 0;
G__84168.cljs$lang$applyTo = (function (arglist__84170){
var args = cljs.core.seq(arglist__84170);
return G__84168__delegate(args);
});
G__84168.cljs$core$IFn$_invoke$arity$variadic = G__84168__delegate;
return G__84168;
})()
;

return null;
});
