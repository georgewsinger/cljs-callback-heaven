goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21077__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21078__i = 0, G__21078__a = new Array(arguments.length -  0);
while (G__21078__i < G__21078__a.length) {G__21078__a[G__21078__i] = arguments[G__21078__i + 0]; ++G__21078__i;}
  args = new cljs.core.IndexedSeq(G__21078__a,0);
} 
return G__21077__delegate.call(this,args);};
G__21077.cljs$lang$maxFixedArity = 0;
G__21077.cljs$lang$applyTo = (function (arglist__21079){
var args = cljs.core.seq(arglist__21079);
return G__21077__delegate(args);
});
G__21077.cljs$core$IFn$_invoke$arity$variadic = G__21077__delegate;
return G__21077;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21080__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21081__i = 0, G__21081__a = new Array(arguments.length -  0);
while (G__21081__i < G__21081__a.length) {G__21081__a[G__21081__i] = arguments[G__21081__i + 0]; ++G__21081__i;}
  args = new cljs.core.IndexedSeq(G__21081__a,0);
} 
return G__21080__delegate.call(this,args);};
G__21080.cljs$lang$maxFixedArity = 0;
G__21080.cljs$lang$applyTo = (function (arglist__21082){
var args = cljs.core.seq(arglist__21082);
return G__21080__delegate(args);
});
G__21080.cljs$core$IFn$_invoke$arity$variadic = G__21080__delegate;
return G__21080;
})()
;

return null;
});
