goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50830__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50831__i = 0, G__50831__a = new Array(arguments.length -  0);
while (G__50831__i < G__50831__a.length) {G__50831__a[G__50831__i] = arguments[G__50831__i + 0]; ++G__50831__i;}
  args = new cljs.core.IndexedSeq(G__50831__a,0);
} 
return G__50830__delegate.call(this,args);};
G__50830.cljs$lang$maxFixedArity = 0;
G__50830.cljs$lang$applyTo = (function (arglist__50832){
var args = cljs.core.seq(arglist__50832);
return G__50830__delegate(args);
});
G__50830.cljs$core$IFn$_invoke$arity$variadic = G__50830__delegate;
return G__50830;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50833__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50834__i = 0, G__50834__a = new Array(arguments.length -  0);
while (G__50834__i < G__50834__a.length) {G__50834__a[G__50834__i] = arguments[G__50834__i + 0]; ++G__50834__i;}
  args = new cljs.core.IndexedSeq(G__50834__a,0);
} 
return G__50833__delegate.call(this,args);};
G__50833.cljs$lang$maxFixedArity = 0;
G__50833.cljs$lang$applyTo = (function (arglist__50835){
var args = cljs.core.seq(arglist__50835);
return G__50833__delegate(args);
});
G__50833.cljs$core$IFn$_invoke$arity$variadic = G__50833__delegate;
return G__50833;
})()
;

return null;
});
