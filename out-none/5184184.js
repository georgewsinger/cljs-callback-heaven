goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__72004__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__72004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72005__i = 0, G__72005__a = new Array(arguments.length -  0);
while (G__72005__i < G__72005__a.length) {G__72005__a[G__72005__i] = arguments[G__72005__i + 0]; ++G__72005__i;}
  args = new cljs.core.IndexedSeq(G__72005__a,0);
} 
return G__72004__delegate.call(this,args);};
G__72004.cljs$lang$maxFixedArity = 0;
G__72004.cljs$lang$applyTo = (function (arglist__72006){
var args = cljs.core.seq(arglist__72006);
return G__72004__delegate(args);
});
G__72004.cljs$core$IFn$_invoke$arity$variadic = G__72004__delegate;
return G__72004;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__72007__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__72007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72008__i = 0, G__72008__a = new Array(arguments.length -  0);
while (G__72008__i < G__72008__a.length) {G__72008__a[G__72008__i] = arguments[G__72008__i + 0]; ++G__72008__i;}
  args = new cljs.core.IndexedSeq(G__72008__a,0);
} 
return G__72007__delegate.call(this,args);};
G__72007.cljs$lang$maxFixedArity = 0;
G__72007.cljs$lang$applyTo = (function (arglist__72009){
var args = cljs.core.seq(arglist__72009);
return G__72007__delegate(args);
});
G__72007.cljs$core$IFn$_invoke$arity$variadic = G__72007__delegate;
return G__72007;
})()
;

return null;
});
