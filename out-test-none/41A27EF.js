goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16038__i = 0, G__16038__a = new Array(arguments.length -  0);
while (G__16038__i < G__16038__a.length) {G__16038__a[G__16038__i] = arguments[G__16038__i + 0]; ++G__16038__i;}
  args = new cljs.core.IndexedSeq(G__16038__a,0);
} 
return G__16037__delegate.call(this,args);};
G__16037.cljs$lang$maxFixedArity = 0;
G__16037.cljs$lang$applyTo = (function (arglist__16039){
var args = cljs.core.seq(arglist__16039);
return G__16037__delegate(args);
});
G__16037.cljs$core$IFn$_invoke$arity$variadic = G__16037__delegate;
return G__16037;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16041__i = 0, G__16041__a = new Array(arguments.length -  0);
while (G__16041__i < G__16041__a.length) {G__16041__a[G__16041__i] = arguments[G__16041__i + 0]; ++G__16041__i;}
  args = new cljs.core.IndexedSeq(G__16041__a,0);
} 
return G__16040__delegate.call(this,args);};
G__16040.cljs$lang$maxFixedArity = 0;
G__16040.cljs$lang$applyTo = (function (arglist__16042){
var args = cljs.core.seq(arglist__16042);
return G__16040__delegate(args);
});
G__16040.cljs$core$IFn$_invoke$arity$variadic = G__16040__delegate;
return G__16040;
})()
;

return null;
});
