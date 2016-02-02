goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__354115__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__354115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354116__i = 0, G__354116__a = new Array(arguments.length -  0);
while (G__354116__i < G__354116__a.length) {G__354116__a[G__354116__i] = arguments[G__354116__i + 0]; ++G__354116__i;}
  args = new cljs.core.IndexedSeq(G__354116__a,0);
} 
return G__354115__delegate.call(this,args);};
G__354115.cljs$lang$maxFixedArity = 0;
G__354115.cljs$lang$applyTo = (function (arglist__354117){
var args = cljs.core.seq(arglist__354117);
return G__354115__delegate(args);
});
G__354115.cljs$core$IFn$_invoke$arity$variadic = G__354115__delegate;
return G__354115;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__354118__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__354118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354119__i = 0, G__354119__a = new Array(arguments.length -  0);
while (G__354119__i < G__354119__a.length) {G__354119__a[G__354119__i] = arguments[G__354119__i + 0]; ++G__354119__i;}
  args = new cljs.core.IndexedSeq(G__354119__a,0);
} 
return G__354118__delegate.call(this,args);};
G__354118.cljs$lang$maxFixedArity = 0;
G__354118.cljs$lang$applyTo = (function (arglist__354120){
var args = cljs.core.seq(arglist__354120);
return G__354118__delegate(args);
});
G__354118.cljs$core$IFn$_invoke$arity$variadic = G__354118__delegate;
return G__354118;
})()
;

return null;
});
