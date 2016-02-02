goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48098__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48099__i = 0, G__48099__a = new Array(arguments.length -  0);
while (G__48099__i < G__48099__a.length) {G__48099__a[G__48099__i] = arguments[G__48099__i + 0]; ++G__48099__i;}
  args = new cljs.core.IndexedSeq(G__48099__a,0);
} 
return G__48098__delegate.call(this,args);};
G__48098.cljs$lang$maxFixedArity = 0;
G__48098.cljs$lang$applyTo = (function (arglist__48100){
var args = cljs.core.seq(arglist__48100);
return G__48098__delegate(args);
});
G__48098.cljs$core$IFn$_invoke$arity$variadic = G__48098__delegate;
return G__48098;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48101__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48102__i = 0, G__48102__a = new Array(arguments.length -  0);
while (G__48102__i < G__48102__a.length) {G__48102__a[G__48102__i] = arguments[G__48102__i + 0]; ++G__48102__i;}
  args = new cljs.core.IndexedSeq(G__48102__a,0);
} 
return G__48101__delegate.call(this,args);};
G__48101.cljs$lang$maxFixedArity = 0;
G__48101.cljs$lang$applyTo = (function (arglist__48103){
var args = cljs.core.seq(arglist__48103);
return G__48101__delegate(args);
});
G__48101.cljs$core$IFn$_invoke$arity$variadic = G__48101__delegate;
return G__48101;
})()
;

return null;
});
