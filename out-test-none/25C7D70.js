goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18174__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18175__i = 0, G__18175__a = new Array(arguments.length -  0);
while (G__18175__i < G__18175__a.length) {G__18175__a[G__18175__i] = arguments[G__18175__i + 0]; ++G__18175__i;}
  args = new cljs.core.IndexedSeq(G__18175__a,0);
} 
return G__18174__delegate.call(this,args);};
G__18174.cljs$lang$maxFixedArity = 0;
G__18174.cljs$lang$applyTo = (function (arglist__18176){
var args = cljs.core.seq(arglist__18176);
return G__18174__delegate(args);
});
G__18174.cljs$core$IFn$_invoke$arity$variadic = G__18174__delegate;
return G__18174;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18177__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18178__i = 0, G__18178__a = new Array(arguments.length -  0);
while (G__18178__i < G__18178__a.length) {G__18178__a[G__18178__i] = arguments[G__18178__i + 0]; ++G__18178__i;}
  args = new cljs.core.IndexedSeq(G__18178__a,0);
} 
return G__18177__delegate.call(this,args);};
G__18177.cljs$lang$maxFixedArity = 0;
G__18177.cljs$lang$applyTo = (function (arglist__18179){
var args = cljs.core.seq(arglist__18179);
return G__18177__delegate(args);
});
G__18177.cljs$core$IFn$_invoke$arity$variadic = G__18177__delegate;
return G__18177;
})()
;

return null;
});
