goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10606__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10607__i = 0, G__10607__a = new Array(arguments.length -  0);
while (G__10607__i < G__10607__a.length) {G__10607__a[G__10607__i] = arguments[G__10607__i + 0]; ++G__10607__i;}
  args = new cljs.core.IndexedSeq(G__10607__a,0);
} 
return G__10606__delegate.call(this,args);};
G__10606.cljs$lang$maxFixedArity = 0;
G__10606.cljs$lang$applyTo = (function (arglist__10608){
var args = cljs.core.seq(arglist__10608);
return G__10606__delegate(args);
});
G__10606.cljs$core$IFn$_invoke$arity$variadic = G__10606__delegate;
return G__10606;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10609__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10610__i = 0, G__10610__a = new Array(arguments.length -  0);
while (G__10610__i < G__10610__a.length) {G__10610__a[G__10610__i] = arguments[G__10610__i + 0]; ++G__10610__i;}
  args = new cljs.core.IndexedSeq(G__10610__a,0);
} 
return G__10609__delegate.call(this,args);};
G__10609.cljs$lang$maxFixedArity = 0;
G__10609.cljs$lang$applyTo = (function (arglist__10611){
var args = cljs.core.seq(arglist__10611);
return G__10609__delegate(args);
});
G__10609.cljs$core$IFn$_invoke$arity$variadic = G__10609__delegate;
return G__10609;
})()
;

return null;
});
