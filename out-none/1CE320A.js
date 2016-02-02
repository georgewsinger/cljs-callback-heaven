goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10753__i = 0, G__10753__a = new Array(arguments.length -  0);
while (G__10753__i < G__10753__a.length) {G__10753__a[G__10753__i] = arguments[G__10753__i + 0]; ++G__10753__i;}
  args = new cljs.core.IndexedSeq(G__10753__a,0);
} 
return G__10752__delegate.call(this,args);};
G__10752.cljs$lang$maxFixedArity = 0;
G__10752.cljs$lang$applyTo = (function (arglist__10754){
var args = cljs.core.seq(arglist__10754);
return G__10752__delegate(args);
});
G__10752.cljs$core$IFn$_invoke$arity$variadic = G__10752__delegate;
return G__10752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10756__i = 0, G__10756__a = new Array(arguments.length -  0);
while (G__10756__i < G__10756__a.length) {G__10756__a[G__10756__i] = arguments[G__10756__i + 0]; ++G__10756__i;}
  args = new cljs.core.IndexedSeq(G__10756__a,0);
} 
return G__10755__delegate.call(this,args);};
G__10755.cljs$lang$maxFixedArity = 0;
G__10755.cljs$lang$applyTo = (function (arglist__10757){
var args = cljs.core.seq(arglist__10757);
return G__10755__delegate(args);
});
G__10755.cljs$core$IFn$_invoke$arity$variadic = G__10755__delegate;
return G__10755;
})()
;

return null;
});
