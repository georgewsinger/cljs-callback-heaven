goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__321297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__321297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321298__i = 0, G__321298__a = new Array(arguments.length -  0);
while (G__321298__i < G__321298__a.length) {G__321298__a[G__321298__i] = arguments[G__321298__i + 0]; ++G__321298__i;}
  args = new cljs.core.IndexedSeq(G__321298__a,0);
} 
return G__321297__delegate.call(this,args);};
G__321297.cljs$lang$maxFixedArity = 0;
G__321297.cljs$lang$applyTo = (function (arglist__321299){
var args = cljs.core.seq(arglist__321299);
return G__321297__delegate(args);
});
G__321297.cljs$core$IFn$_invoke$arity$variadic = G__321297__delegate;
return G__321297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__321300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__321300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321301__i = 0, G__321301__a = new Array(arguments.length -  0);
while (G__321301__i < G__321301__a.length) {G__321301__a[G__321301__i] = arguments[G__321301__i + 0]; ++G__321301__i;}
  args = new cljs.core.IndexedSeq(G__321301__a,0);
} 
return G__321300__delegate.call(this,args);};
G__321300.cljs$lang$maxFixedArity = 0;
G__321300.cljs$lang$applyTo = (function (arglist__321302){
var args = cljs.core.seq(arglist__321302);
return G__321300__delegate(args);
});
G__321300.cljs$core$IFn$_invoke$arity$variadic = G__321300__delegate;
return G__321300;
})()
;

return null;
});
