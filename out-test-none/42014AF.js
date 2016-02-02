goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150941__i = 0, G__150941__a = new Array(arguments.length -  0);
while (G__150941__i < G__150941__a.length) {G__150941__a[G__150941__i] = arguments[G__150941__i + 0]; ++G__150941__i;}
  args = new cljs.core.IndexedSeq(G__150941__a,0);
} 
return G__150940__delegate.call(this,args);};
G__150940.cljs$lang$maxFixedArity = 0;
G__150940.cljs$lang$applyTo = (function (arglist__150942){
var args = cljs.core.seq(arglist__150942);
return G__150940__delegate(args);
});
G__150940.cljs$core$IFn$_invoke$arity$variadic = G__150940__delegate;
return G__150940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150944__i = 0, G__150944__a = new Array(arguments.length -  0);
while (G__150944__i < G__150944__a.length) {G__150944__a[G__150944__i] = arguments[G__150944__i + 0]; ++G__150944__i;}
  args = new cljs.core.IndexedSeq(G__150944__a,0);
} 
return G__150943__delegate.call(this,args);};
G__150943.cljs$lang$maxFixedArity = 0;
G__150943.cljs$lang$applyTo = (function (arglist__150945){
var args = cljs.core.seq(arglist__150945);
return G__150943__delegate(args);
});
G__150943.cljs$core$IFn$_invoke$arity$variadic = G__150943__delegate;
return G__150943;
})()
;

return null;
});
