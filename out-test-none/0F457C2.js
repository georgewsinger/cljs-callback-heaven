goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11005__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11006__i = 0, G__11006__a = new Array(arguments.length -  0);
while (G__11006__i < G__11006__a.length) {G__11006__a[G__11006__i] = arguments[G__11006__i + 0]; ++G__11006__i;}
  args = new cljs.core.IndexedSeq(G__11006__a,0);
} 
return G__11005__delegate.call(this,args);};
G__11005.cljs$lang$maxFixedArity = 0;
G__11005.cljs$lang$applyTo = (function (arglist__11007){
var args = cljs.core.seq(arglist__11007);
return G__11005__delegate(args);
});
G__11005.cljs$core$IFn$_invoke$arity$variadic = G__11005__delegate;
return G__11005;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11008__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11009__i = 0, G__11009__a = new Array(arguments.length -  0);
while (G__11009__i < G__11009__a.length) {G__11009__a[G__11009__i] = arguments[G__11009__i + 0]; ++G__11009__i;}
  args = new cljs.core.IndexedSeq(G__11009__a,0);
} 
return G__11008__delegate.call(this,args);};
G__11008.cljs$lang$maxFixedArity = 0;
G__11008.cljs$lang$applyTo = (function (arglist__11010){
var args = cljs.core.seq(arglist__11010);
return G__11008__delegate(args);
});
G__11008.cljs$core$IFn$_invoke$arity$variadic = G__11008__delegate;
return G__11008;
})()
;

return null;
});
