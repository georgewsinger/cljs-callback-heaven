goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14294__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14295__i = 0, G__14295__a = new Array(arguments.length -  0);
while (G__14295__i < G__14295__a.length) {G__14295__a[G__14295__i] = arguments[G__14295__i + 0]; ++G__14295__i;}
  args = new cljs.core.IndexedSeq(G__14295__a,0);
} 
return G__14294__delegate.call(this,args);};
G__14294.cljs$lang$maxFixedArity = 0;
G__14294.cljs$lang$applyTo = (function (arglist__14296){
var args = cljs.core.seq(arglist__14296);
return G__14294__delegate(args);
});
G__14294.cljs$core$IFn$_invoke$arity$variadic = G__14294__delegate;
return G__14294;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14297__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14298__i = 0, G__14298__a = new Array(arguments.length -  0);
while (G__14298__i < G__14298__a.length) {G__14298__a[G__14298__i] = arguments[G__14298__i + 0]; ++G__14298__i;}
  args = new cljs.core.IndexedSeq(G__14298__a,0);
} 
return G__14297__delegate.call(this,args);};
G__14297.cljs$lang$maxFixedArity = 0;
G__14297.cljs$lang$applyTo = (function (arglist__14299){
var args = cljs.core.seq(arglist__14299);
return G__14297__delegate(args);
});
G__14297.cljs$core$IFn$_invoke$arity$variadic = G__14297__delegate;
return G__14297;
})()
;

return null;
});
