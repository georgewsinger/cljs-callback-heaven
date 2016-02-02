goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80900__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80901__i = 0, G__80901__a = new Array(arguments.length -  0);
while (G__80901__i < G__80901__a.length) {G__80901__a[G__80901__i] = arguments[G__80901__i + 0]; ++G__80901__i;}
  args = new cljs.core.IndexedSeq(G__80901__a,0);
} 
return G__80900__delegate.call(this,args);};
G__80900.cljs$lang$maxFixedArity = 0;
G__80900.cljs$lang$applyTo = (function (arglist__80902){
var args = cljs.core.seq(arglist__80902);
return G__80900__delegate(args);
});
G__80900.cljs$core$IFn$_invoke$arity$variadic = G__80900__delegate;
return G__80900;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80903__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80904__i = 0, G__80904__a = new Array(arguments.length -  0);
while (G__80904__i < G__80904__a.length) {G__80904__a[G__80904__i] = arguments[G__80904__i + 0]; ++G__80904__i;}
  args = new cljs.core.IndexedSeq(G__80904__a,0);
} 
return G__80903__delegate.call(this,args);};
G__80903.cljs$lang$maxFixedArity = 0;
G__80903.cljs$lang$applyTo = (function (arglist__80905){
var args = cljs.core.seq(arglist__80905);
return G__80903__delegate(args);
});
G__80903.cljs$core$IFn$_invoke$arity$variadic = G__80903__delegate;
return G__80903;
})()
;

return null;
});
