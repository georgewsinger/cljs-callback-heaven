goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29331__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29332__i = 0, G__29332__a = new Array(arguments.length -  0);
while (G__29332__i < G__29332__a.length) {G__29332__a[G__29332__i] = arguments[G__29332__i + 0]; ++G__29332__i;}
  args = new cljs.core.IndexedSeq(G__29332__a,0);
} 
return G__29331__delegate.call(this,args);};
G__29331.cljs$lang$maxFixedArity = 0;
G__29331.cljs$lang$applyTo = (function (arglist__29333){
var args = cljs.core.seq(arglist__29333);
return G__29331__delegate(args);
});
G__29331.cljs$core$IFn$_invoke$arity$variadic = G__29331__delegate;
return G__29331;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29334__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29335__i = 0, G__29335__a = new Array(arguments.length -  0);
while (G__29335__i < G__29335__a.length) {G__29335__a[G__29335__i] = arguments[G__29335__i + 0]; ++G__29335__i;}
  args = new cljs.core.IndexedSeq(G__29335__a,0);
} 
return G__29334__delegate.call(this,args);};
G__29334.cljs$lang$maxFixedArity = 0;
G__29334.cljs$lang$applyTo = (function (arglist__29336){
var args = cljs.core.seq(arglist__29336);
return G__29334__delegate(args);
});
G__29334.cljs$core$IFn$_invoke$arity$variadic = G__29334__delegate;
return G__29334;
})()
;

return null;
});
