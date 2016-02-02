goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21173__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21174__i = 0, G__21174__a = new Array(arguments.length -  0);
while (G__21174__i < G__21174__a.length) {G__21174__a[G__21174__i] = arguments[G__21174__i + 0]; ++G__21174__i;}
  args = new cljs.core.IndexedSeq(G__21174__a,0);
} 
return G__21173__delegate.call(this,args);};
G__21173.cljs$lang$maxFixedArity = 0;
G__21173.cljs$lang$applyTo = (function (arglist__21175){
var args = cljs.core.seq(arglist__21175);
return G__21173__delegate(args);
});
G__21173.cljs$core$IFn$_invoke$arity$variadic = G__21173__delegate;
return G__21173;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21176__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21177__i = 0, G__21177__a = new Array(arguments.length -  0);
while (G__21177__i < G__21177__a.length) {G__21177__a[G__21177__i] = arguments[G__21177__i + 0]; ++G__21177__i;}
  args = new cljs.core.IndexedSeq(G__21177__a,0);
} 
return G__21176__delegate.call(this,args);};
G__21176.cljs$lang$maxFixedArity = 0;
G__21176.cljs$lang$applyTo = (function (arglist__21178){
var args = cljs.core.seq(arglist__21178);
return G__21176__delegate(args);
});
G__21176.cljs$core$IFn$_invoke$arity$variadic = G__21176__delegate;
return G__21176;
})()
;

return null;
});
