goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11371__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11372__i = 0, G__11372__a = new Array(arguments.length -  0);
while (G__11372__i < G__11372__a.length) {G__11372__a[G__11372__i] = arguments[G__11372__i + 0]; ++G__11372__i;}
  args = new cljs.core.IndexedSeq(G__11372__a,0);
} 
return G__11371__delegate.call(this,args);};
G__11371.cljs$lang$maxFixedArity = 0;
G__11371.cljs$lang$applyTo = (function (arglist__11373){
var args = cljs.core.seq(arglist__11373);
return G__11371__delegate(args);
});
G__11371.cljs$core$IFn$_invoke$arity$variadic = G__11371__delegate;
return G__11371;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11374__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11375__i = 0, G__11375__a = new Array(arguments.length -  0);
while (G__11375__i < G__11375__a.length) {G__11375__a[G__11375__i] = arguments[G__11375__i + 0]; ++G__11375__i;}
  args = new cljs.core.IndexedSeq(G__11375__a,0);
} 
return G__11374__delegate.call(this,args);};
G__11374.cljs$lang$maxFixedArity = 0;
G__11374.cljs$lang$applyTo = (function (arglist__11376){
var args = cljs.core.seq(arglist__11376);
return G__11374__delegate(args);
});
G__11374.cljs$core$IFn$_invoke$arity$variadic = G__11374__delegate;
return G__11374;
})()
;

return null;
});
