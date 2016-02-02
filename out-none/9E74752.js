goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33835__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33836__i = 0, G__33836__a = new Array(arguments.length -  0);
while (G__33836__i < G__33836__a.length) {G__33836__a[G__33836__i] = arguments[G__33836__i + 0]; ++G__33836__i;}
  args = new cljs.core.IndexedSeq(G__33836__a,0);
} 
return G__33835__delegate.call(this,args);};
G__33835.cljs$lang$maxFixedArity = 0;
G__33835.cljs$lang$applyTo = (function (arglist__33837){
var args = cljs.core.seq(arglist__33837);
return G__33835__delegate(args);
});
G__33835.cljs$core$IFn$_invoke$arity$variadic = G__33835__delegate;
return G__33835;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33838__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33839__i = 0, G__33839__a = new Array(arguments.length -  0);
while (G__33839__i < G__33839__a.length) {G__33839__a[G__33839__i] = arguments[G__33839__i + 0]; ++G__33839__i;}
  args = new cljs.core.IndexedSeq(G__33839__a,0);
} 
return G__33838__delegate.call(this,args);};
G__33838.cljs$lang$maxFixedArity = 0;
G__33838.cljs$lang$applyTo = (function (arglist__33840){
var args = cljs.core.seq(arglist__33840);
return G__33838__delegate(args);
});
G__33838.cljs$core$IFn$_invoke$arity$variadic = G__33838__delegate;
return G__33838;
})()
;

return null;
});
