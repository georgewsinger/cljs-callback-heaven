goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8856__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8857__i = 0, G__8857__a = new Array(arguments.length -  0);
while (G__8857__i < G__8857__a.length) {G__8857__a[G__8857__i] = arguments[G__8857__i + 0]; ++G__8857__i;}
  args = new cljs.core.IndexedSeq(G__8857__a,0);
} 
return G__8856__delegate.call(this,args);};
G__8856.cljs$lang$maxFixedArity = 0;
G__8856.cljs$lang$applyTo = (function (arglist__8858){
var args = cljs.core.seq(arglist__8858);
return G__8856__delegate(args);
});
G__8856.cljs$core$IFn$_invoke$arity$variadic = G__8856__delegate;
return G__8856;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8859__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8860__i = 0, G__8860__a = new Array(arguments.length -  0);
while (G__8860__i < G__8860__a.length) {G__8860__a[G__8860__i] = arguments[G__8860__i + 0]; ++G__8860__i;}
  args = new cljs.core.IndexedSeq(G__8860__a,0);
} 
return G__8859__delegate.call(this,args);};
G__8859.cljs$lang$maxFixedArity = 0;
G__8859.cljs$lang$applyTo = (function (arglist__8861){
var args = cljs.core.seq(arglist__8861);
return G__8859__delegate(args);
});
G__8859.cljs$core$IFn$_invoke$arity$variadic = G__8859__delegate;
return G__8859;
})()
;

return null;
});
