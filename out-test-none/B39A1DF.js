goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11360__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11361__i = 0, G__11361__a = new Array(arguments.length -  0);
while (G__11361__i < G__11361__a.length) {G__11361__a[G__11361__i] = arguments[G__11361__i + 0]; ++G__11361__i;}
  args = new cljs.core.IndexedSeq(G__11361__a,0);
} 
return G__11360__delegate.call(this,args);};
G__11360.cljs$lang$maxFixedArity = 0;
G__11360.cljs$lang$applyTo = (function (arglist__11362){
var args = cljs.core.seq(arglist__11362);
return G__11360__delegate(args);
});
G__11360.cljs$core$IFn$_invoke$arity$variadic = G__11360__delegate;
return G__11360;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11363__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11364__i = 0, G__11364__a = new Array(arguments.length -  0);
while (G__11364__i < G__11364__a.length) {G__11364__a[G__11364__i] = arguments[G__11364__i + 0]; ++G__11364__i;}
  args = new cljs.core.IndexedSeq(G__11364__a,0);
} 
return G__11363__delegate.call(this,args);};
G__11363.cljs$lang$maxFixedArity = 0;
G__11363.cljs$lang$applyTo = (function (arglist__11365){
var args = cljs.core.seq(arglist__11365);
return G__11363__delegate(args);
});
G__11363.cljs$core$IFn$_invoke$arity$variadic = G__11363__delegate;
return G__11363;
})()
;

return null;
});
