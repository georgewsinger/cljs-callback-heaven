goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28606__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28607__i = 0, G__28607__a = new Array(arguments.length -  0);
while (G__28607__i < G__28607__a.length) {G__28607__a[G__28607__i] = arguments[G__28607__i + 0]; ++G__28607__i;}
  args = new cljs.core.IndexedSeq(G__28607__a,0);
} 
return G__28606__delegate.call(this,args);};
G__28606.cljs$lang$maxFixedArity = 0;
G__28606.cljs$lang$applyTo = (function (arglist__28608){
var args = cljs.core.seq(arglist__28608);
return G__28606__delegate(args);
});
G__28606.cljs$core$IFn$_invoke$arity$variadic = G__28606__delegate;
return G__28606;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28609__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28610__i = 0, G__28610__a = new Array(arguments.length -  0);
while (G__28610__i < G__28610__a.length) {G__28610__a[G__28610__i] = arguments[G__28610__i + 0]; ++G__28610__i;}
  args = new cljs.core.IndexedSeq(G__28610__a,0);
} 
return G__28609__delegate.call(this,args);};
G__28609.cljs$lang$maxFixedArity = 0;
G__28609.cljs$lang$applyTo = (function (arglist__28611){
var args = cljs.core.seq(arglist__28611);
return G__28609__delegate(args);
});
G__28609.cljs$core$IFn$_invoke$arity$variadic = G__28609__delegate;
return G__28609;
})()
;

return null;
});
