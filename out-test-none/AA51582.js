goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20244__i = 0, G__20244__a = new Array(arguments.length -  0);
while (G__20244__i < G__20244__a.length) {G__20244__a[G__20244__i] = arguments[G__20244__i + 0]; ++G__20244__i;}
  args = new cljs.core.IndexedSeq(G__20244__a,0);
} 
return G__20243__delegate.call(this,args);};
G__20243.cljs$lang$maxFixedArity = 0;
G__20243.cljs$lang$applyTo = (function (arglist__20245){
var args = cljs.core.seq(arglist__20245);
return G__20243__delegate(args);
});
G__20243.cljs$core$IFn$_invoke$arity$variadic = G__20243__delegate;
return G__20243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20247__i = 0, G__20247__a = new Array(arguments.length -  0);
while (G__20247__i < G__20247__a.length) {G__20247__a[G__20247__i] = arguments[G__20247__i + 0]; ++G__20247__i;}
  args = new cljs.core.IndexedSeq(G__20247__a,0);
} 
return G__20246__delegate.call(this,args);};
G__20246.cljs$lang$maxFixedArity = 0;
G__20246.cljs$lang$applyTo = (function (arglist__20248){
var args = cljs.core.seq(arglist__20248);
return G__20246__delegate(args);
});
G__20246.cljs$core$IFn$_invoke$arity$variadic = G__20246__delegate;
return G__20246;
})()
;

return null;
});
