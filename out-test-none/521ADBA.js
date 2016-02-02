goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9153__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9154__i = 0, G__9154__a = new Array(arguments.length -  0);
while (G__9154__i < G__9154__a.length) {G__9154__a[G__9154__i] = arguments[G__9154__i + 0]; ++G__9154__i;}
  args = new cljs.core.IndexedSeq(G__9154__a,0);
} 
return G__9153__delegate.call(this,args);};
G__9153.cljs$lang$maxFixedArity = 0;
G__9153.cljs$lang$applyTo = (function (arglist__9155){
var args = cljs.core.seq(arglist__9155);
return G__9153__delegate(args);
});
G__9153.cljs$core$IFn$_invoke$arity$variadic = G__9153__delegate;
return G__9153;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9156__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9157__i = 0, G__9157__a = new Array(arguments.length -  0);
while (G__9157__i < G__9157__a.length) {G__9157__a[G__9157__i] = arguments[G__9157__i + 0]; ++G__9157__i;}
  args = new cljs.core.IndexedSeq(G__9157__a,0);
} 
return G__9156__delegate.call(this,args);};
G__9156.cljs$lang$maxFixedArity = 0;
G__9156.cljs$lang$applyTo = (function (arglist__9158){
var args = cljs.core.seq(arglist__9158);
return G__9156__delegate(args);
});
G__9156.cljs$core$IFn$_invoke$arity$variadic = G__9156__delegate;
return G__9156;
})()
;

return null;
});
