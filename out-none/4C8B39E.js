goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9875__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9876__i = 0, G__9876__a = new Array(arguments.length -  0);
while (G__9876__i < G__9876__a.length) {G__9876__a[G__9876__i] = arguments[G__9876__i + 0]; ++G__9876__i;}
  args = new cljs.core.IndexedSeq(G__9876__a,0);
} 
return G__9875__delegate.call(this,args);};
G__9875.cljs$lang$maxFixedArity = 0;
G__9875.cljs$lang$applyTo = (function (arglist__9877){
var args = cljs.core.seq(arglist__9877);
return G__9875__delegate(args);
});
G__9875.cljs$core$IFn$_invoke$arity$variadic = G__9875__delegate;
return G__9875;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9878__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9879__i = 0, G__9879__a = new Array(arguments.length -  0);
while (G__9879__i < G__9879__a.length) {G__9879__a[G__9879__i] = arguments[G__9879__i + 0]; ++G__9879__i;}
  args = new cljs.core.IndexedSeq(G__9879__a,0);
} 
return G__9878__delegate.call(this,args);};
G__9878.cljs$lang$maxFixedArity = 0;
G__9878.cljs$lang$applyTo = (function (arglist__9880){
var args = cljs.core.seq(arglist__9880);
return G__9878__delegate(args);
});
G__9878.cljs$core$IFn$_invoke$arity$variadic = G__9878__delegate;
return G__9878;
})()
;

return null;
});
