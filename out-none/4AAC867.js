goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43252__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43253__i = 0, G__43253__a = new Array(arguments.length -  0);
while (G__43253__i < G__43253__a.length) {G__43253__a[G__43253__i] = arguments[G__43253__i + 0]; ++G__43253__i;}
  args = new cljs.core.IndexedSeq(G__43253__a,0);
} 
return G__43252__delegate.call(this,args);};
G__43252.cljs$lang$maxFixedArity = 0;
G__43252.cljs$lang$applyTo = (function (arglist__43254){
var args = cljs.core.seq(arglist__43254);
return G__43252__delegate(args);
});
G__43252.cljs$core$IFn$_invoke$arity$variadic = G__43252__delegate;
return G__43252;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43255__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43256__i = 0, G__43256__a = new Array(arguments.length -  0);
while (G__43256__i < G__43256__a.length) {G__43256__a[G__43256__i] = arguments[G__43256__i + 0]; ++G__43256__i;}
  args = new cljs.core.IndexedSeq(G__43256__a,0);
} 
return G__43255__delegate.call(this,args);};
G__43255.cljs$lang$maxFixedArity = 0;
G__43255.cljs$lang$applyTo = (function (arglist__43257){
var args = cljs.core.seq(arglist__43257);
return G__43255__delegate(args);
});
G__43255.cljs$core$IFn$_invoke$arity$variadic = G__43255__delegate;
return G__43255;
})()
;

return null;
});
