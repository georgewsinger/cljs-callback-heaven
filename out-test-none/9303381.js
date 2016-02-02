goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__176374__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__176374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176375__i = 0, G__176375__a = new Array(arguments.length -  0);
while (G__176375__i < G__176375__a.length) {G__176375__a[G__176375__i] = arguments[G__176375__i + 0]; ++G__176375__i;}
  args = new cljs.core.IndexedSeq(G__176375__a,0);
} 
return G__176374__delegate.call(this,args);};
G__176374.cljs$lang$maxFixedArity = 0;
G__176374.cljs$lang$applyTo = (function (arglist__176376){
var args = cljs.core.seq(arglist__176376);
return G__176374__delegate(args);
});
G__176374.cljs$core$IFn$_invoke$arity$variadic = G__176374__delegate;
return G__176374;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__176377__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__176377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176378__i = 0, G__176378__a = new Array(arguments.length -  0);
while (G__176378__i < G__176378__a.length) {G__176378__a[G__176378__i] = arguments[G__176378__i + 0]; ++G__176378__i;}
  args = new cljs.core.IndexedSeq(G__176378__a,0);
} 
return G__176377__delegate.call(this,args);};
G__176377.cljs$lang$maxFixedArity = 0;
G__176377.cljs$lang$applyTo = (function (arglist__176379){
var args = cljs.core.seq(arglist__176379);
return G__176377__delegate(args);
});
G__176377.cljs$core$IFn$_invoke$arity$variadic = G__176377__delegate;
return G__176377;
})()
;

return null;
});
