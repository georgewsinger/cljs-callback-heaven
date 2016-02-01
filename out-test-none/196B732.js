goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16026__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16027__i = 0, G__16027__a = new Array(arguments.length -  0);
while (G__16027__i < G__16027__a.length) {G__16027__a[G__16027__i] = arguments[G__16027__i + 0]; ++G__16027__i;}
  args = new cljs.core.IndexedSeq(G__16027__a,0);
} 
return G__16026__delegate.call(this,args);};
G__16026.cljs$lang$maxFixedArity = 0;
G__16026.cljs$lang$applyTo = (function (arglist__16028){
var args = cljs.core.seq(arglist__16028);
return G__16026__delegate(args);
});
G__16026.cljs$core$IFn$_invoke$arity$variadic = G__16026__delegate;
return G__16026;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16029__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16030__i = 0, G__16030__a = new Array(arguments.length -  0);
while (G__16030__i < G__16030__a.length) {G__16030__a[G__16030__i] = arguments[G__16030__i + 0]; ++G__16030__i;}
  args = new cljs.core.IndexedSeq(G__16030__a,0);
} 
return G__16029__delegate.call(this,args);};
G__16029.cljs$lang$maxFixedArity = 0;
G__16029.cljs$lang$applyTo = (function (arglist__16031){
var args = cljs.core.seq(arglist__16031);
return G__16029__delegate(args);
});
G__16029.cljs$core$IFn$_invoke$arity$variadic = G__16029__delegate;
return G__16029;
})()
;

return null;
});
