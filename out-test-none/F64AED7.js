goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109014__i = 0, G__109014__a = new Array(arguments.length -  0);
while (G__109014__i < G__109014__a.length) {G__109014__a[G__109014__i] = arguments[G__109014__i + 0]; ++G__109014__i;}
  args = new cljs.core.IndexedSeq(G__109014__a,0);
} 
return G__109013__delegate.call(this,args);};
G__109013.cljs$lang$maxFixedArity = 0;
G__109013.cljs$lang$applyTo = (function (arglist__109015){
var args = cljs.core.seq(arglist__109015);
return G__109013__delegate(args);
});
G__109013.cljs$core$IFn$_invoke$arity$variadic = G__109013__delegate;
return G__109013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109017__i = 0, G__109017__a = new Array(arguments.length -  0);
while (G__109017__i < G__109017__a.length) {G__109017__a[G__109017__i] = arguments[G__109017__i + 0]; ++G__109017__i;}
  args = new cljs.core.IndexedSeq(G__109017__a,0);
} 
return G__109016__delegate.call(this,args);};
G__109016.cljs$lang$maxFixedArity = 0;
G__109016.cljs$lang$applyTo = (function (arglist__109018){
var args = cljs.core.seq(arglist__109018);
return G__109016__delegate(args);
});
G__109016.cljs$core$IFn$_invoke$arity$variadic = G__109016__delegate;
return G__109016;
})()
;

return null;
});
