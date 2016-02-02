goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21973__i = 0, G__21973__a = new Array(arguments.length -  0);
while (G__21973__i < G__21973__a.length) {G__21973__a[G__21973__i] = arguments[G__21973__i + 0]; ++G__21973__i;}
  args = new cljs.core.IndexedSeq(G__21973__a,0);
} 
return G__21972__delegate.call(this,args);};
G__21972.cljs$lang$maxFixedArity = 0;
G__21972.cljs$lang$applyTo = (function (arglist__21974){
var args = cljs.core.seq(arglist__21974);
return G__21972__delegate(args);
});
G__21972.cljs$core$IFn$_invoke$arity$variadic = G__21972__delegate;
return G__21972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21976__i = 0, G__21976__a = new Array(arguments.length -  0);
while (G__21976__i < G__21976__a.length) {G__21976__a[G__21976__i] = arguments[G__21976__i + 0]; ++G__21976__i;}
  args = new cljs.core.IndexedSeq(G__21976__a,0);
} 
return G__21975__delegate.call(this,args);};
G__21975.cljs$lang$maxFixedArity = 0;
G__21975.cljs$lang$applyTo = (function (arglist__21977){
var args = cljs.core.seq(arglist__21977);
return G__21975__delegate(args);
});
G__21975.cljs$core$IFn$_invoke$arity$variadic = G__21975__delegate;
return G__21975;
})()
;

return null;
});
