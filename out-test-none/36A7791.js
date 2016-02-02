goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44275__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44276__i = 0, G__44276__a = new Array(arguments.length -  0);
while (G__44276__i < G__44276__a.length) {G__44276__a[G__44276__i] = arguments[G__44276__i + 0]; ++G__44276__i;}
  args = new cljs.core.IndexedSeq(G__44276__a,0);
} 
return G__44275__delegate.call(this,args);};
G__44275.cljs$lang$maxFixedArity = 0;
G__44275.cljs$lang$applyTo = (function (arglist__44277){
var args = cljs.core.seq(arglist__44277);
return G__44275__delegate(args);
});
G__44275.cljs$core$IFn$_invoke$arity$variadic = G__44275__delegate;
return G__44275;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44278__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44279__i = 0, G__44279__a = new Array(arguments.length -  0);
while (G__44279__i < G__44279__a.length) {G__44279__a[G__44279__i] = arguments[G__44279__i + 0]; ++G__44279__i;}
  args = new cljs.core.IndexedSeq(G__44279__a,0);
} 
return G__44278__delegate.call(this,args);};
G__44278.cljs$lang$maxFixedArity = 0;
G__44278.cljs$lang$applyTo = (function (arglist__44280){
var args = cljs.core.seq(arglist__44280);
return G__44278__delegate(args);
});
G__44278.cljs$core$IFn$_invoke$arity$variadic = G__44278__delegate;
return G__44278;
})()
;

return null;
});
