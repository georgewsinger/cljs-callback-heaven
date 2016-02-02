goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__86529__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__86529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86530__i = 0, G__86530__a = new Array(arguments.length -  0);
while (G__86530__i < G__86530__a.length) {G__86530__a[G__86530__i] = arguments[G__86530__i + 0]; ++G__86530__i;}
  args = new cljs.core.IndexedSeq(G__86530__a,0);
} 
return G__86529__delegate.call(this,args);};
G__86529.cljs$lang$maxFixedArity = 0;
G__86529.cljs$lang$applyTo = (function (arglist__86531){
var args = cljs.core.seq(arglist__86531);
return G__86529__delegate(args);
});
G__86529.cljs$core$IFn$_invoke$arity$variadic = G__86529__delegate;
return G__86529;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__86532__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__86532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86533__i = 0, G__86533__a = new Array(arguments.length -  0);
while (G__86533__i < G__86533__a.length) {G__86533__a[G__86533__i] = arguments[G__86533__i + 0]; ++G__86533__i;}
  args = new cljs.core.IndexedSeq(G__86533__a,0);
} 
return G__86532__delegate.call(this,args);};
G__86532.cljs$lang$maxFixedArity = 0;
G__86532.cljs$lang$applyTo = (function (arglist__86534){
var args = cljs.core.seq(arglist__86534);
return G__86532__delegate(args);
});
G__86532.cljs$core$IFn$_invoke$arity$variadic = G__86532__delegate;
return G__86532;
})()
;

return null;
});
