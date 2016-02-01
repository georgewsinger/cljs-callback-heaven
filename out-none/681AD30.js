goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10723__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10724__i = 0, G__10724__a = new Array(arguments.length -  0);
while (G__10724__i < G__10724__a.length) {G__10724__a[G__10724__i] = arguments[G__10724__i + 0]; ++G__10724__i;}
  args = new cljs.core.IndexedSeq(G__10724__a,0);
} 
return G__10723__delegate.call(this,args);};
G__10723.cljs$lang$maxFixedArity = 0;
G__10723.cljs$lang$applyTo = (function (arglist__10725){
var args = cljs.core.seq(arglist__10725);
return G__10723__delegate(args);
});
G__10723.cljs$core$IFn$_invoke$arity$variadic = G__10723__delegate;
return G__10723;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10726__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10727__i = 0, G__10727__a = new Array(arguments.length -  0);
while (G__10727__i < G__10727__a.length) {G__10727__a[G__10727__i] = arguments[G__10727__i + 0]; ++G__10727__i;}
  args = new cljs.core.IndexedSeq(G__10727__a,0);
} 
return G__10726__delegate.call(this,args);};
G__10726.cljs$lang$maxFixedArity = 0;
G__10726.cljs$lang$applyTo = (function (arglist__10728){
var args = cljs.core.seq(arglist__10728);
return G__10726__delegate(args);
});
G__10726.cljs$core$IFn$_invoke$arity$variadic = G__10726__delegate;
return G__10726;
})()
;

return null;
});
