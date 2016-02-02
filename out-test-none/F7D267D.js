goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10334__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10335__i = 0, G__10335__a = new Array(arguments.length -  0);
while (G__10335__i < G__10335__a.length) {G__10335__a[G__10335__i] = arguments[G__10335__i + 0]; ++G__10335__i;}
  args = new cljs.core.IndexedSeq(G__10335__a,0);
} 
return G__10334__delegate.call(this,args);};
G__10334.cljs$lang$maxFixedArity = 0;
G__10334.cljs$lang$applyTo = (function (arglist__10336){
var args = cljs.core.seq(arglist__10336);
return G__10334__delegate(args);
});
G__10334.cljs$core$IFn$_invoke$arity$variadic = G__10334__delegate;
return G__10334;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10337__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10338__i = 0, G__10338__a = new Array(arguments.length -  0);
while (G__10338__i < G__10338__a.length) {G__10338__a[G__10338__i] = arguments[G__10338__i + 0]; ++G__10338__i;}
  args = new cljs.core.IndexedSeq(G__10338__a,0);
} 
return G__10337__delegate.call(this,args);};
G__10337.cljs$lang$maxFixedArity = 0;
G__10337.cljs$lang$applyTo = (function (arglist__10339){
var args = cljs.core.seq(arglist__10339);
return G__10337__delegate(args);
});
G__10337.cljs$core$IFn$_invoke$arity$variadic = G__10337__delegate;
return G__10337;
})()
;

return null;
});
