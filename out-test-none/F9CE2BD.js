goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22917__i = 0, G__22917__a = new Array(arguments.length -  0);
while (G__22917__i < G__22917__a.length) {G__22917__a[G__22917__i] = arguments[G__22917__i + 0]; ++G__22917__i;}
  args = new cljs.core.IndexedSeq(G__22917__a,0);
} 
return G__22916__delegate.call(this,args);};
G__22916.cljs$lang$maxFixedArity = 0;
G__22916.cljs$lang$applyTo = (function (arglist__22918){
var args = cljs.core.seq(arglist__22918);
return G__22916__delegate(args);
});
G__22916.cljs$core$IFn$_invoke$arity$variadic = G__22916__delegate;
return G__22916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22920__i = 0, G__22920__a = new Array(arguments.length -  0);
while (G__22920__i < G__22920__a.length) {G__22920__a[G__22920__i] = arguments[G__22920__i + 0]; ++G__22920__i;}
  args = new cljs.core.IndexedSeq(G__22920__a,0);
} 
return G__22919__delegate.call(this,args);};
G__22919.cljs$lang$maxFixedArity = 0;
G__22919.cljs$lang$applyTo = (function (arglist__22921){
var args = cljs.core.seq(arglist__22921);
return G__22919__delegate(args);
});
G__22919.cljs$core$IFn$_invoke$arity$variadic = G__22919__delegate;
return G__22919;
})()
;

return null;
});
