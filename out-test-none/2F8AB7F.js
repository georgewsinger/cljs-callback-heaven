goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20635__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20636__i = 0, G__20636__a = new Array(arguments.length -  0);
while (G__20636__i < G__20636__a.length) {G__20636__a[G__20636__i] = arguments[G__20636__i + 0]; ++G__20636__i;}
  args = new cljs.core.IndexedSeq(G__20636__a,0);
} 
return G__20635__delegate.call(this,args);};
G__20635.cljs$lang$maxFixedArity = 0;
G__20635.cljs$lang$applyTo = (function (arglist__20637){
var args = cljs.core.seq(arglist__20637);
return G__20635__delegate(args);
});
G__20635.cljs$core$IFn$_invoke$arity$variadic = G__20635__delegate;
return G__20635;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20638__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20639__i = 0, G__20639__a = new Array(arguments.length -  0);
while (G__20639__i < G__20639__a.length) {G__20639__a[G__20639__i] = arguments[G__20639__i + 0]; ++G__20639__i;}
  args = new cljs.core.IndexedSeq(G__20639__a,0);
} 
return G__20638__delegate.call(this,args);};
G__20638.cljs$lang$maxFixedArity = 0;
G__20638.cljs$lang$applyTo = (function (arglist__20640){
var args = cljs.core.seq(arglist__20640);
return G__20638__delegate(args);
});
G__20638.cljs$core$IFn$_invoke$arity$variadic = G__20638__delegate;
return G__20638;
})()
;

return null;
});
