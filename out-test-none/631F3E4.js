goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19678__i = 0, G__19678__a = new Array(arguments.length -  0);
while (G__19678__i < G__19678__a.length) {G__19678__a[G__19678__i] = arguments[G__19678__i + 0]; ++G__19678__i;}
  args = new cljs.core.IndexedSeq(G__19678__a,0);
} 
return G__19677__delegate.call(this,args);};
G__19677.cljs$lang$maxFixedArity = 0;
G__19677.cljs$lang$applyTo = (function (arglist__19679){
var args = cljs.core.seq(arglist__19679);
return G__19677__delegate(args);
});
G__19677.cljs$core$IFn$_invoke$arity$variadic = G__19677__delegate;
return G__19677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19681__i = 0, G__19681__a = new Array(arguments.length -  0);
while (G__19681__i < G__19681__a.length) {G__19681__a[G__19681__i] = arguments[G__19681__i + 0]; ++G__19681__i;}
  args = new cljs.core.IndexedSeq(G__19681__a,0);
} 
return G__19680__delegate.call(this,args);};
G__19680.cljs$lang$maxFixedArity = 0;
G__19680.cljs$lang$applyTo = (function (arglist__19682){
var args = cljs.core.seq(arglist__19682);
return G__19680__delegate(args);
});
G__19680.cljs$core$IFn$_invoke$arity$variadic = G__19680__delegate;
return G__19680;
})()
;

return null;
});
