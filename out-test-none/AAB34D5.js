goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32374__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32375__i = 0, G__32375__a = new Array(arguments.length -  0);
while (G__32375__i < G__32375__a.length) {G__32375__a[G__32375__i] = arguments[G__32375__i + 0]; ++G__32375__i;}
  args = new cljs.core.IndexedSeq(G__32375__a,0);
} 
return G__32374__delegate.call(this,args);};
G__32374.cljs$lang$maxFixedArity = 0;
G__32374.cljs$lang$applyTo = (function (arglist__32376){
var args = cljs.core.seq(arglist__32376);
return G__32374__delegate(args);
});
G__32374.cljs$core$IFn$_invoke$arity$variadic = G__32374__delegate;
return G__32374;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32377__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32378__i = 0, G__32378__a = new Array(arguments.length -  0);
while (G__32378__i < G__32378__a.length) {G__32378__a[G__32378__i] = arguments[G__32378__i + 0]; ++G__32378__i;}
  args = new cljs.core.IndexedSeq(G__32378__a,0);
} 
return G__32377__delegate.call(this,args);};
G__32377.cljs$lang$maxFixedArity = 0;
G__32377.cljs$lang$applyTo = (function (arglist__32379){
var args = cljs.core.seq(arglist__32379);
return G__32377__delegate(args);
});
G__32377.cljs$core$IFn$_invoke$arity$variadic = G__32377__delegate;
return G__32377;
})()
;

return null;
});
