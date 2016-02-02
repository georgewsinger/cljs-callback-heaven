goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50580__i = 0, G__50580__a = new Array(arguments.length -  0);
while (G__50580__i < G__50580__a.length) {G__50580__a[G__50580__i] = arguments[G__50580__i + 0]; ++G__50580__i;}
  args = new cljs.core.IndexedSeq(G__50580__a,0);
} 
return G__50579__delegate.call(this,args);};
G__50579.cljs$lang$maxFixedArity = 0;
G__50579.cljs$lang$applyTo = (function (arglist__50581){
var args = cljs.core.seq(arglist__50581);
return G__50579__delegate(args);
});
G__50579.cljs$core$IFn$_invoke$arity$variadic = G__50579__delegate;
return G__50579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50583__i = 0, G__50583__a = new Array(arguments.length -  0);
while (G__50583__i < G__50583__a.length) {G__50583__a[G__50583__i] = arguments[G__50583__i + 0]; ++G__50583__i;}
  args = new cljs.core.IndexedSeq(G__50583__a,0);
} 
return G__50582__delegate.call(this,args);};
G__50582.cljs$lang$maxFixedArity = 0;
G__50582.cljs$lang$applyTo = (function (arglist__50584){
var args = cljs.core.seq(arglist__50584);
return G__50582__delegate(args);
});
G__50582.cljs$core$IFn$_invoke$arity$variadic = G__50582__delegate;
return G__50582;
})()
;

return null;
});
