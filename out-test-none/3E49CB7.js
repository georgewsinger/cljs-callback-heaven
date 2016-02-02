goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254343__i = 0, G__254343__a = new Array(arguments.length -  0);
while (G__254343__i < G__254343__a.length) {G__254343__a[G__254343__i] = arguments[G__254343__i + 0]; ++G__254343__i;}
  args = new cljs.core.IndexedSeq(G__254343__a,0);
} 
return G__254342__delegate.call(this,args);};
G__254342.cljs$lang$maxFixedArity = 0;
G__254342.cljs$lang$applyTo = (function (arglist__254344){
var args = cljs.core.seq(arglist__254344);
return G__254342__delegate(args);
});
G__254342.cljs$core$IFn$_invoke$arity$variadic = G__254342__delegate;
return G__254342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254346__i = 0, G__254346__a = new Array(arguments.length -  0);
while (G__254346__i < G__254346__a.length) {G__254346__a[G__254346__i] = arguments[G__254346__i + 0]; ++G__254346__i;}
  args = new cljs.core.IndexedSeq(G__254346__a,0);
} 
return G__254345__delegate.call(this,args);};
G__254345.cljs$lang$maxFixedArity = 0;
G__254345.cljs$lang$applyTo = (function (arglist__254347){
var args = cljs.core.seq(arglist__254347);
return G__254345__delegate(args);
});
G__254345.cljs$core$IFn$_invoke$arity$variadic = G__254345__delegate;
return G__254345;
})()
;

return null;
});
