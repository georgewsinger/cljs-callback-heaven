goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9743__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9744__i = 0, G__9744__a = new Array(arguments.length -  0);
while (G__9744__i < G__9744__a.length) {G__9744__a[G__9744__i] = arguments[G__9744__i + 0]; ++G__9744__i;}
  args = new cljs.core.IndexedSeq(G__9744__a,0);
} 
return G__9743__delegate.call(this,args);};
G__9743.cljs$lang$maxFixedArity = 0;
G__9743.cljs$lang$applyTo = (function (arglist__9745){
var args = cljs.core.seq(arglist__9745);
return G__9743__delegate(args);
});
G__9743.cljs$core$IFn$_invoke$arity$variadic = G__9743__delegate;
return G__9743;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9746__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9747__i = 0, G__9747__a = new Array(arguments.length -  0);
while (G__9747__i < G__9747__a.length) {G__9747__a[G__9747__i] = arguments[G__9747__i + 0]; ++G__9747__i;}
  args = new cljs.core.IndexedSeq(G__9747__a,0);
} 
return G__9746__delegate.call(this,args);};
G__9746.cljs$lang$maxFixedArity = 0;
G__9746.cljs$lang$applyTo = (function (arglist__9748){
var args = cljs.core.seq(arglist__9748);
return G__9746__delegate(args);
});
G__9746.cljs$core$IFn$_invoke$arity$variadic = G__9746__delegate;
return G__9746;
})()
;

return null;
});
