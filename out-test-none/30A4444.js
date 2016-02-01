goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16427__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16428__i = 0, G__16428__a = new Array(arguments.length -  0);
while (G__16428__i < G__16428__a.length) {G__16428__a[G__16428__i] = arguments[G__16428__i + 0]; ++G__16428__i;}
  args = new cljs.core.IndexedSeq(G__16428__a,0);
} 
return G__16427__delegate.call(this,args);};
G__16427.cljs$lang$maxFixedArity = 0;
G__16427.cljs$lang$applyTo = (function (arglist__16429){
var args = cljs.core.seq(arglist__16429);
return G__16427__delegate(args);
});
G__16427.cljs$core$IFn$_invoke$arity$variadic = G__16427__delegate;
return G__16427;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16430__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16431__i = 0, G__16431__a = new Array(arguments.length -  0);
while (G__16431__i < G__16431__a.length) {G__16431__a[G__16431__i] = arguments[G__16431__i + 0]; ++G__16431__i;}
  args = new cljs.core.IndexedSeq(G__16431__a,0);
} 
return G__16430__delegate.call(this,args);};
G__16430.cljs$lang$maxFixedArity = 0;
G__16430.cljs$lang$applyTo = (function (arglist__16432){
var args = cljs.core.seq(arglist__16432);
return G__16430__delegate(args);
});
G__16430.cljs$core$IFn$_invoke$arity$variadic = G__16430__delegate;
return G__16430;
})()
;

return null;
});
