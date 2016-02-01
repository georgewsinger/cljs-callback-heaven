goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15816__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15817__i = 0, G__15817__a = new Array(arguments.length -  0);
while (G__15817__i < G__15817__a.length) {G__15817__a[G__15817__i] = arguments[G__15817__i + 0]; ++G__15817__i;}
  args = new cljs.core.IndexedSeq(G__15817__a,0);
} 
return G__15816__delegate.call(this,args);};
G__15816.cljs$lang$maxFixedArity = 0;
G__15816.cljs$lang$applyTo = (function (arglist__15818){
var args = cljs.core.seq(arglist__15818);
return G__15816__delegate(args);
});
G__15816.cljs$core$IFn$_invoke$arity$variadic = G__15816__delegate;
return G__15816;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15819__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15820__i = 0, G__15820__a = new Array(arguments.length -  0);
while (G__15820__i < G__15820__a.length) {G__15820__a[G__15820__i] = arguments[G__15820__i + 0]; ++G__15820__i;}
  args = new cljs.core.IndexedSeq(G__15820__a,0);
} 
return G__15819__delegate.call(this,args);};
G__15819.cljs$lang$maxFixedArity = 0;
G__15819.cljs$lang$applyTo = (function (arglist__15821){
var args = cljs.core.seq(arglist__15821);
return G__15819__delegate(args);
});
G__15819.cljs$core$IFn$_invoke$arity$variadic = G__15819__delegate;
return G__15819;
})()
;

return null;
});
