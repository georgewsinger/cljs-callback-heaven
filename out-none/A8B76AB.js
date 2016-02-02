goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22592__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22593__i = 0, G__22593__a = new Array(arguments.length -  0);
while (G__22593__i < G__22593__a.length) {G__22593__a[G__22593__i] = arguments[G__22593__i + 0]; ++G__22593__i;}
  args = new cljs.core.IndexedSeq(G__22593__a,0);
} 
return G__22592__delegate.call(this,args);};
G__22592.cljs$lang$maxFixedArity = 0;
G__22592.cljs$lang$applyTo = (function (arglist__22594){
var args = cljs.core.seq(arglist__22594);
return G__22592__delegate(args);
});
G__22592.cljs$core$IFn$_invoke$arity$variadic = G__22592__delegate;
return G__22592;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22595__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22596__i = 0, G__22596__a = new Array(arguments.length -  0);
while (G__22596__i < G__22596__a.length) {G__22596__a[G__22596__i] = arguments[G__22596__i + 0]; ++G__22596__i;}
  args = new cljs.core.IndexedSeq(G__22596__a,0);
} 
return G__22595__delegate.call(this,args);};
G__22595.cljs$lang$maxFixedArity = 0;
G__22595.cljs$lang$applyTo = (function (arglist__22597){
var args = cljs.core.seq(arglist__22597);
return G__22595__delegate(args);
});
G__22595.cljs$core$IFn$_invoke$arity$variadic = G__22595__delegate;
return G__22595;
})()
;

return null;
});
