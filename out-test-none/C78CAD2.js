goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32376__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32377__i = 0, G__32377__a = new Array(arguments.length -  0);
while (G__32377__i < G__32377__a.length) {G__32377__a[G__32377__i] = arguments[G__32377__i + 0]; ++G__32377__i;}
  args = new cljs.core.IndexedSeq(G__32377__a,0);
} 
return G__32376__delegate.call(this,args);};
G__32376.cljs$lang$maxFixedArity = 0;
G__32376.cljs$lang$applyTo = (function (arglist__32378){
var args = cljs.core.seq(arglist__32378);
return G__32376__delegate(args);
});
G__32376.cljs$core$IFn$_invoke$arity$variadic = G__32376__delegate;
return G__32376;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32379__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32380__i = 0, G__32380__a = new Array(arguments.length -  0);
while (G__32380__i < G__32380__a.length) {G__32380__a[G__32380__i] = arguments[G__32380__i + 0]; ++G__32380__i;}
  args = new cljs.core.IndexedSeq(G__32380__a,0);
} 
return G__32379__delegate.call(this,args);};
G__32379.cljs$lang$maxFixedArity = 0;
G__32379.cljs$lang$applyTo = (function (arglist__32381){
var args = cljs.core.seq(arglist__32381);
return G__32379__delegate(args);
});
G__32379.cljs$core$IFn$_invoke$arity$variadic = G__32379__delegate;
return G__32379;
})()
;

return null;
});
