goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20678__i = 0, G__20678__a = new Array(arguments.length -  0);
while (G__20678__i < G__20678__a.length) {G__20678__a[G__20678__i] = arguments[G__20678__i + 0]; ++G__20678__i;}
  args = new cljs.core.IndexedSeq(G__20678__a,0);
} 
return G__20677__delegate.call(this,args);};
G__20677.cljs$lang$maxFixedArity = 0;
G__20677.cljs$lang$applyTo = (function (arglist__20679){
var args = cljs.core.seq(arglist__20679);
return G__20677__delegate(args);
});
G__20677.cljs$core$IFn$_invoke$arity$variadic = G__20677__delegate;
return G__20677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20681__i = 0, G__20681__a = new Array(arguments.length -  0);
while (G__20681__i < G__20681__a.length) {G__20681__a[G__20681__i] = arguments[G__20681__i + 0]; ++G__20681__i;}
  args = new cljs.core.IndexedSeq(G__20681__a,0);
} 
return G__20680__delegate.call(this,args);};
G__20680.cljs$lang$maxFixedArity = 0;
G__20680.cljs$lang$applyTo = (function (arglist__20682){
var args = cljs.core.seq(arglist__20682);
return G__20680__delegate(args);
});
G__20680.cljs$core$IFn$_invoke$arity$variadic = G__20680__delegate;
return G__20680;
})()
;

return null;
});
