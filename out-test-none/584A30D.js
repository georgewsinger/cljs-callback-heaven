goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__102589__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__102589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102590__i = 0, G__102590__a = new Array(arguments.length -  0);
while (G__102590__i < G__102590__a.length) {G__102590__a[G__102590__i] = arguments[G__102590__i + 0]; ++G__102590__i;}
  args = new cljs.core.IndexedSeq(G__102590__a,0);
} 
return G__102589__delegate.call(this,args);};
G__102589.cljs$lang$maxFixedArity = 0;
G__102589.cljs$lang$applyTo = (function (arglist__102591){
var args = cljs.core.seq(arglist__102591);
return G__102589__delegate(args);
});
G__102589.cljs$core$IFn$_invoke$arity$variadic = G__102589__delegate;
return G__102589;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__102592__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__102592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102593__i = 0, G__102593__a = new Array(arguments.length -  0);
while (G__102593__i < G__102593__a.length) {G__102593__a[G__102593__i] = arguments[G__102593__i + 0]; ++G__102593__i;}
  args = new cljs.core.IndexedSeq(G__102593__a,0);
} 
return G__102592__delegate.call(this,args);};
G__102592.cljs$lang$maxFixedArity = 0;
G__102592.cljs$lang$applyTo = (function (arglist__102594){
var args = cljs.core.seq(arglist__102594);
return G__102592__delegate(args);
});
G__102592.cljs$core$IFn$_invoke$arity$variadic = G__102592__delegate;
return G__102592;
})()
;

return null;
});
