goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19354__i = 0, G__19354__a = new Array(arguments.length -  0);
while (G__19354__i < G__19354__a.length) {G__19354__a[G__19354__i] = arguments[G__19354__i + 0]; ++G__19354__i;}
  args = new cljs.core.IndexedSeq(G__19354__a,0);
} 
return G__19353__delegate.call(this,args);};
G__19353.cljs$lang$maxFixedArity = 0;
G__19353.cljs$lang$applyTo = (function (arglist__19355){
var args = cljs.core.seq(arglist__19355);
return G__19353__delegate(args);
});
G__19353.cljs$core$IFn$_invoke$arity$variadic = G__19353__delegate;
return G__19353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19357__i = 0, G__19357__a = new Array(arguments.length -  0);
while (G__19357__i < G__19357__a.length) {G__19357__a[G__19357__i] = arguments[G__19357__i + 0]; ++G__19357__i;}
  args = new cljs.core.IndexedSeq(G__19357__a,0);
} 
return G__19356__delegate.call(this,args);};
G__19356.cljs$lang$maxFixedArity = 0;
G__19356.cljs$lang$applyTo = (function (arglist__19358){
var args = cljs.core.seq(arglist__19358);
return G__19356__delegate(args);
});
G__19356.cljs$core$IFn$_invoke$arity$variadic = G__19356__delegate;
return G__19356;
})()
;

return null;
});
