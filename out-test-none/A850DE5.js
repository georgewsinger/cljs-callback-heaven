goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10854__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10855__i = 0, G__10855__a = new Array(arguments.length -  0);
while (G__10855__i < G__10855__a.length) {G__10855__a[G__10855__i] = arguments[G__10855__i + 0]; ++G__10855__i;}
  args = new cljs.core.IndexedSeq(G__10855__a,0);
} 
return G__10854__delegate.call(this,args);};
G__10854.cljs$lang$maxFixedArity = 0;
G__10854.cljs$lang$applyTo = (function (arglist__10856){
var args = cljs.core.seq(arglist__10856);
return G__10854__delegate(args);
});
G__10854.cljs$core$IFn$_invoke$arity$variadic = G__10854__delegate;
return G__10854;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10857__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10858__i = 0, G__10858__a = new Array(arguments.length -  0);
while (G__10858__i < G__10858__a.length) {G__10858__a[G__10858__i] = arguments[G__10858__i + 0]; ++G__10858__i;}
  args = new cljs.core.IndexedSeq(G__10858__a,0);
} 
return G__10857__delegate.call(this,args);};
G__10857.cljs$lang$maxFixedArity = 0;
G__10857.cljs$lang$applyTo = (function (arglist__10859){
var args = cljs.core.seq(arglist__10859);
return G__10857__delegate(args);
});
G__10857.cljs$core$IFn$_invoke$arity$variadic = G__10857__delegate;
return G__10857;
})()
;

return null;
});
