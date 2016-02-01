goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15767__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15768__i = 0, G__15768__a = new Array(arguments.length -  0);
while (G__15768__i < G__15768__a.length) {G__15768__a[G__15768__i] = arguments[G__15768__i + 0]; ++G__15768__i;}
  args = new cljs.core.IndexedSeq(G__15768__a,0);
} 
return G__15767__delegate.call(this,args);};
G__15767.cljs$lang$maxFixedArity = 0;
G__15767.cljs$lang$applyTo = (function (arglist__15769){
var args = cljs.core.seq(arglist__15769);
return G__15767__delegate(args);
});
G__15767.cljs$core$IFn$_invoke$arity$variadic = G__15767__delegate;
return G__15767;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15770__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15771__i = 0, G__15771__a = new Array(arguments.length -  0);
while (G__15771__i < G__15771__a.length) {G__15771__a[G__15771__i] = arguments[G__15771__i + 0]; ++G__15771__i;}
  args = new cljs.core.IndexedSeq(G__15771__a,0);
} 
return G__15770__delegate.call(this,args);};
G__15770.cljs$lang$maxFixedArity = 0;
G__15770.cljs$lang$applyTo = (function (arglist__15772){
var args = cljs.core.seq(arglist__15772);
return G__15770__delegate(args);
});
G__15770.cljs$core$IFn$_invoke$arity$variadic = G__15770__delegate;
return G__15770;
})()
;

return null;
});
