goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37106__i = 0, G__37106__a = new Array(arguments.length -  0);
while (G__37106__i < G__37106__a.length) {G__37106__a[G__37106__i] = arguments[G__37106__i + 0]; ++G__37106__i;}
  args = new cljs.core.IndexedSeq(G__37106__a,0);
} 
return G__37105__delegate.call(this,args);};
G__37105.cljs$lang$maxFixedArity = 0;
G__37105.cljs$lang$applyTo = (function (arglist__37107){
var args = cljs.core.seq(arglist__37107);
return G__37105__delegate(args);
});
G__37105.cljs$core$IFn$_invoke$arity$variadic = G__37105__delegate;
return G__37105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37109__i = 0, G__37109__a = new Array(arguments.length -  0);
while (G__37109__i < G__37109__a.length) {G__37109__a[G__37109__i] = arguments[G__37109__i + 0]; ++G__37109__i;}
  args = new cljs.core.IndexedSeq(G__37109__a,0);
} 
return G__37108__delegate.call(this,args);};
G__37108.cljs$lang$maxFixedArity = 0;
G__37108.cljs$lang$applyTo = (function (arglist__37110){
var args = cljs.core.seq(arglist__37110);
return G__37108__delegate(args);
});
G__37108.cljs$core$IFn$_invoke$arity$variadic = G__37108__delegate;
return G__37108;
})()
;

return null;
});
