goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8629__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8630__i = 0, G__8630__a = new Array(arguments.length -  0);
while (G__8630__i < G__8630__a.length) {G__8630__a[G__8630__i] = arguments[G__8630__i + 0]; ++G__8630__i;}
  args = new cljs.core.IndexedSeq(G__8630__a,0);
} 
return G__8629__delegate.call(this,args);};
G__8629.cljs$lang$maxFixedArity = 0;
G__8629.cljs$lang$applyTo = (function (arglist__8631){
var args = cljs.core.seq(arglist__8631);
return G__8629__delegate(args);
});
G__8629.cljs$core$IFn$_invoke$arity$variadic = G__8629__delegate;
return G__8629;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8632__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8633__i = 0, G__8633__a = new Array(arguments.length -  0);
while (G__8633__i < G__8633__a.length) {G__8633__a[G__8633__i] = arguments[G__8633__i + 0]; ++G__8633__i;}
  args = new cljs.core.IndexedSeq(G__8633__a,0);
} 
return G__8632__delegate.call(this,args);};
G__8632.cljs$lang$maxFixedArity = 0;
G__8632.cljs$lang$applyTo = (function (arglist__8634){
var args = cljs.core.seq(arglist__8634);
return G__8632__delegate(args);
});
G__8632.cljs$core$IFn$_invoke$arity$variadic = G__8632__delegate;
return G__8632;
})()
;

return null;
});
