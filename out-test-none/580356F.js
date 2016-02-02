goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16673__i = 0, G__16673__a = new Array(arguments.length -  0);
while (G__16673__i < G__16673__a.length) {G__16673__a[G__16673__i] = arguments[G__16673__i + 0]; ++G__16673__i;}
  args = new cljs.core.IndexedSeq(G__16673__a,0);
} 
return G__16672__delegate.call(this,args);};
G__16672.cljs$lang$maxFixedArity = 0;
G__16672.cljs$lang$applyTo = (function (arglist__16674){
var args = cljs.core.seq(arglist__16674);
return G__16672__delegate(args);
});
G__16672.cljs$core$IFn$_invoke$arity$variadic = G__16672__delegate;
return G__16672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16676__i = 0, G__16676__a = new Array(arguments.length -  0);
while (G__16676__i < G__16676__a.length) {G__16676__a[G__16676__i] = arguments[G__16676__i + 0]; ++G__16676__i;}
  args = new cljs.core.IndexedSeq(G__16676__a,0);
} 
return G__16675__delegate.call(this,args);};
G__16675.cljs$lang$maxFixedArity = 0;
G__16675.cljs$lang$applyTo = (function (arglist__16677){
var args = cljs.core.seq(arglist__16677);
return G__16675__delegate(args);
});
G__16675.cljs$core$IFn$_invoke$arity$variadic = G__16675__delegate;
return G__16675;
})()
;

return null;
});
