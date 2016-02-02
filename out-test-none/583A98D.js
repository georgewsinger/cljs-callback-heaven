goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22892__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22893__i = 0, G__22893__a = new Array(arguments.length -  0);
while (G__22893__i < G__22893__a.length) {G__22893__a[G__22893__i] = arguments[G__22893__i + 0]; ++G__22893__i;}
  args = new cljs.core.IndexedSeq(G__22893__a,0);
} 
return G__22892__delegate.call(this,args);};
G__22892.cljs$lang$maxFixedArity = 0;
G__22892.cljs$lang$applyTo = (function (arglist__22894){
var args = cljs.core.seq(arglist__22894);
return G__22892__delegate(args);
});
G__22892.cljs$core$IFn$_invoke$arity$variadic = G__22892__delegate;
return G__22892;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22895__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22896__i = 0, G__22896__a = new Array(arguments.length -  0);
while (G__22896__i < G__22896__a.length) {G__22896__a[G__22896__i] = arguments[G__22896__i + 0]; ++G__22896__i;}
  args = new cljs.core.IndexedSeq(G__22896__a,0);
} 
return G__22895__delegate.call(this,args);};
G__22895.cljs$lang$maxFixedArity = 0;
G__22895.cljs$lang$applyTo = (function (arglist__22897){
var args = cljs.core.seq(arglist__22897);
return G__22895__delegate(args);
});
G__22895.cljs$core$IFn$_invoke$arity$variadic = G__22895__delegate;
return G__22895;
})()
;

return null;
});
