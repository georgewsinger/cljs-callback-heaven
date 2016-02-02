goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11461__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11462__i = 0, G__11462__a = new Array(arguments.length -  0);
while (G__11462__i < G__11462__a.length) {G__11462__a[G__11462__i] = arguments[G__11462__i + 0]; ++G__11462__i;}
  args = new cljs.core.IndexedSeq(G__11462__a,0);
} 
return G__11461__delegate.call(this,args);};
G__11461.cljs$lang$maxFixedArity = 0;
G__11461.cljs$lang$applyTo = (function (arglist__11463){
var args = cljs.core.seq(arglist__11463);
return G__11461__delegate(args);
});
G__11461.cljs$core$IFn$_invoke$arity$variadic = G__11461__delegate;
return G__11461;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11464__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11465__i = 0, G__11465__a = new Array(arguments.length -  0);
while (G__11465__i < G__11465__a.length) {G__11465__a[G__11465__i] = arguments[G__11465__i + 0]; ++G__11465__i;}
  args = new cljs.core.IndexedSeq(G__11465__a,0);
} 
return G__11464__delegate.call(this,args);};
G__11464.cljs$lang$maxFixedArity = 0;
G__11464.cljs$lang$applyTo = (function (arglist__11466){
var args = cljs.core.seq(arglist__11466);
return G__11464__delegate(args);
});
G__11464.cljs$core$IFn$_invoke$arity$variadic = G__11464__delegate;
return G__11464;
})()
;

return null;
});
