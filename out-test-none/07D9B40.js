goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16793__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16794__i = 0, G__16794__a = new Array(arguments.length -  0);
while (G__16794__i < G__16794__a.length) {G__16794__a[G__16794__i] = arguments[G__16794__i + 0]; ++G__16794__i;}
  args = new cljs.core.IndexedSeq(G__16794__a,0);
} 
return G__16793__delegate.call(this,args);};
G__16793.cljs$lang$maxFixedArity = 0;
G__16793.cljs$lang$applyTo = (function (arglist__16795){
var args = cljs.core.seq(arglist__16795);
return G__16793__delegate(args);
});
G__16793.cljs$core$IFn$_invoke$arity$variadic = G__16793__delegate;
return G__16793;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16796__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16797__i = 0, G__16797__a = new Array(arguments.length -  0);
while (G__16797__i < G__16797__a.length) {G__16797__a[G__16797__i] = arguments[G__16797__i + 0]; ++G__16797__i;}
  args = new cljs.core.IndexedSeq(G__16797__a,0);
} 
return G__16796__delegate.call(this,args);};
G__16796.cljs$lang$maxFixedArity = 0;
G__16796.cljs$lang$applyTo = (function (arglist__16798){
var args = cljs.core.seq(arglist__16798);
return G__16796__delegate(args);
});
G__16796.cljs$core$IFn$_invoke$arity$variadic = G__16796__delegate;
return G__16796;
})()
;

return null;
});
