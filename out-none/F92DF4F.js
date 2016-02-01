goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9611__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9612__i = 0, G__9612__a = new Array(arguments.length -  0);
while (G__9612__i < G__9612__a.length) {G__9612__a[G__9612__i] = arguments[G__9612__i + 0]; ++G__9612__i;}
  args = new cljs.core.IndexedSeq(G__9612__a,0);
} 
return G__9611__delegate.call(this,args);};
G__9611.cljs$lang$maxFixedArity = 0;
G__9611.cljs$lang$applyTo = (function (arglist__9613){
var args = cljs.core.seq(arglist__9613);
return G__9611__delegate(args);
});
G__9611.cljs$core$IFn$_invoke$arity$variadic = G__9611__delegate;
return G__9611;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9614__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9615__i = 0, G__9615__a = new Array(arguments.length -  0);
while (G__9615__i < G__9615__a.length) {G__9615__a[G__9615__i] = arguments[G__9615__i + 0]; ++G__9615__i;}
  args = new cljs.core.IndexedSeq(G__9615__a,0);
} 
return G__9614__delegate.call(this,args);};
G__9614.cljs$lang$maxFixedArity = 0;
G__9614.cljs$lang$applyTo = (function (arglist__9616){
var args = cljs.core.seq(arglist__9616);
return G__9614__delegate(args);
});
G__9614.cljs$core$IFn$_invoke$arity$variadic = G__9614__delegate;
return G__9614;
})()
;

return null;
});
