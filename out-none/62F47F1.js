goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28304__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28305__i = 0, G__28305__a = new Array(arguments.length -  0);
while (G__28305__i < G__28305__a.length) {G__28305__a[G__28305__i] = arguments[G__28305__i + 0]; ++G__28305__i;}
  args = new cljs.core.IndexedSeq(G__28305__a,0);
} 
return G__28304__delegate.call(this,args);};
G__28304.cljs$lang$maxFixedArity = 0;
G__28304.cljs$lang$applyTo = (function (arglist__28306){
var args = cljs.core.seq(arglist__28306);
return G__28304__delegate(args);
});
G__28304.cljs$core$IFn$_invoke$arity$variadic = G__28304__delegate;
return G__28304;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28307__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28308__i = 0, G__28308__a = new Array(arguments.length -  0);
while (G__28308__i < G__28308__a.length) {G__28308__a[G__28308__i] = arguments[G__28308__i + 0]; ++G__28308__i;}
  args = new cljs.core.IndexedSeq(G__28308__a,0);
} 
return G__28307__delegate.call(this,args);};
G__28307.cljs$lang$maxFixedArity = 0;
G__28307.cljs$lang$applyTo = (function (arglist__28309){
var args = cljs.core.seq(arglist__28309);
return G__28307__delegate(args);
});
G__28307.cljs$core$IFn$_invoke$arity$variadic = G__28307__delegate;
return G__28307;
})()
;

return null;
});
