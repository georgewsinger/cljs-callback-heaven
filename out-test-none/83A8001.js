goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16007__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16008__i = 0, G__16008__a = new Array(arguments.length -  0);
while (G__16008__i < G__16008__a.length) {G__16008__a[G__16008__i] = arguments[G__16008__i + 0]; ++G__16008__i;}
  args = new cljs.core.IndexedSeq(G__16008__a,0);
} 
return G__16007__delegate.call(this,args);};
G__16007.cljs$lang$maxFixedArity = 0;
G__16007.cljs$lang$applyTo = (function (arglist__16009){
var args = cljs.core.seq(arglist__16009);
return G__16007__delegate(args);
});
G__16007.cljs$core$IFn$_invoke$arity$variadic = G__16007__delegate;
return G__16007;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16010__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16011__i = 0, G__16011__a = new Array(arguments.length -  0);
while (G__16011__i < G__16011__a.length) {G__16011__a[G__16011__i] = arguments[G__16011__i + 0]; ++G__16011__i;}
  args = new cljs.core.IndexedSeq(G__16011__a,0);
} 
return G__16010__delegate.call(this,args);};
G__16010.cljs$lang$maxFixedArity = 0;
G__16010.cljs$lang$applyTo = (function (arglist__16012){
var args = cljs.core.seq(arglist__16012);
return G__16010__delegate(args);
});
G__16010.cljs$core$IFn$_invoke$arity$variadic = G__16010__delegate;
return G__16010;
})()
;

return null;
});
