goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__133532__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__133532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133533__i = 0, G__133533__a = new Array(arguments.length -  0);
while (G__133533__i < G__133533__a.length) {G__133533__a[G__133533__i] = arguments[G__133533__i + 0]; ++G__133533__i;}
  args = new cljs.core.IndexedSeq(G__133533__a,0);
} 
return G__133532__delegate.call(this,args);};
G__133532.cljs$lang$maxFixedArity = 0;
G__133532.cljs$lang$applyTo = (function (arglist__133534){
var args = cljs.core.seq(arglist__133534);
return G__133532__delegate(args);
});
G__133532.cljs$core$IFn$_invoke$arity$variadic = G__133532__delegate;
return G__133532;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__133535__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__133535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133536__i = 0, G__133536__a = new Array(arguments.length -  0);
while (G__133536__i < G__133536__a.length) {G__133536__a[G__133536__i] = arguments[G__133536__i + 0]; ++G__133536__i;}
  args = new cljs.core.IndexedSeq(G__133536__a,0);
} 
return G__133535__delegate.call(this,args);};
G__133535.cljs$lang$maxFixedArity = 0;
G__133535.cljs$lang$applyTo = (function (arglist__133537){
var args = cljs.core.seq(arglist__133537);
return G__133535__delegate(args);
});
G__133535.cljs$core$IFn$_invoke$arity$variadic = G__133535__delegate;
return G__133535;
})()
;

return null;
});
