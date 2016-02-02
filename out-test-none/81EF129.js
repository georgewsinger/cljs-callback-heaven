goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10179__i = 0, G__10179__a = new Array(arguments.length -  0);
while (G__10179__i < G__10179__a.length) {G__10179__a[G__10179__i] = arguments[G__10179__i + 0]; ++G__10179__i;}
  args = new cljs.core.IndexedSeq(G__10179__a,0);
} 
return G__10178__delegate.call(this,args);};
G__10178.cljs$lang$maxFixedArity = 0;
G__10178.cljs$lang$applyTo = (function (arglist__10180){
var args = cljs.core.seq(arglist__10180);
return G__10178__delegate(args);
});
G__10178.cljs$core$IFn$_invoke$arity$variadic = G__10178__delegate;
return G__10178;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10182__i = 0, G__10182__a = new Array(arguments.length -  0);
while (G__10182__i < G__10182__a.length) {G__10182__a[G__10182__i] = arguments[G__10182__i + 0]; ++G__10182__i;}
  args = new cljs.core.IndexedSeq(G__10182__a,0);
} 
return G__10181__delegate.call(this,args);};
G__10181.cljs$lang$maxFixedArity = 0;
G__10181.cljs$lang$applyTo = (function (arglist__10183){
var args = cljs.core.seq(arglist__10183);
return G__10181__delegate(args);
});
G__10181.cljs$core$IFn$_invoke$arity$variadic = G__10181__delegate;
return G__10181;
})()
;

return null;
});
