goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30800__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30801__i = 0, G__30801__a = new Array(arguments.length -  0);
while (G__30801__i < G__30801__a.length) {G__30801__a[G__30801__i] = arguments[G__30801__i + 0]; ++G__30801__i;}
  args = new cljs.core.IndexedSeq(G__30801__a,0);
} 
return G__30800__delegate.call(this,args);};
G__30800.cljs$lang$maxFixedArity = 0;
G__30800.cljs$lang$applyTo = (function (arglist__30802){
var args = cljs.core.seq(arglist__30802);
return G__30800__delegate(args);
});
G__30800.cljs$core$IFn$_invoke$arity$variadic = G__30800__delegate;
return G__30800;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30803__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30804__i = 0, G__30804__a = new Array(arguments.length -  0);
while (G__30804__i < G__30804__a.length) {G__30804__a[G__30804__i] = arguments[G__30804__i + 0]; ++G__30804__i;}
  args = new cljs.core.IndexedSeq(G__30804__a,0);
} 
return G__30803__delegate.call(this,args);};
G__30803.cljs$lang$maxFixedArity = 0;
G__30803.cljs$lang$applyTo = (function (arglist__30805){
var args = cljs.core.seq(arglist__30805);
return G__30803__delegate(args);
});
G__30803.cljs$core$IFn$_invoke$arity$variadic = G__30803__delegate;
return G__30803;
})()
;

return null;
});
