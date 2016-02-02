goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21093__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21094__i = 0, G__21094__a = new Array(arguments.length -  0);
while (G__21094__i < G__21094__a.length) {G__21094__a[G__21094__i] = arguments[G__21094__i + 0]; ++G__21094__i;}
  args = new cljs.core.IndexedSeq(G__21094__a,0);
} 
return G__21093__delegate.call(this,args);};
G__21093.cljs$lang$maxFixedArity = 0;
G__21093.cljs$lang$applyTo = (function (arglist__21095){
var args = cljs.core.seq(arglist__21095);
return G__21093__delegate(args);
});
G__21093.cljs$core$IFn$_invoke$arity$variadic = G__21093__delegate;
return G__21093;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21096__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21097__i = 0, G__21097__a = new Array(arguments.length -  0);
while (G__21097__i < G__21097__a.length) {G__21097__a[G__21097__i] = arguments[G__21097__i + 0]; ++G__21097__i;}
  args = new cljs.core.IndexedSeq(G__21097__a,0);
} 
return G__21096__delegate.call(this,args);};
G__21096.cljs$lang$maxFixedArity = 0;
G__21096.cljs$lang$applyTo = (function (arglist__21098){
var args = cljs.core.seq(arglist__21098);
return G__21096__delegate(args);
});
G__21096.cljs$core$IFn$_invoke$arity$variadic = G__21096__delegate;
return G__21096;
})()
;

return null;
});
