goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24254__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24255__i = 0, G__24255__a = new Array(arguments.length -  0);
while (G__24255__i < G__24255__a.length) {G__24255__a[G__24255__i] = arguments[G__24255__i + 0]; ++G__24255__i;}
  args = new cljs.core.IndexedSeq(G__24255__a,0);
} 
return G__24254__delegate.call(this,args);};
G__24254.cljs$lang$maxFixedArity = 0;
G__24254.cljs$lang$applyTo = (function (arglist__24256){
var args = cljs.core.seq(arglist__24256);
return G__24254__delegate(args);
});
G__24254.cljs$core$IFn$_invoke$arity$variadic = G__24254__delegate;
return G__24254;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24257__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24258__i = 0, G__24258__a = new Array(arguments.length -  0);
while (G__24258__i < G__24258__a.length) {G__24258__a[G__24258__i] = arguments[G__24258__i + 0]; ++G__24258__i;}
  args = new cljs.core.IndexedSeq(G__24258__a,0);
} 
return G__24257__delegate.call(this,args);};
G__24257.cljs$lang$maxFixedArity = 0;
G__24257.cljs$lang$applyTo = (function (arglist__24259){
var args = cljs.core.seq(arglist__24259);
return G__24257__delegate(args);
});
G__24257.cljs$core$IFn$_invoke$arity$variadic = G__24257__delegate;
return G__24257;
})()
;

return null;
});
