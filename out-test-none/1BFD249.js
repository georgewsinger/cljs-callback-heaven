goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19296__i = 0, G__19296__a = new Array(arguments.length -  0);
while (G__19296__i < G__19296__a.length) {G__19296__a[G__19296__i] = arguments[G__19296__i + 0]; ++G__19296__i;}
  args = new cljs.core.IndexedSeq(G__19296__a,0);
} 
return G__19295__delegate.call(this,args);};
G__19295.cljs$lang$maxFixedArity = 0;
G__19295.cljs$lang$applyTo = (function (arglist__19297){
var args = cljs.core.seq(arglist__19297);
return G__19295__delegate(args);
});
G__19295.cljs$core$IFn$_invoke$arity$variadic = G__19295__delegate;
return G__19295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19299__i = 0, G__19299__a = new Array(arguments.length -  0);
while (G__19299__i < G__19299__a.length) {G__19299__a[G__19299__i] = arguments[G__19299__i + 0]; ++G__19299__i;}
  args = new cljs.core.IndexedSeq(G__19299__a,0);
} 
return G__19298__delegate.call(this,args);};
G__19298.cljs$lang$maxFixedArity = 0;
G__19298.cljs$lang$applyTo = (function (arglist__19300){
var args = cljs.core.seq(arglist__19300);
return G__19298__delegate(args);
});
G__19298.cljs$core$IFn$_invoke$arity$variadic = G__19298__delegate;
return G__19298;
})()
;

return null;
});
