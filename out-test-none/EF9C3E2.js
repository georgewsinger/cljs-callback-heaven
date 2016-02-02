goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21169__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21170__i = 0, G__21170__a = new Array(arguments.length -  0);
while (G__21170__i < G__21170__a.length) {G__21170__a[G__21170__i] = arguments[G__21170__i + 0]; ++G__21170__i;}
  args = new cljs.core.IndexedSeq(G__21170__a,0);
} 
return G__21169__delegate.call(this,args);};
G__21169.cljs$lang$maxFixedArity = 0;
G__21169.cljs$lang$applyTo = (function (arglist__21171){
var args = cljs.core.seq(arglist__21171);
return G__21169__delegate(args);
});
G__21169.cljs$core$IFn$_invoke$arity$variadic = G__21169__delegate;
return G__21169;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21172__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21173__i = 0, G__21173__a = new Array(arguments.length -  0);
while (G__21173__i < G__21173__a.length) {G__21173__a[G__21173__i] = arguments[G__21173__i + 0]; ++G__21173__i;}
  args = new cljs.core.IndexedSeq(G__21173__a,0);
} 
return G__21172__delegate.call(this,args);};
G__21172.cljs$lang$maxFixedArity = 0;
G__21172.cljs$lang$applyTo = (function (arglist__21174){
var args = cljs.core.seq(arglist__21174);
return G__21172__delegate(args);
});
G__21172.cljs$core$IFn$_invoke$arity$variadic = G__21172__delegate;
return G__21172;
})()
;

return null;
});
