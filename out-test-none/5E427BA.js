goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10595__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10596__i = 0, G__10596__a = new Array(arguments.length -  0);
while (G__10596__i < G__10596__a.length) {G__10596__a[G__10596__i] = arguments[G__10596__i + 0]; ++G__10596__i;}
  args = new cljs.core.IndexedSeq(G__10596__a,0);
} 
return G__10595__delegate.call(this,args);};
G__10595.cljs$lang$maxFixedArity = 0;
G__10595.cljs$lang$applyTo = (function (arglist__10597){
var args = cljs.core.seq(arglist__10597);
return G__10595__delegate(args);
});
G__10595.cljs$core$IFn$_invoke$arity$variadic = G__10595__delegate;
return G__10595;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10598__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10599__i = 0, G__10599__a = new Array(arguments.length -  0);
while (G__10599__i < G__10599__a.length) {G__10599__a[G__10599__i] = arguments[G__10599__i + 0]; ++G__10599__i;}
  args = new cljs.core.IndexedSeq(G__10599__a,0);
} 
return G__10598__delegate.call(this,args);};
G__10598.cljs$lang$maxFixedArity = 0;
G__10598.cljs$lang$applyTo = (function (arglist__10600){
var args = cljs.core.seq(arglist__10600);
return G__10598__delegate(args);
});
G__10598.cljs$core$IFn$_invoke$arity$variadic = G__10598__delegate;
return G__10598;
})()
;

return null;
});
