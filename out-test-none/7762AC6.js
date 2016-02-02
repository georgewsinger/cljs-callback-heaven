goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20177__i = 0, G__20177__a = new Array(arguments.length -  0);
while (G__20177__i < G__20177__a.length) {G__20177__a[G__20177__i] = arguments[G__20177__i + 0]; ++G__20177__i;}
  args = new cljs.core.IndexedSeq(G__20177__a,0);
} 
return G__20176__delegate.call(this,args);};
G__20176.cljs$lang$maxFixedArity = 0;
G__20176.cljs$lang$applyTo = (function (arglist__20178){
var args = cljs.core.seq(arglist__20178);
return G__20176__delegate(args);
});
G__20176.cljs$core$IFn$_invoke$arity$variadic = G__20176__delegate;
return G__20176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20180__i = 0, G__20180__a = new Array(arguments.length -  0);
while (G__20180__i < G__20180__a.length) {G__20180__a[G__20180__i] = arguments[G__20180__i + 0]; ++G__20180__i;}
  args = new cljs.core.IndexedSeq(G__20180__a,0);
} 
return G__20179__delegate.call(this,args);};
G__20179.cljs$lang$maxFixedArity = 0;
G__20179.cljs$lang$applyTo = (function (arglist__20181){
var args = cljs.core.seq(arglist__20181);
return G__20179__delegate(args);
});
G__20179.cljs$core$IFn$_invoke$arity$variadic = G__20179__delegate;
return G__20179;
})()
;

return null;
});
