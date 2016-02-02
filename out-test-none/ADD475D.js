goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14047__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14048__i = 0, G__14048__a = new Array(arguments.length -  0);
while (G__14048__i < G__14048__a.length) {G__14048__a[G__14048__i] = arguments[G__14048__i + 0]; ++G__14048__i;}
  args = new cljs.core.IndexedSeq(G__14048__a,0);
} 
return G__14047__delegate.call(this,args);};
G__14047.cljs$lang$maxFixedArity = 0;
G__14047.cljs$lang$applyTo = (function (arglist__14049){
var args = cljs.core.seq(arglist__14049);
return G__14047__delegate(args);
});
G__14047.cljs$core$IFn$_invoke$arity$variadic = G__14047__delegate;
return G__14047;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14050__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14051__i = 0, G__14051__a = new Array(arguments.length -  0);
while (G__14051__i < G__14051__a.length) {G__14051__a[G__14051__i] = arguments[G__14051__i + 0]; ++G__14051__i;}
  args = new cljs.core.IndexedSeq(G__14051__a,0);
} 
return G__14050__delegate.call(this,args);};
G__14050.cljs$lang$maxFixedArity = 0;
G__14050.cljs$lang$applyTo = (function (arglist__14052){
var args = cljs.core.seq(arglist__14052);
return G__14050__delegate(args);
});
G__14050.cljs$core$IFn$_invoke$arity$variadic = G__14050__delegate;
return G__14050;
})()
;

return null;
});
