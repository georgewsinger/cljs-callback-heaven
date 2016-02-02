goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__156603__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__156603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156604__i = 0, G__156604__a = new Array(arguments.length -  0);
while (G__156604__i < G__156604__a.length) {G__156604__a[G__156604__i] = arguments[G__156604__i + 0]; ++G__156604__i;}
  args = new cljs.core.IndexedSeq(G__156604__a,0);
} 
return G__156603__delegate.call(this,args);};
G__156603.cljs$lang$maxFixedArity = 0;
G__156603.cljs$lang$applyTo = (function (arglist__156605){
var args = cljs.core.seq(arglist__156605);
return G__156603__delegate(args);
});
G__156603.cljs$core$IFn$_invoke$arity$variadic = G__156603__delegate;
return G__156603;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__156606__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__156606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156607__i = 0, G__156607__a = new Array(arguments.length -  0);
while (G__156607__i < G__156607__a.length) {G__156607__a[G__156607__i] = arguments[G__156607__i + 0]; ++G__156607__i;}
  args = new cljs.core.IndexedSeq(G__156607__a,0);
} 
return G__156606__delegate.call(this,args);};
G__156606.cljs$lang$maxFixedArity = 0;
G__156606.cljs$lang$applyTo = (function (arglist__156608){
var args = cljs.core.seq(arglist__156608);
return G__156606__delegate(args);
});
G__156606.cljs$core$IFn$_invoke$arity$variadic = G__156606__delegate;
return G__156606;
})()
;

return null;
});
