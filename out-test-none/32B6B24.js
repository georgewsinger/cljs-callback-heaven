goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10456__i = 0, G__10456__a = new Array(arguments.length -  0);
while (G__10456__i < G__10456__a.length) {G__10456__a[G__10456__i] = arguments[G__10456__i + 0]; ++G__10456__i;}
  args = new cljs.core.IndexedSeq(G__10456__a,0);
} 
return G__10455__delegate.call(this,args);};
G__10455.cljs$lang$maxFixedArity = 0;
G__10455.cljs$lang$applyTo = (function (arglist__10457){
var args = cljs.core.seq(arglist__10457);
return G__10455__delegate(args);
});
G__10455.cljs$core$IFn$_invoke$arity$variadic = G__10455__delegate;
return G__10455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10459__i = 0, G__10459__a = new Array(arguments.length -  0);
while (G__10459__i < G__10459__a.length) {G__10459__a[G__10459__i] = arguments[G__10459__i + 0]; ++G__10459__i;}
  args = new cljs.core.IndexedSeq(G__10459__a,0);
} 
return G__10458__delegate.call(this,args);};
G__10458.cljs$lang$maxFixedArity = 0;
G__10458.cljs$lang$applyTo = (function (arglist__10460){
var args = cljs.core.seq(arglist__10460);
return G__10458__delegate(args);
});
G__10458.cljs$core$IFn$_invoke$arity$variadic = G__10458__delegate;
return G__10458;
})()
;

return null;
});
