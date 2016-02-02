goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24231__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24232__i = 0, G__24232__a = new Array(arguments.length -  0);
while (G__24232__i < G__24232__a.length) {G__24232__a[G__24232__i] = arguments[G__24232__i + 0]; ++G__24232__i;}
  args = new cljs.core.IndexedSeq(G__24232__a,0);
} 
return G__24231__delegate.call(this,args);};
G__24231.cljs$lang$maxFixedArity = 0;
G__24231.cljs$lang$applyTo = (function (arglist__24233){
var args = cljs.core.seq(arglist__24233);
return G__24231__delegate(args);
});
G__24231.cljs$core$IFn$_invoke$arity$variadic = G__24231__delegate;
return G__24231;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24234__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24235__i = 0, G__24235__a = new Array(arguments.length -  0);
while (G__24235__i < G__24235__a.length) {G__24235__a[G__24235__i] = arguments[G__24235__i + 0]; ++G__24235__i;}
  args = new cljs.core.IndexedSeq(G__24235__a,0);
} 
return G__24234__delegate.call(this,args);};
G__24234.cljs$lang$maxFixedArity = 0;
G__24234.cljs$lang$applyTo = (function (arglist__24236){
var args = cljs.core.seq(arglist__24236);
return G__24234__delegate(args);
});
G__24234.cljs$core$IFn$_invoke$arity$variadic = G__24234__delegate;
return G__24234;
})()
;

return null;
});
