goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22746__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22747__i = 0, G__22747__a = new Array(arguments.length -  0);
while (G__22747__i < G__22747__a.length) {G__22747__a[G__22747__i] = arguments[G__22747__i + 0]; ++G__22747__i;}
  args = new cljs.core.IndexedSeq(G__22747__a,0);
} 
return G__22746__delegate.call(this,args);};
G__22746.cljs$lang$maxFixedArity = 0;
G__22746.cljs$lang$applyTo = (function (arglist__22748){
var args = cljs.core.seq(arglist__22748);
return G__22746__delegate(args);
});
G__22746.cljs$core$IFn$_invoke$arity$variadic = G__22746__delegate;
return G__22746;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22749__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22750__i = 0, G__22750__a = new Array(arguments.length -  0);
while (G__22750__i < G__22750__a.length) {G__22750__a[G__22750__i] = arguments[G__22750__i + 0]; ++G__22750__i;}
  args = new cljs.core.IndexedSeq(G__22750__a,0);
} 
return G__22749__delegate.call(this,args);};
G__22749.cljs$lang$maxFixedArity = 0;
G__22749.cljs$lang$applyTo = (function (arglist__22751){
var args = cljs.core.seq(arglist__22751);
return G__22749__delegate(args);
});
G__22749.cljs$core$IFn$_invoke$arity$variadic = G__22749__delegate;
return G__22749;
})()
;

return null;
});
