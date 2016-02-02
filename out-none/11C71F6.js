goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9650__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9651__i = 0, G__9651__a = new Array(arguments.length -  0);
while (G__9651__i < G__9651__a.length) {G__9651__a[G__9651__i] = arguments[G__9651__i + 0]; ++G__9651__i;}
  args = new cljs.core.IndexedSeq(G__9651__a,0);
} 
return G__9650__delegate.call(this,args);};
G__9650.cljs$lang$maxFixedArity = 0;
G__9650.cljs$lang$applyTo = (function (arglist__9652){
var args = cljs.core.seq(arglist__9652);
return G__9650__delegate(args);
});
G__9650.cljs$core$IFn$_invoke$arity$variadic = G__9650__delegate;
return G__9650;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9653__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9654__i = 0, G__9654__a = new Array(arguments.length -  0);
while (G__9654__i < G__9654__a.length) {G__9654__a[G__9654__i] = arguments[G__9654__i + 0]; ++G__9654__i;}
  args = new cljs.core.IndexedSeq(G__9654__a,0);
} 
return G__9653__delegate.call(this,args);};
G__9653.cljs$lang$maxFixedArity = 0;
G__9653.cljs$lang$applyTo = (function (arglist__9655){
var args = cljs.core.seq(arglist__9655);
return G__9653__delegate(args);
});
G__9653.cljs$core$IFn$_invoke$arity$variadic = G__9653__delegate;
return G__9653;
})()
;

return null;
});
