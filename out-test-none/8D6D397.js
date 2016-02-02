goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30743__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30744__i = 0, G__30744__a = new Array(arguments.length -  0);
while (G__30744__i < G__30744__a.length) {G__30744__a[G__30744__i] = arguments[G__30744__i + 0]; ++G__30744__i;}
  args = new cljs.core.IndexedSeq(G__30744__a,0);
} 
return G__30743__delegate.call(this,args);};
G__30743.cljs$lang$maxFixedArity = 0;
G__30743.cljs$lang$applyTo = (function (arglist__30745){
var args = cljs.core.seq(arglist__30745);
return G__30743__delegate(args);
});
G__30743.cljs$core$IFn$_invoke$arity$variadic = G__30743__delegate;
return G__30743;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30746__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30747__i = 0, G__30747__a = new Array(arguments.length -  0);
while (G__30747__i < G__30747__a.length) {G__30747__a[G__30747__i] = arguments[G__30747__i + 0]; ++G__30747__i;}
  args = new cljs.core.IndexedSeq(G__30747__a,0);
} 
return G__30746__delegate.call(this,args);};
G__30746.cljs$lang$maxFixedArity = 0;
G__30746.cljs$lang$applyTo = (function (arglist__30748){
var args = cljs.core.seq(arglist__30748);
return G__30746__delegate(args);
});
G__30746.cljs$core$IFn$_invoke$arity$variadic = G__30746__delegate;
return G__30746;
})()
;

return null;
});
