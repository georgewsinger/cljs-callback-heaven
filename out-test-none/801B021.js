goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19285__i = 0, G__19285__a = new Array(arguments.length -  0);
while (G__19285__i < G__19285__a.length) {G__19285__a[G__19285__i] = arguments[G__19285__i + 0]; ++G__19285__i;}
  args = new cljs.core.IndexedSeq(G__19285__a,0);
} 
return G__19284__delegate.call(this,args);};
G__19284.cljs$lang$maxFixedArity = 0;
G__19284.cljs$lang$applyTo = (function (arglist__19286){
var args = cljs.core.seq(arglist__19286);
return G__19284__delegate(args);
});
G__19284.cljs$core$IFn$_invoke$arity$variadic = G__19284__delegate;
return G__19284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19288__i = 0, G__19288__a = new Array(arguments.length -  0);
while (G__19288__i < G__19288__a.length) {G__19288__a[G__19288__i] = arguments[G__19288__i + 0]; ++G__19288__i;}
  args = new cljs.core.IndexedSeq(G__19288__a,0);
} 
return G__19287__delegate.call(this,args);};
G__19287.cljs$lang$maxFixedArity = 0;
G__19287.cljs$lang$applyTo = (function (arglist__19289){
var args = cljs.core.seq(arglist__19289);
return G__19287__delegate(args);
});
G__19287.cljs$core$IFn$_invoke$arity$variadic = G__19287__delegate;
return G__19287;
})()
;

return null;
});
