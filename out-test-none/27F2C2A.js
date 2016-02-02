goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14917__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14918__i = 0, G__14918__a = new Array(arguments.length -  0);
while (G__14918__i < G__14918__a.length) {G__14918__a[G__14918__i] = arguments[G__14918__i + 0]; ++G__14918__i;}
  args = new cljs.core.IndexedSeq(G__14918__a,0);
} 
return G__14917__delegate.call(this,args);};
G__14917.cljs$lang$maxFixedArity = 0;
G__14917.cljs$lang$applyTo = (function (arglist__14919){
var args = cljs.core.seq(arglist__14919);
return G__14917__delegate(args);
});
G__14917.cljs$core$IFn$_invoke$arity$variadic = G__14917__delegate;
return G__14917;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14920__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14921__i = 0, G__14921__a = new Array(arguments.length -  0);
while (G__14921__i < G__14921__a.length) {G__14921__a[G__14921__i] = arguments[G__14921__i + 0]; ++G__14921__i;}
  args = new cljs.core.IndexedSeq(G__14921__a,0);
} 
return G__14920__delegate.call(this,args);};
G__14920.cljs$lang$maxFixedArity = 0;
G__14920.cljs$lang$applyTo = (function (arglist__14922){
var args = cljs.core.seq(arglist__14922);
return G__14920__delegate(args);
});
G__14920.cljs$core$IFn$_invoke$arity$variadic = G__14920__delegate;
return G__14920;
})()
;

return null;
});
