goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11137__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11138__i = 0, G__11138__a = new Array(arguments.length -  0);
while (G__11138__i < G__11138__a.length) {G__11138__a[G__11138__i] = arguments[G__11138__i + 0]; ++G__11138__i;}
  args = new cljs.core.IndexedSeq(G__11138__a,0);
} 
return G__11137__delegate.call(this,args);};
G__11137.cljs$lang$maxFixedArity = 0;
G__11137.cljs$lang$applyTo = (function (arglist__11139){
var args = cljs.core.seq(arglist__11139);
return G__11137__delegate(args);
});
G__11137.cljs$core$IFn$_invoke$arity$variadic = G__11137__delegate;
return G__11137;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11140__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11141__i = 0, G__11141__a = new Array(arguments.length -  0);
while (G__11141__i < G__11141__a.length) {G__11141__a[G__11141__i] = arguments[G__11141__i + 0]; ++G__11141__i;}
  args = new cljs.core.IndexedSeq(G__11141__a,0);
} 
return G__11140__delegate.call(this,args);};
G__11140.cljs$lang$maxFixedArity = 0;
G__11140.cljs$lang$applyTo = (function (arglist__11142){
var args = cljs.core.seq(arglist__11142);
return G__11140__delegate(args);
});
G__11140.cljs$core$IFn$_invoke$arity$variadic = G__11140__delegate;
return G__11140;
})()
;

return null;
});
