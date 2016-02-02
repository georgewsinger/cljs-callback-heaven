goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39633__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39634__i = 0, G__39634__a = new Array(arguments.length -  0);
while (G__39634__i < G__39634__a.length) {G__39634__a[G__39634__i] = arguments[G__39634__i + 0]; ++G__39634__i;}
  args = new cljs.core.IndexedSeq(G__39634__a,0);
} 
return G__39633__delegate.call(this,args);};
G__39633.cljs$lang$maxFixedArity = 0;
G__39633.cljs$lang$applyTo = (function (arglist__39635){
var args = cljs.core.seq(arglist__39635);
return G__39633__delegate(args);
});
G__39633.cljs$core$IFn$_invoke$arity$variadic = G__39633__delegate;
return G__39633;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39636__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39637__i = 0, G__39637__a = new Array(arguments.length -  0);
while (G__39637__i < G__39637__a.length) {G__39637__a[G__39637__i] = arguments[G__39637__i + 0]; ++G__39637__i;}
  args = new cljs.core.IndexedSeq(G__39637__a,0);
} 
return G__39636__delegate.call(this,args);};
G__39636.cljs$lang$maxFixedArity = 0;
G__39636.cljs$lang$applyTo = (function (arglist__39638){
var args = cljs.core.seq(arglist__39638);
return G__39636__delegate(args);
});
G__39636.cljs$core$IFn$_invoke$arity$variadic = G__39636__delegate;
return G__39636;
})()
;

return null;
});
