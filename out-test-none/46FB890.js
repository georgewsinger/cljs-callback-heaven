goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40050__i = 0, G__40050__a = new Array(arguments.length -  0);
while (G__40050__i < G__40050__a.length) {G__40050__a[G__40050__i] = arguments[G__40050__i + 0]; ++G__40050__i;}
  args = new cljs.core.IndexedSeq(G__40050__a,0);
} 
return G__40049__delegate.call(this,args);};
G__40049.cljs$lang$maxFixedArity = 0;
G__40049.cljs$lang$applyTo = (function (arglist__40051){
var args = cljs.core.seq(arglist__40051);
return G__40049__delegate(args);
});
G__40049.cljs$core$IFn$_invoke$arity$variadic = G__40049__delegate;
return G__40049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40053__i = 0, G__40053__a = new Array(arguments.length -  0);
while (G__40053__i < G__40053__a.length) {G__40053__a[G__40053__i] = arguments[G__40053__i + 0]; ++G__40053__i;}
  args = new cljs.core.IndexedSeq(G__40053__a,0);
} 
return G__40052__delegate.call(this,args);};
G__40052.cljs$lang$maxFixedArity = 0;
G__40052.cljs$lang$applyTo = (function (arglist__40054){
var args = cljs.core.seq(arglist__40054);
return G__40052__delegate(args);
});
G__40052.cljs$core$IFn$_invoke$arity$variadic = G__40052__delegate;
return G__40052;
})()
;

return null;
});
