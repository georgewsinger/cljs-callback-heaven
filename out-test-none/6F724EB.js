goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33678__i = 0, G__33678__a = new Array(arguments.length -  0);
while (G__33678__i < G__33678__a.length) {G__33678__a[G__33678__i] = arguments[G__33678__i + 0]; ++G__33678__i;}
  args = new cljs.core.IndexedSeq(G__33678__a,0);
} 
return G__33677__delegate.call(this,args);};
G__33677.cljs$lang$maxFixedArity = 0;
G__33677.cljs$lang$applyTo = (function (arglist__33679){
var args = cljs.core.seq(arglist__33679);
return G__33677__delegate(args);
});
G__33677.cljs$core$IFn$_invoke$arity$variadic = G__33677__delegate;
return G__33677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33681__i = 0, G__33681__a = new Array(arguments.length -  0);
while (G__33681__i < G__33681__a.length) {G__33681__a[G__33681__i] = arguments[G__33681__i + 0]; ++G__33681__i;}
  args = new cljs.core.IndexedSeq(G__33681__a,0);
} 
return G__33680__delegate.call(this,args);};
G__33680.cljs$lang$maxFixedArity = 0;
G__33680.cljs$lang$applyTo = (function (arglist__33682){
var args = cljs.core.seq(arglist__33682);
return G__33680__delegate(args);
});
G__33680.cljs$core$IFn$_invoke$arity$variadic = G__33680__delegate;
return G__33680;
})()
;

return null;
});
