goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9802__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9803__i = 0, G__9803__a = new Array(arguments.length -  0);
while (G__9803__i < G__9803__a.length) {G__9803__a[G__9803__i] = arguments[G__9803__i + 0]; ++G__9803__i;}
  args = new cljs.core.IndexedSeq(G__9803__a,0);
} 
return G__9802__delegate.call(this,args);};
G__9802.cljs$lang$maxFixedArity = 0;
G__9802.cljs$lang$applyTo = (function (arglist__9804){
var args = cljs.core.seq(arglist__9804);
return G__9802__delegate(args);
});
G__9802.cljs$core$IFn$_invoke$arity$variadic = G__9802__delegate;
return G__9802;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9805__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9806__i = 0, G__9806__a = new Array(arguments.length -  0);
while (G__9806__i < G__9806__a.length) {G__9806__a[G__9806__i] = arguments[G__9806__i + 0]; ++G__9806__i;}
  args = new cljs.core.IndexedSeq(G__9806__a,0);
} 
return G__9805__delegate.call(this,args);};
G__9805.cljs$lang$maxFixedArity = 0;
G__9805.cljs$lang$applyTo = (function (arglist__9807){
var args = cljs.core.seq(arglist__9807);
return G__9805__delegate(args);
});
G__9805.cljs$core$IFn$_invoke$arity$variadic = G__9805__delegate;
return G__9805;
})()
;

return null;
});
