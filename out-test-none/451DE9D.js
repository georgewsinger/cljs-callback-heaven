goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10622__i = 0, G__10622__a = new Array(arguments.length -  0);
while (G__10622__i < G__10622__a.length) {G__10622__a[G__10622__i] = arguments[G__10622__i + 0]; ++G__10622__i;}
  args = new cljs.core.IndexedSeq(G__10622__a,0);
} 
return G__10621__delegate.call(this,args);};
G__10621.cljs$lang$maxFixedArity = 0;
G__10621.cljs$lang$applyTo = (function (arglist__10623){
var args = cljs.core.seq(arglist__10623);
return G__10621__delegate(args);
});
G__10621.cljs$core$IFn$_invoke$arity$variadic = G__10621__delegate;
return G__10621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10625__i = 0, G__10625__a = new Array(arguments.length -  0);
while (G__10625__i < G__10625__a.length) {G__10625__a[G__10625__i] = arguments[G__10625__i + 0]; ++G__10625__i;}
  args = new cljs.core.IndexedSeq(G__10625__a,0);
} 
return G__10624__delegate.call(this,args);};
G__10624.cljs$lang$maxFixedArity = 0;
G__10624.cljs$lang$applyTo = (function (arglist__10626){
var args = cljs.core.seq(arglist__10626);
return G__10624__delegate(args);
});
G__10624.cljs$core$IFn$_invoke$arity$variadic = G__10624__delegate;
return G__10624;
})()
;

return null;
});
