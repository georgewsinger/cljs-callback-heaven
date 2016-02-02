goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11798__i = 0, G__11798__a = new Array(arguments.length -  0);
while (G__11798__i < G__11798__a.length) {G__11798__a[G__11798__i] = arguments[G__11798__i + 0]; ++G__11798__i;}
  args = new cljs.core.IndexedSeq(G__11798__a,0);
} 
return G__11797__delegate.call(this,args);};
G__11797.cljs$lang$maxFixedArity = 0;
G__11797.cljs$lang$applyTo = (function (arglist__11799){
var args = cljs.core.seq(arglist__11799);
return G__11797__delegate(args);
});
G__11797.cljs$core$IFn$_invoke$arity$variadic = G__11797__delegate;
return G__11797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11801__i = 0, G__11801__a = new Array(arguments.length -  0);
while (G__11801__i < G__11801__a.length) {G__11801__a[G__11801__i] = arguments[G__11801__i + 0]; ++G__11801__i;}
  args = new cljs.core.IndexedSeq(G__11801__a,0);
} 
return G__11800__delegate.call(this,args);};
G__11800.cljs$lang$maxFixedArity = 0;
G__11800.cljs$lang$applyTo = (function (arglist__11802){
var args = cljs.core.seq(arglist__11802);
return G__11800__delegate(args);
});
G__11800.cljs$core$IFn$_invoke$arity$variadic = G__11800__delegate;
return G__11800;
})()
;

return null;
});
