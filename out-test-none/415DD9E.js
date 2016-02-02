goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50819__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50820__i = 0, G__50820__a = new Array(arguments.length -  0);
while (G__50820__i < G__50820__a.length) {G__50820__a[G__50820__i] = arguments[G__50820__i + 0]; ++G__50820__i;}
  args = new cljs.core.IndexedSeq(G__50820__a,0);
} 
return G__50819__delegate.call(this,args);};
G__50819.cljs$lang$maxFixedArity = 0;
G__50819.cljs$lang$applyTo = (function (arglist__50821){
var args = cljs.core.seq(arglist__50821);
return G__50819__delegate(args);
});
G__50819.cljs$core$IFn$_invoke$arity$variadic = G__50819__delegate;
return G__50819;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50822__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50823__i = 0, G__50823__a = new Array(arguments.length -  0);
while (G__50823__i < G__50823__a.length) {G__50823__a[G__50823__i] = arguments[G__50823__i + 0]; ++G__50823__i;}
  args = new cljs.core.IndexedSeq(G__50823__a,0);
} 
return G__50822__delegate.call(this,args);};
G__50822.cljs$lang$maxFixedArity = 0;
G__50822.cljs$lang$applyTo = (function (arglist__50824){
var args = cljs.core.seq(arglist__50824);
return G__50822__delegate(args);
});
G__50822.cljs$core$IFn$_invoke$arity$variadic = G__50822__delegate;
return G__50822;
})()
;

return null;
});
