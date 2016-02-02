goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25570__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25571__i = 0, G__25571__a = new Array(arguments.length -  0);
while (G__25571__i < G__25571__a.length) {G__25571__a[G__25571__i] = arguments[G__25571__i + 0]; ++G__25571__i;}
  args = new cljs.core.IndexedSeq(G__25571__a,0);
} 
return G__25570__delegate.call(this,args);};
G__25570.cljs$lang$maxFixedArity = 0;
G__25570.cljs$lang$applyTo = (function (arglist__25572){
var args = cljs.core.seq(arglist__25572);
return G__25570__delegate(args);
});
G__25570.cljs$core$IFn$_invoke$arity$variadic = G__25570__delegate;
return G__25570;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25573__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25574__i = 0, G__25574__a = new Array(arguments.length -  0);
while (G__25574__i < G__25574__a.length) {G__25574__a[G__25574__i] = arguments[G__25574__i + 0]; ++G__25574__i;}
  args = new cljs.core.IndexedSeq(G__25574__a,0);
} 
return G__25573__delegate.call(this,args);};
G__25573.cljs$lang$maxFixedArity = 0;
G__25573.cljs$lang$applyTo = (function (arglist__25575){
var args = cljs.core.seq(arglist__25575);
return G__25573__delegate(args);
});
G__25573.cljs$core$IFn$_invoke$arity$variadic = G__25573__delegate;
return G__25573;
})()
;

return null;
});
