goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16882__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16883__i = 0, G__16883__a = new Array(arguments.length -  0);
while (G__16883__i < G__16883__a.length) {G__16883__a[G__16883__i] = arguments[G__16883__i + 0]; ++G__16883__i;}
  args = new cljs.core.IndexedSeq(G__16883__a,0);
} 
return G__16882__delegate.call(this,args);};
G__16882.cljs$lang$maxFixedArity = 0;
G__16882.cljs$lang$applyTo = (function (arglist__16884){
var args = cljs.core.seq(arglist__16884);
return G__16882__delegate(args);
});
G__16882.cljs$core$IFn$_invoke$arity$variadic = G__16882__delegate;
return G__16882;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16885__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16886__i = 0, G__16886__a = new Array(arguments.length -  0);
while (G__16886__i < G__16886__a.length) {G__16886__a[G__16886__i] = arguments[G__16886__i + 0]; ++G__16886__i;}
  args = new cljs.core.IndexedSeq(G__16886__a,0);
} 
return G__16885__delegate.call(this,args);};
G__16885.cljs$lang$maxFixedArity = 0;
G__16885.cljs$lang$applyTo = (function (arglist__16887){
var args = cljs.core.seq(arglist__16887);
return G__16885__delegate(args);
});
G__16885.cljs$core$IFn$_invoke$arity$variadic = G__16885__delegate;
return G__16885;
})()
;

return null;
});
