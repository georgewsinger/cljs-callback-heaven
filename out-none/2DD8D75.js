goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29990__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29991__i = 0, G__29991__a = new Array(arguments.length -  0);
while (G__29991__i < G__29991__a.length) {G__29991__a[G__29991__i] = arguments[G__29991__i + 0]; ++G__29991__i;}
  args = new cljs.core.IndexedSeq(G__29991__a,0);
} 
return G__29990__delegate.call(this,args);};
G__29990.cljs$lang$maxFixedArity = 0;
G__29990.cljs$lang$applyTo = (function (arglist__29992){
var args = cljs.core.seq(arglist__29992);
return G__29990__delegate(args);
});
G__29990.cljs$core$IFn$_invoke$arity$variadic = G__29990__delegate;
return G__29990;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29993__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29994__i = 0, G__29994__a = new Array(arguments.length -  0);
while (G__29994__i < G__29994__a.length) {G__29994__a[G__29994__i] = arguments[G__29994__i + 0]; ++G__29994__i;}
  args = new cljs.core.IndexedSeq(G__29994__a,0);
} 
return G__29993__delegate.call(this,args);};
G__29993.cljs$lang$maxFixedArity = 0;
G__29993.cljs$lang$applyTo = (function (arglist__29995){
var args = cljs.core.seq(arglist__29995);
return G__29993__delegate(args);
});
G__29993.cljs$core$IFn$_invoke$arity$variadic = G__29993__delegate;
return G__29993;
})()
;

return null;
});
