goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33917__i = 0, G__33917__a = new Array(arguments.length -  0);
while (G__33917__i < G__33917__a.length) {G__33917__a[G__33917__i] = arguments[G__33917__i + 0]; ++G__33917__i;}
  args = new cljs.core.IndexedSeq(G__33917__a,0);
} 
return G__33916__delegate.call(this,args);};
G__33916.cljs$lang$maxFixedArity = 0;
G__33916.cljs$lang$applyTo = (function (arglist__33918){
var args = cljs.core.seq(arglist__33918);
return G__33916__delegate(args);
});
G__33916.cljs$core$IFn$_invoke$arity$variadic = G__33916__delegate;
return G__33916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33920__i = 0, G__33920__a = new Array(arguments.length -  0);
while (G__33920__i < G__33920__a.length) {G__33920__a[G__33920__i] = arguments[G__33920__i + 0]; ++G__33920__i;}
  args = new cljs.core.IndexedSeq(G__33920__a,0);
} 
return G__33919__delegate.call(this,args);};
G__33919.cljs$lang$maxFixedArity = 0;
G__33919.cljs$lang$applyTo = (function (arglist__33921){
var args = cljs.core.seq(arglist__33921);
return G__33919__delegate(args);
});
G__33919.cljs$core$IFn$_invoke$arity$variadic = G__33919__delegate;
return G__33919;
})()
;

return null;
});
