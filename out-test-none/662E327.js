goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__215852__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__215852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__215853__i = 0, G__215853__a = new Array(arguments.length -  0);
while (G__215853__i < G__215853__a.length) {G__215853__a[G__215853__i] = arguments[G__215853__i + 0]; ++G__215853__i;}
  args = new cljs.core.IndexedSeq(G__215853__a,0);
} 
return G__215852__delegate.call(this,args);};
G__215852.cljs$lang$maxFixedArity = 0;
G__215852.cljs$lang$applyTo = (function (arglist__215854){
var args = cljs.core.seq(arglist__215854);
return G__215852__delegate(args);
});
G__215852.cljs$core$IFn$_invoke$arity$variadic = G__215852__delegate;
return G__215852;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__215855__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__215855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__215856__i = 0, G__215856__a = new Array(arguments.length -  0);
while (G__215856__i < G__215856__a.length) {G__215856__a[G__215856__i] = arguments[G__215856__i + 0]; ++G__215856__i;}
  args = new cljs.core.IndexedSeq(G__215856__a,0);
} 
return G__215855__delegate.call(this,args);};
G__215855.cljs$lang$maxFixedArity = 0;
G__215855.cljs$lang$applyTo = (function (arglist__215857){
var args = cljs.core.seq(arglist__215857);
return G__215855__delegate(args);
});
G__215855.cljs$core$IFn$_invoke$arity$variadic = G__215855__delegate;
return G__215855;
})()
;

return null;
});
