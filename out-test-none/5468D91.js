goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17984__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17985__i = 0, G__17985__a = new Array(arguments.length -  0);
while (G__17985__i < G__17985__a.length) {G__17985__a[G__17985__i] = arguments[G__17985__i + 0]; ++G__17985__i;}
  args = new cljs.core.IndexedSeq(G__17985__a,0);
} 
return G__17984__delegate.call(this,args);};
G__17984.cljs$lang$maxFixedArity = 0;
G__17984.cljs$lang$applyTo = (function (arglist__17986){
var args = cljs.core.seq(arglist__17986);
return G__17984__delegate(args);
});
G__17984.cljs$core$IFn$_invoke$arity$variadic = G__17984__delegate;
return G__17984;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17987__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17988__i = 0, G__17988__a = new Array(arguments.length -  0);
while (G__17988__i < G__17988__a.length) {G__17988__a[G__17988__i] = arguments[G__17988__i + 0]; ++G__17988__i;}
  args = new cljs.core.IndexedSeq(G__17988__a,0);
} 
return G__17987__delegate.call(this,args);};
G__17987.cljs$lang$maxFixedArity = 0;
G__17987.cljs$lang$applyTo = (function (arglist__17989){
var args = cljs.core.seq(arglist__17989);
return G__17987__delegate(args);
});
G__17987.cljs$core$IFn$_invoke$arity$variadic = G__17987__delegate;
return G__17987;
})()
;

return null;
});
