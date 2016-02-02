goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12444__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12445__i = 0, G__12445__a = new Array(arguments.length -  0);
while (G__12445__i < G__12445__a.length) {G__12445__a[G__12445__i] = arguments[G__12445__i + 0]; ++G__12445__i;}
  args = new cljs.core.IndexedSeq(G__12445__a,0);
} 
return G__12444__delegate.call(this,args);};
G__12444.cljs$lang$maxFixedArity = 0;
G__12444.cljs$lang$applyTo = (function (arglist__12446){
var args = cljs.core.seq(arglist__12446);
return G__12444__delegate(args);
});
G__12444.cljs$core$IFn$_invoke$arity$variadic = G__12444__delegate;
return G__12444;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12447__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12448__i = 0, G__12448__a = new Array(arguments.length -  0);
while (G__12448__i < G__12448__a.length) {G__12448__a[G__12448__i] = arguments[G__12448__i + 0]; ++G__12448__i;}
  args = new cljs.core.IndexedSeq(G__12448__a,0);
} 
return G__12447__delegate.call(this,args);};
G__12447.cljs$lang$maxFixedArity = 0;
G__12447.cljs$lang$applyTo = (function (arglist__12449){
var args = cljs.core.seq(arglist__12449);
return G__12447__delegate(args);
});
G__12447.cljs$core$IFn$_invoke$arity$variadic = G__12447__delegate;
return G__12447;
})()
;

return null;
});
