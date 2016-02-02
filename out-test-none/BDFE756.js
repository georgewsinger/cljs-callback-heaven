goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22572__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22573__i = 0, G__22573__a = new Array(arguments.length -  0);
while (G__22573__i < G__22573__a.length) {G__22573__a[G__22573__i] = arguments[G__22573__i + 0]; ++G__22573__i;}
  args = new cljs.core.IndexedSeq(G__22573__a,0);
} 
return G__22572__delegate.call(this,args);};
G__22572.cljs$lang$maxFixedArity = 0;
G__22572.cljs$lang$applyTo = (function (arglist__22574){
var args = cljs.core.seq(arglist__22574);
return G__22572__delegate(args);
});
G__22572.cljs$core$IFn$_invoke$arity$variadic = G__22572__delegate;
return G__22572;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22575__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22576__i = 0, G__22576__a = new Array(arguments.length -  0);
while (G__22576__i < G__22576__a.length) {G__22576__a[G__22576__i] = arguments[G__22576__i + 0]; ++G__22576__i;}
  args = new cljs.core.IndexedSeq(G__22576__a,0);
} 
return G__22575__delegate.call(this,args);};
G__22575.cljs$lang$maxFixedArity = 0;
G__22575.cljs$lang$applyTo = (function (arglist__22577){
var args = cljs.core.seq(arglist__22577);
return G__22575__delegate(args);
});
G__22575.cljs$core$IFn$_invoke$arity$variadic = G__22575__delegate;
return G__22575;
})()
;

return null;
});
