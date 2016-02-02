goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27272__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27273__i = 0, G__27273__a = new Array(arguments.length -  0);
while (G__27273__i < G__27273__a.length) {G__27273__a[G__27273__i] = arguments[G__27273__i + 0]; ++G__27273__i;}
  args = new cljs.core.IndexedSeq(G__27273__a,0);
} 
return G__27272__delegate.call(this,args);};
G__27272.cljs$lang$maxFixedArity = 0;
G__27272.cljs$lang$applyTo = (function (arglist__27274){
var args = cljs.core.seq(arglist__27274);
return G__27272__delegate(args);
});
G__27272.cljs$core$IFn$_invoke$arity$variadic = G__27272__delegate;
return G__27272;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27275__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27276__i = 0, G__27276__a = new Array(arguments.length -  0);
while (G__27276__i < G__27276__a.length) {G__27276__a[G__27276__i] = arguments[G__27276__i + 0]; ++G__27276__i;}
  args = new cljs.core.IndexedSeq(G__27276__a,0);
} 
return G__27275__delegate.call(this,args);};
G__27275.cljs$lang$maxFixedArity = 0;
G__27275.cljs$lang$applyTo = (function (arglist__27277){
var args = cljs.core.seq(arglist__27277);
return G__27275__delegate(args);
});
G__27275.cljs$core$IFn$_invoke$arity$variadic = G__27275__delegate;
return G__27275;
})()
;

return null;
});
