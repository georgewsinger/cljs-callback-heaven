goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11532__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11533__i = 0, G__11533__a = new Array(arguments.length -  0);
while (G__11533__i < G__11533__a.length) {G__11533__a[G__11533__i] = arguments[G__11533__i + 0]; ++G__11533__i;}
  args = new cljs.core.IndexedSeq(G__11533__a,0);
} 
return G__11532__delegate.call(this,args);};
G__11532.cljs$lang$maxFixedArity = 0;
G__11532.cljs$lang$applyTo = (function (arglist__11534){
var args = cljs.core.seq(arglist__11534);
return G__11532__delegate(args);
});
G__11532.cljs$core$IFn$_invoke$arity$variadic = G__11532__delegate;
return G__11532;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11535__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11536__i = 0, G__11536__a = new Array(arguments.length -  0);
while (G__11536__i < G__11536__a.length) {G__11536__a[G__11536__i] = arguments[G__11536__i + 0]; ++G__11536__i;}
  args = new cljs.core.IndexedSeq(G__11536__a,0);
} 
return G__11535__delegate.call(this,args);};
G__11535.cljs$lang$maxFixedArity = 0;
G__11535.cljs$lang$applyTo = (function (arglist__11537){
var args = cljs.core.seq(arglist__11537);
return G__11535__delegate(args);
});
G__11535.cljs$core$IFn$_invoke$arity$variadic = G__11535__delegate;
return G__11535;
})()
;

return null;
});
