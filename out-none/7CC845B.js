goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10027__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10028__i = 0, G__10028__a = new Array(arguments.length -  0);
while (G__10028__i < G__10028__a.length) {G__10028__a[G__10028__i] = arguments[G__10028__i + 0]; ++G__10028__i;}
  args = new cljs.core.IndexedSeq(G__10028__a,0);
} 
return G__10027__delegate.call(this,args);};
G__10027.cljs$lang$maxFixedArity = 0;
G__10027.cljs$lang$applyTo = (function (arglist__10029){
var args = cljs.core.seq(arglist__10029);
return G__10027__delegate(args);
});
G__10027.cljs$core$IFn$_invoke$arity$variadic = G__10027__delegate;
return G__10027;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10030__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10031__i = 0, G__10031__a = new Array(arguments.length -  0);
while (G__10031__i < G__10031__a.length) {G__10031__a[G__10031__i] = arguments[G__10031__i + 0]; ++G__10031__i;}
  args = new cljs.core.IndexedSeq(G__10031__a,0);
} 
return G__10030__delegate.call(this,args);};
G__10030.cljs$lang$maxFixedArity = 0;
G__10030.cljs$lang$applyTo = (function (arglist__10032){
var args = cljs.core.seq(arglist__10032);
return G__10030__delegate(args);
});
G__10030.cljs$core$IFn$_invoke$arity$variadic = G__10030__delegate;
return G__10030;
})()
;

return null;
});
