goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15737__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15738__i = 0, G__15738__a = new Array(arguments.length -  0);
while (G__15738__i < G__15738__a.length) {G__15738__a[G__15738__i] = arguments[G__15738__i + 0]; ++G__15738__i;}
  args = new cljs.core.IndexedSeq(G__15738__a,0);
} 
return G__15737__delegate.call(this,args);};
G__15737.cljs$lang$maxFixedArity = 0;
G__15737.cljs$lang$applyTo = (function (arglist__15739){
var args = cljs.core.seq(arglist__15739);
return G__15737__delegate(args);
});
G__15737.cljs$core$IFn$_invoke$arity$variadic = G__15737__delegate;
return G__15737;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15740__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15741__i = 0, G__15741__a = new Array(arguments.length -  0);
while (G__15741__i < G__15741__a.length) {G__15741__a[G__15741__i] = arguments[G__15741__i + 0]; ++G__15741__i;}
  args = new cljs.core.IndexedSeq(G__15741__a,0);
} 
return G__15740__delegate.call(this,args);};
G__15740.cljs$lang$maxFixedArity = 0;
G__15740.cljs$lang$applyTo = (function (arglist__15742){
var args = cljs.core.seq(arglist__15742);
return G__15740__delegate(args);
});
G__15740.cljs$core$IFn$_invoke$arity$variadic = G__15740__delegate;
return G__15740;
})()
;

return null;
});
