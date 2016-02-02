goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13078__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13079__i = 0, G__13079__a = new Array(arguments.length -  0);
while (G__13079__i < G__13079__a.length) {G__13079__a[G__13079__i] = arguments[G__13079__i + 0]; ++G__13079__i;}
  args = new cljs.core.IndexedSeq(G__13079__a,0);
} 
return G__13078__delegate.call(this,args);};
G__13078.cljs$lang$maxFixedArity = 0;
G__13078.cljs$lang$applyTo = (function (arglist__13080){
var args = cljs.core.seq(arglist__13080);
return G__13078__delegate(args);
});
G__13078.cljs$core$IFn$_invoke$arity$variadic = G__13078__delegate;
return G__13078;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13081__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13082__i = 0, G__13082__a = new Array(arguments.length -  0);
while (G__13082__i < G__13082__a.length) {G__13082__a[G__13082__i] = arguments[G__13082__i + 0]; ++G__13082__i;}
  args = new cljs.core.IndexedSeq(G__13082__a,0);
} 
return G__13081__delegate.call(this,args);};
G__13081.cljs$lang$maxFixedArity = 0;
G__13081.cljs$lang$applyTo = (function (arglist__13083){
var args = cljs.core.seq(arglist__13083);
return G__13081__delegate(args);
});
G__13081.cljs$core$IFn$_invoke$arity$variadic = G__13081__delegate;
return G__13081;
})()
;

return null;
});
