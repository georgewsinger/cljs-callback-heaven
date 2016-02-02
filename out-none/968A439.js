goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29774__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29775__i = 0, G__29775__a = new Array(arguments.length -  0);
while (G__29775__i < G__29775__a.length) {G__29775__a[G__29775__i] = arguments[G__29775__i + 0]; ++G__29775__i;}
  args = new cljs.core.IndexedSeq(G__29775__a,0);
} 
return G__29774__delegate.call(this,args);};
G__29774.cljs$lang$maxFixedArity = 0;
G__29774.cljs$lang$applyTo = (function (arglist__29776){
var args = cljs.core.seq(arglist__29776);
return G__29774__delegate(args);
});
G__29774.cljs$core$IFn$_invoke$arity$variadic = G__29774__delegate;
return G__29774;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29777__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29778__i = 0, G__29778__a = new Array(arguments.length -  0);
while (G__29778__i < G__29778__a.length) {G__29778__a[G__29778__i] = arguments[G__29778__i + 0]; ++G__29778__i;}
  args = new cljs.core.IndexedSeq(G__29778__a,0);
} 
return G__29777__delegate.call(this,args);};
G__29777.cljs$lang$maxFixedArity = 0;
G__29777.cljs$lang$applyTo = (function (arglist__29779){
var args = cljs.core.seq(arglist__29779);
return G__29777__delegate(args);
});
G__29777.cljs$core$IFn$_invoke$arity$variadic = G__29777__delegate;
return G__29777;
})()
;

return null;
});
