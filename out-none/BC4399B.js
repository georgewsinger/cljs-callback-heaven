goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11693__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11694__i = 0, G__11694__a = new Array(arguments.length -  0);
while (G__11694__i < G__11694__a.length) {G__11694__a[G__11694__i] = arguments[G__11694__i + 0]; ++G__11694__i;}
  args = new cljs.core.IndexedSeq(G__11694__a,0);
} 
return G__11693__delegate.call(this,args);};
G__11693.cljs$lang$maxFixedArity = 0;
G__11693.cljs$lang$applyTo = (function (arglist__11695){
var args = cljs.core.seq(arglist__11695);
return G__11693__delegate(args);
});
G__11693.cljs$core$IFn$_invoke$arity$variadic = G__11693__delegate;
return G__11693;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11696__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11697__i = 0, G__11697__a = new Array(arguments.length -  0);
while (G__11697__i < G__11697__a.length) {G__11697__a[G__11697__i] = arguments[G__11697__i + 0]; ++G__11697__i;}
  args = new cljs.core.IndexedSeq(G__11697__a,0);
} 
return G__11696__delegate.call(this,args);};
G__11696.cljs$lang$maxFixedArity = 0;
G__11696.cljs$lang$applyTo = (function (arglist__11698){
var args = cljs.core.seq(arglist__11698);
return G__11696__delegate(args);
});
G__11696.cljs$core$IFn$_invoke$arity$variadic = G__11696__delegate;
return G__11696;
})()
;

return null;
});
