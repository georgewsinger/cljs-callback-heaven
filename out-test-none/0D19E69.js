goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16743__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16744__i = 0, G__16744__a = new Array(arguments.length -  0);
while (G__16744__i < G__16744__a.length) {G__16744__a[G__16744__i] = arguments[G__16744__i + 0]; ++G__16744__i;}
  args = new cljs.core.IndexedSeq(G__16744__a,0);
} 
return G__16743__delegate.call(this,args);};
G__16743.cljs$lang$maxFixedArity = 0;
G__16743.cljs$lang$applyTo = (function (arglist__16745){
var args = cljs.core.seq(arglist__16745);
return G__16743__delegate(args);
});
G__16743.cljs$core$IFn$_invoke$arity$variadic = G__16743__delegate;
return G__16743;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16746__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16747__i = 0, G__16747__a = new Array(arguments.length -  0);
while (G__16747__i < G__16747__a.length) {G__16747__a[G__16747__i] = arguments[G__16747__i + 0]; ++G__16747__i;}
  args = new cljs.core.IndexedSeq(G__16747__a,0);
} 
return G__16746__delegate.call(this,args);};
G__16746.cljs$lang$maxFixedArity = 0;
G__16746.cljs$lang$applyTo = (function (arglist__16748){
var args = cljs.core.seq(arglist__16748);
return G__16746__delegate(args);
});
G__16746.cljs$core$IFn$_invoke$arity$variadic = G__16746__delegate;
return G__16746;
})()
;

return null;
});
