goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8613__i = 0, G__8613__a = new Array(arguments.length -  0);
while (G__8613__i < G__8613__a.length) {G__8613__a[G__8613__i] = arguments[G__8613__i + 0]; ++G__8613__i;}
  args = new cljs.core.IndexedSeq(G__8613__a,0);
} 
return G__8612__delegate.call(this,args);};
G__8612.cljs$lang$maxFixedArity = 0;
G__8612.cljs$lang$applyTo = (function (arglist__8614){
var args = cljs.core.seq(arglist__8614);
return G__8612__delegate(args);
});
G__8612.cljs$core$IFn$_invoke$arity$variadic = G__8612__delegate;
return G__8612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8616__i = 0, G__8616__a = new Array(arguments.length -  0);
while (G__8616__i < G__8616__a.length) {G__8616__a[G__8616__i] = arguments[G__8616__i + 0]; ++G__8616__i;}
  args = new cljs.core.IndexedSeq(G__8616__a,0);
} 
return G__8615__delegate.call(this,args);};
G__8615.cljs$lang$maxFixedArity = 0;
G__8615.cljs$lang$applyTo = (function (arglist__8617){
var args = cljs.core.seq(arglist__8617);
return G__8615__delegate(args);
});
G__8615.cljs$core$IFn$_invoke$arity$variadic = G__8615__delegate;
return G__8615;
})()
;

return null;
});
