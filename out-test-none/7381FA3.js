goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37022__i = 0, G__37022__a = new Array(arguments.length -  0);
while (G__37022__i < G__37022__a.length) {G__37022__a[G__37022__i] = arguments[G__37022__i + 0]; ++G__37022__i;}
  args = new cljs.core.IndexedSeq(G__37022__a,0);
} 
return G__37021__delegate.call(this,args);};
G__37021.cljs$lang$maxFixedArity = 0;
G__37021.cljs$lang$applyTo = (function (arglist__37023){
var args = cljs.core.seq(arglist__37023);
return G__37021__delegate(args);
});
G__37021.cljs$core$IFn$_invoke$arity$variadic = G__37021__delegate;
return G__37021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37025__i = 0, G__37025__a = new Array(arguments.length -  0);
while (G__37025__i < G__37025__a.length) {G__37025__a[G__37025__i] = arguments[G__37025__i + 0]; ++G__37025__i;}
  args = new cljs.core.IndexedSeq(G__37025__a,0);
} 
return G__37024__delegate.call(this,args);};
G__37024.cljs$lang$maxFixedArity = 0;
G__37024.cljs$lang$applyTo = (function (arglist__37026){
var args = cljs.core.seq(arglist__37026);
return G__37024__delegate(args);
});
G__37024.cljs$core$IFn$_invoke$arity$variadic = G__37024__delegate;
return G__37024;
})()
;

return null;
});
