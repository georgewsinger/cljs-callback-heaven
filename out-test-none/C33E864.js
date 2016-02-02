goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254354__i = 0, G__254354__a = new Array(arguments.length -  0);
while (G__254354__i < G__254354__a.length) {G__254354__a[G__254354__i] = arguments[G__254354__i + 0]; ++G__254354__i;}
  args = new cljs.core.IndexedSeq(G__254354__a,0);
} 
return G__254353__delegate.call(this,args);};
G__254353.cljs$lang$maxFixedArity = 0;
G__254353.cljs$lang$applyTo = (function (arglist__254355){
var args = cljs.core.seq(arglist__254355);
return G__254353__delegate(args);
});
G__254353.cljs$core$IFn$_invoke$arity$variadic = G__254353__delegate;
return G__254353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254357__i = 0, G__254357__a = new Array(arguments.length -  0);
while (G__254357__i < G__254357__a.length) {G__254357__a[G__254357__i] = arguments[G__254357__i + 0]; ++G__254357__i;}
  args = new cljs.core.IndexedSeq(G__254357__a,0);
} 
return G__254356__delegate.call(this,args);};
G__254356.cljs$lang$maxFixedArity = 0;
G__254356.cljs$lang$applyTo = (function (arglist__254358){
var args = cljs.core.seq(arglist__254358);
return G__254356__delegate(args);
});
G__254356.cljs$core$IFn$_invoke$arity$variadic = G__254356__delegate;
return G__254356;
})()
;

return null;
});
