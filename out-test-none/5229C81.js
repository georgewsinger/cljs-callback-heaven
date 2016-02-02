goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11750__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11751__i = 0, G__11751__a = new Array(arguments.length -  0);
while (G__11751__i < G__11751__a.length) {G__11751__a[G__11751__i] = arguments[G__11751__i + 0]; ++G__11751__i;}
  args = new cljs.core.IndexedSeq(G__11751__a,0);
} 
return G__11750__delegate.call(this,args);};
G__11750.cljs$lang$maxFixedArity = 0;
G__11750.cljs$lang$applyTo = (function (arglist__11752){
var args = cljs.core.seq(arglist__11752);
return G__11750__delegate(args);
});
G__11750.cljs$core$IFn$_invoke$arity$variadic = G__11750__delegate;
return G__11750;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11753__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11754__i = 0, G__11754__a = new Array(arguments.length -  0);
while (G__11754__i < G__11754__a.length) {G__11754__a[G__11754__i] = arguments[G__11754__i + 0]; ++G__11754__i;}
  args = new cljs.core.IndexedSeq(G__11754__a,0);
} 
return G__11753__delegate.call(this,args);};
G__11753.cljs$lang$maxFixedArity = 0;
G__11753.cljs$lang$applyTo = (function (arglist__11755){
var args = cljs.core.seq(arglist__11755);
return G__11753__delegate(args);
});
G__11753.cljs$core$IFn$_invoke$arity$variadic = G__11753__delegate;
return G__11753;
})()
;

return null;
});
