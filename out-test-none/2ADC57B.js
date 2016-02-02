goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25102__i = 0, G__25102__a = new Array(arguments.length -  0);
while (G__25102__i < G__25102__a.length) {G__25102__a[G__25102__i] = arguments[G__25102__i + 0]; ++G__25102__i;}
  args = new cljs.core.IndexedSeq(G__25102__a,0);
} 
return G__25101__delegate.call(this,args);};
G__25101.cljs$lang$maxFixedArity = 0;
G__25101.cljs$lang$applyTo = (function (arglist__25103){
var args = cljs.core.seq(arglist__25103);
return G__25101__delegate(args);
});
G__25101.cljs$core$IFn$_invoke$arity$variadic = G__25101__delegate;
return G__25101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25105__i = 0, G__25105__a = new Array(arguments.length -  0);
while (G__25105__i < G__25105__a.length) {G__25105__a[G__25105__i] = arguments[G__25105__i + 0]; ++G__25105__i;}
  args = new cljs.core.IndexedSeq(G__25105__a,0);
} 
return G__25104__delegate.call(this,args);};
G__25104.cljs$lang$maxFixedArity = 0;
G__25104.cljs$lang$applyTo = (function (arglist__25106){
var args = cljs.core.seq(arglist__25106);
return G__25104__delegate(args);
});
G__25104.cljs$core$IFn$_invoke$arity$variadic = G__25104__delegate;
return G__25104;
})()
;

return null;
});
