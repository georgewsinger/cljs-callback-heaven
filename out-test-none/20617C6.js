goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17545__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17546__i = 0, G__17546__a = new Array(arguments.length -  0);
while (G__17546__i < G__17546__a.length) {G__17546__a[G__17546__i] = arguments[G__17546__i + 0]; ++G__17546__i;}
  args = new cljs.core.IndexedSeq(G__17546__a,0);
} 
return G__17545__delegate.call(this,args);};
G__17545.cljs$lang$maxFixedArity = 0;
G__17545.cljs$lang$applyTo = (function (arglist__17547){
var args = cljs.core.seq(arglist__17547);
return G__17545__delegate(args);
});
G__17545.cljs$core$IFn$_invoke$arity$variadic = G__17545__delegate;
return G__17545;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17548__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17549__i = 0, G__17549__a = new Array(arguments.length -  0);
while (G__17549__i < G__17549__a.length) {G__17549__a[G__17549__i] = arguments[G__17549__i + 0]; ++G__17549__i;}
  args = new cljs.core.IndexedSeq(G__17549__a,0);
} 
return G__17548__delegate.call(this,args);};
G__17548.cljs$lang$maxFixedArity = 0;
G__17548.cljs$lang$applyTo = (function (arglist__17550){
var args = cljs.core.seq(arglist__17550);
return G__17548__delegate(args);
});
G__17548.cljs$core$IFn$_invoke$arity$variadic = G__17548__delegate;
return G__17548;
})()
;

return null;
});
