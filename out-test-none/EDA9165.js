goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__325047__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__325047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325048__i = 0, G__325048__a = new Array(arguments.length -  0);
while (G__325048__i < G__325048__a.length) {G__325048__a[G__325048__i] = arguments[G__325048__i + 0]; ++G__325048__i;}
  args = new cljs.core.IndexedSeq(G__325048__a,0);
} 
return G__325047__delegate.call(this,args);};
G__325047.cljs$lang$maxFixedArity = 0;
G__325047.cljs$lang$applyTo = (function (arglist__325049){
var args = cljs.core.seq(arglist__325049);
return G__325047__delegate(args);
});
G__325047.cljs$core$IFn$_invoke$arity$variadic = G__325047__delegate;
return G__325047;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__325050__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__325050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325051__i = 0, G__325051__a = new Array(arguments.length -  0);
while (G__325051__i < G__325051__a.length) {G__325051__a[G__325051__i] = arguments[G__325051__i + 0]; ++G__325051__i;}
  args = new cljs.core.IndexedSeq(G__325051__a,0);
} 
return G__325050__delegate.call(this,args);};
G__325050.cljs$lang$maxFixedArity = 0;
G__325050.cljs$lang$applyTo = (function (arglist__325052){
var args = cljs.core.seq(arglist__325052);
return G__325050__delegate(args);
});
G__325050.cljs$core$IFn$_invoke$arity$variadic = G__325050__delegate;
return G__325050;
})()
;

return null;
});
