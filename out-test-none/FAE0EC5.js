goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15827__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15828__i = 0, G__15828__a = new Array(arguments.length -  0);
while (G__15828__i < G__15828__a.length) {G__15828__a[G__15828__i] = arguments[G__15828__i + 0]; ++G__15828__i;}
  args = new cljs.core.IndexedSeq(G__15828__a,0);
} 
return G__15827__delegate.call(this,args);};
G__15827.cljs$lang$maxFixedArity = 0;
G__15827.cljs$lang$applyTo = (function (arglist__15829){
var args = cljs.core.seq(arglist__15829);
return G__15827__delegate(args);
});
G__15827.cljs$core$IFn$_invoke$arity$variadic = G__15827__delegate;
return G__15827;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15830__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15831__i = 0, G__15831__a = new Array(arguments.length -  0);
while (G__15831__i < G__15831__a.length) {G__15831__a[G__15831__i] = arguments[G__15831__i + 0]; ++G__15831__i;}
  args = new cljs.core.IndexedSeq(G__15831__a,0);
} 
return G__15830__delegate.call(this,args);};
G__15830.cljs$lang$maxFixedArity = 0;
G__15830.cljs$lang$applyTo = (function (arglist__15832){
var args = cljs.core.seq(arglist__15832);
return G__15830__delegate(args);
});
G__15830.cljs$core$IFn$_invoke$arity$variadic = G__15830__delegate;
return G__15830;
})()
;

return null;
});
