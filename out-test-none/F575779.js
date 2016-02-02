goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9590__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9591__i = 0, G__9591__a = new Array(arguments.length -  0);
while (G__9591__i < G__9591__a.length) {G__9591__a[G__9591__i] = arguments[G__9591__i + 0]; ++G__9591__i;}
  args = new cljs.core.IndexedSeq(G__9591__a,0);
} 
return G__9590__delegate.call(this,args);};
G__9590.cljs$lang$maxFixedArity = 0;
G__9590.cljs$lang$applyTo = (function (arglist__9592){
var args = cljs.core.seq(arglist__9592);
return G__9590__delegate(args);
});
G__9590.cljs$core$IFn$_invoke$arity$variadic = G__9590__delegate;
return G__9590;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9593__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9594__i = 0, G__9594__a = new Array(arguments.length -  0);
while (G__9594__i < G__9594__a.length) {G__9594__a[G__9594__i] = arguments[G__9594__i + 0]; ++G__9594__i;}
  args = new cljs.core.IndexedSeq(G__9594__a,0);
} 
return G__9593__delegate.call(this,args);};
G__9593.cljs$lang$maxFixedArity = 0;
G__9593.cljs$lang$applyTo = (function (arglist__9595){
var args = cljs.core.seq(arglist__9595);
return G__9593__delegate(args);
});
G__9593.cljs$core$IFn$_invoke$arity$variadic = G__9593__delegate;
return G__9593;
})()
;

return null;
});
