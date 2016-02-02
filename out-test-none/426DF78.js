goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10639__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10640__i = 0, G__10640__a = new Array(arguments.length -  0);
while (G__10640__i < G__10640__a.length) {G__10640__a[G__10640__i] = arguments[G__10640__i + 0]; ++G__10640__i;}
  args = new cljs.core.IndexedSeq(G__10640__a,0);
} 
return G__10639__delegate.call(this,args);};
G__10639.cljs$lang$maxFixedArity = 0;
G__10639.cljs$lang$applyTo = (function (arglist__10641){
var args = cljs.core.seq(arglist__10641);
return G__10639__delegate(args);
});
G__10639.cljs$core$IFn$_invoke$arity$variadic = G__10639__delegate;
return G__10639;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10642__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10643__i = 0, G__10643__a = new Array(arguments.length -  0);
while (G__10643__i < G__10643__a.length) {G__10643__a[G__10643__i] = arguments[G__10643__i + 0]; ++G__10643__i;}
  args = new cljs.core.IndexedSeq(G__10643__a,0);
} 
return G__10642__delegate.call(this,args);};
G__10642.cljs$lang$maxFixedArity = 0;
G__10642.cljs$lang$applyTo = (function (arglist__10644){
var args = cljs.core.seq(arglist__10644);
return G__10642__delegate(args);
});
G__10642.cljs$core$IFn$_invoke$arity$variadic = G__10642__delegate;
return G__10642;
})()
;

return null;
});
