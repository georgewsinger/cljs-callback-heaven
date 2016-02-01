goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16368__i = 0, G__16368__a = new Array(arguments.length -  0);
while (G__16368__i < G__16368__a.length) {G__16368__a[G__16368__i] = arguments[G__16368__i + 0]; ++G__16368__i;}
  args = new cljs.core.IndexedSeq(G__16368__a,0);
} 
return G__16367__delegate.call(this,args);};
G__16367.cljs$lang$maxFixedArity = 0;
G__16367.cljs$lang$applyTo = (function (arglist__16369){
var args = cljs.core.seq(arglist__16369);
return G__16367__delegate(args);
});
G__16367.cljs$core$IFn$_invoke$arity$variadic = G__16367__delegate;
return G__16367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16371__i = 0, G__16371__a = new Array(arguments.length -  0);
while (G__16371__i < G__16371__a.length) {G__16371__a[G__16371__i] = arguments[G__16371__i + 0]; ++G__16371__i;}
  args = new cljs.core.IndexedSeq(G__16371__a,0);
} 
return G__16370__delegate.call(this,args);};
G__16370.cljs$lang$maxFixedArity = 0;
G__16370.cljs$lang$applyTo = (function (arglist__16372){
var args = cljs.core.seq(arglist__16372);
return G__16370__delegate(args);
});
G__16370.cljs$core$IFn$_invoke$arity$variadic = G__16370__delegate;
return G__16370;
})()
;

return null;
});
