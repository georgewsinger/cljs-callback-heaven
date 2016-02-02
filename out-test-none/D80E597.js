goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54529__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54530__i = 0, G__54530__a = new Array(arguments.length -  0);
while (G__54530__i < G__54530__a.length) {G__54530__a[G__54530__i] = arguments[G__54530__i + 0]; ++G__54530__i;}
  args = new cljs.core.IndexedSeq(G__54530__a,0);
} 
return G__54529__delegate.call(this,args);};
G__54529.cljs$lang$maxFixedArity = 0;
G__54529.cljs$lang$applyTo = (function (arglist__54531){
var args = cljs.core.seq(arglist__54531);
return G__54529__delegate(args);
});
G__54529.cljs$core$IFn$_invoke$arity$variadic = G__54529__delegate;
return G__54529;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54532__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54533__i = 0, G__54533__a = new Array(arguments.length -  0);
while (G__54533__i < G__54533__a.length) {G__54533__a[G__54533__i] = arguments[G__54533__i + 0]; ++G__54533__i;}
  args = new cljs.core.IndexedSeq(G__54533__a,0);
} 
return G__54532__delegate.call(this,args);};
G__54532.cljs$lang$maxFixedArity = 0;
G__54532.cljs$lang$applyTo = (function (arglist__54534){
var args = cljs.core.seq(arglist__54534);
return G__54532__delegate(args);
});
G__54532.cljs$core$IFn$_invoke$arity$variadic = G__54532__delegate;
return G__54532;
})()
;

return null;
});
