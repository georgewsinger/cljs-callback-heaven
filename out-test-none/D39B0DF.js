goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15005__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15006__i = 0, G__15006__a = new Array(arguments.length -  0);
while (G__15006__i < G__15006__a.length) {G__15006__a[G__15006__i] = arguments[G__15006__i + 0]; ++G__15006__i;}
  args = new cljs.core.IndexedSeq(G__15006__a,0);
} 
return G__15005__delegate.call(this,args);};
G__15005.cljs$lang$maxFixedArity = 0;
G__15005.cljs$lang$applyTo = (function (arglist__15007){
var args = cljs.core.seq(arglist__15007);
return G__15005__delegate(args);
});
G__15005.cljs$core$IFn$_invoke$arity$variadic = G__15005__delegate;
return G__15005;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15008__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15009__i = 0, G__15009__a = new Array(arguments.length -  0);
while (G__15009__i < G__15009__a.length) {G__15009__a[G__15009__i] = arguments[G__15009__i + 0]; ++G__15009__i;}
  args = new cljs.core.IndexedSeq(G__15009__a,0);
} 
return G__15008__delegate.call(this,args);};
G__15008.cljs$lang$maxFixedArity = 0;
G__15008.cljs$lang$applyTo = (function (arglist__15010){
var args = cljs.core.seq(arglist__15010);
return G__15008__delegate(args);
});
G__15008.cljs$core$IFn$_invoke$arity$variadic = G__15008__delegate;
return G__15008;
})()
;

return null;
});
