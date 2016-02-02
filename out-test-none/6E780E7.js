goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__229982__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__229982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__229983__i = 0, G__229983__a = new Array(arguments.length -  0);
while (G__229983__i < G__229983__a.length) {G__229983__a[G__229983__i] = arguments[G__229983__i + 0]; ++G__229983__i;}
  args = new cljs.core.IndexedSeq(G__229983__a,0);
} 
return G__229982__delegate.call(this,args);};
G__229982.cljs$lang$maxFixedArity = 0;
G__229982.cljs$lang$applyTo = (function (arglist__229984){
var args = cljs.core.seq(arglist__229984);
return G__229982__delegate(args);
});
G__229982.cljs$core$IFn$_invoke$arity$variadic = G__229982__delegate;
return G__229982;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__229985__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__229985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__229986__i = 0, G__229986__a = new Array(arguments.length -  0);
while (G__229986__i < G__229986__a.length) {G__229986__a[G__229986__i] = arguments[G__229986__i + 0]; ++G__229986__i;}
  args = new cljs.core.IndexedSeq(G__229986__a,0);
} 
return G__229985__delegate.call(this,args);};
G__229985.cljs$lang$maxFixedArity = 0;
G__229985.cljs$lang$applyTo = (function (arglist__229987){
var args = cljs.core.seq(arglist__229987);
return G__229985__delegate(args);
});
G__229985.cljs$core$IFn$_invoke$arity$variadic = G__229985__delegate;
return G__229985;
})()
;

return null;
});
