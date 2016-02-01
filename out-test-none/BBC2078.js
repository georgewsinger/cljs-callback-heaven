goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16326__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16327__i = 0, G__16327__a = new Array(arguments.length -  0);
while (G__16327__i < G__16327__a.length) {G__16327__a[G__16327__i] = arguments[G__16327__i + 0]; ++G__16327__i;}
  args = new cljs.core.IndexedSeq(G__16327__a,0);
} 
return G__16326__delegate.call(this,args);};
G__16326.cljs$lang$maxFixedArity = 0;
G__16326.cljs$lang$applyTo = (function (arglist__16328){
var args = cljs.core.seq(arglist__16328);
return G__16326__delegate(args);
});
G__16326.cljs$core$IFn$_invoke$arity$variadic = G__16326__delegate;
return G__16326;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16329__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16330__i = 0, G__16330__a = new Array(arguments.length -  0);
while (G__16330__i < G__16330__a.length) {G__16330__a[G__16330__i] = arguments[G__16330__i + 0]; ++G__16330__i;}
  args = new cljs.core.IndexedSeq(G__16330__a,0);
} 
return G__16329__delegate.call(this,args);};
G__16329.cljs$lang$maxFixedArity = 0;
G__16329.cljs$lang$applyTo = (function (arglist__16331){
var args = cljs.core.seq(arglist__16331);
return G__16329__delegate(args);
});
G__16329.cljs$core$IFn$_invoke$arity$variadic = G__16329__delegate;
return G__16329;
})()
;

return null;
});
