goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15430__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15431__i = 0, G__15431__a = new Array(arguments.length -  0);
while (G__15431__i < G__15431__a.length) {G__15431__a[G__15431__i] = arguments[G__15431__i + 0]; ++G__15431__i;}
  args = new cljs.core.IndexedSeq(G__15431__a,0);
} 
return G__15430__delegate.call(this,args);};
G__15430.cljs$lang$maxFixedArity = 0;
G__15430.cljs$lang$applyTo = (function (arglist__15432){
var args = cljs.core.seq(arglist__15432);
return G__15430__delegate(args);
});
G__15430.cljs$core$IFn$_invoke$arity$variadic = G__15430__delegate;
return G__15430;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15433__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15434__i = 0, G__15434__a = new Array(arguments.length -  0);
while (G__15434__i < G__15434__a.length) {G__15434__a[G__15434__i] = arguments[G__15434__i + 0]; ++G__15434__i;}
  args = new cljs.core.IndexedSeq(G__15434__a,0);
} 
return G__15433__delegate.call(this,args);};
G__15433.cljs$lang$maxFixedArity = 0;
G__15433.cljs$lang$applyTo = (function (arglist__15435){
var args = cljs.core.seq(arglist__15435);
return G__15433__delegate(args);
});
G__15433.cljs$core$IFn$_invoke$arity$variadic = G__15433__delegate;
return G__15433;
})()
;

return null;
});
