goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9152__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9153__i = 0, G__9153__a = new Array(arguments.length -  0);
while (G__9153__i < G__9153__a.length) {G__9153__a[G__9153__i] = arguments[G__9153__i + 0]; ++G__9153__i;}
  args = new cljs.core.IndexedSeq(G__9153__a,0);
} 
return G__9152__delegate.call(this,args);};
G__9152.cljs$lang$maxFixedArity = 0;
G__9152.cljs$lang$applyTo = (function (arglist__9154){
var args = cljs.core.seq(arglist__9154);
return G__9152__delegate(args);
});
G__9152.cljs$core$IFn$_invoke$arity$variadic = G__9152__delegate;
return G__9152;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9155__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9156__i = 0, G__9156__a = new Array(arguments.length -  0);
while (G__9156__i < G__9156__a.length) {G__9156__a[G__9156__i] = arguments[G__9156__i + 0]; ++G__9156__i;}
  args = new cljs.core.IndexedSeq(G__9156__a,0);
} 
return G__9155__delegate.call(this,args);};
G__9155.cljs$lang$maxFixedArity = 0;
G__9155.cljs$lang$applyTo = (function (arglist__9157){
var args = cljs.core.seq(arglist__9157);
return G__9155__delegate(args);
});
G__9155.cljs$core$IFn$_invoke$arity$variadic = G__9155__delegate;
return G__9155;
})()
;

return null;
});
