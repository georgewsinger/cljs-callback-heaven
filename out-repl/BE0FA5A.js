goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15747__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15748__i = 0, G__15748__a = new Array(arguments.length -  0);
while (G__15748__i < G__15748__a.length) {G__15748__a[G__15748__i] = arguments[G__15748__i + 0]; ++G__15748__i;}
  args = new cljs.core.IndexedSeq(G__15748__a,0);
} 
return G__15747__delegate.call(this,args);};
G__15747.cljs$lang$maxFixedArity = 0;
G__15747.cljs$lang$applyTo = (function (arglist__15749){
var args = cljs.core.seq(arglist__15749);
return G__15747__delegate(args);
});
G__15747.cljs$core$IFn$_invoke$arity$variadic = G__15747__delegate;
return G__15747;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15750__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15751__i = 0, G__15751__a = new Array(arguments.length -  0);
while (G__15751__i < G__15751__a.length) {G__15751__a[G__15751__i] = arguments[G__15751__i + 0]; ++G__15751__i;}
  args = new cljs.core.IndexedSeq(G__15751__a,0);
} 
return G__15750__delegate.call(this,args);};
G__15750.cljs$lang$maxFixedArity = 0;
G__15750.cljs$lang$applyTo = (function (arglist__15752){
var args = cljs.core.seq(arglist__15752);
return G__15750__delegate(args);
});
G__15750.cljs$core$IFn$_invoke$arity$variadic = G__15750__delegate;
return G__15750;
})()
;

return null;
});
