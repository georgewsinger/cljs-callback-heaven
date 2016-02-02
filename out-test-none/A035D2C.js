goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21554__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21555__i = 0, G__21555__a = new Array(arguments.length -  0);
while (G__21555__i < G__21555__a.length) {G__21555__a[G__21555__i] = arguments[G__21555__i + 0]; ++G__21555__i;}
  args = new cljs.core.IndexedSeq(G__21555__a,0);
} 
return G__21554__delegate.call(this,args);};
G__21554.cljs$lang$maxFixedArity = 0;
G__21554.cljs$lang$applyTo = (function (arglist__21556){
var args = cljs.core.seq(arglist__21556);
return G__21554__delegate(args);
});
G__21554.cljs$core$IFn$_invoke$arity$variadic = G__21554__delegate;
return G__21554;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21557__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21558__i = 0, G__21558__a = new Array(arguments.length -  0);
while (G__21558__i < G__21558__a.length) {G__21558__a[G__21558__i] = arguments[G__21558__i + 0]; ++G__21558__i;}
  args = new cljs.core.IndexedSeq(G__21558__a,0);
} 
return G__21557__delegate.call(this,args);};
G__21557.cljs$lang$maxFixedArity = 0;
G__21557.cljs$lang$applyTo = (function (arglist__21559){
var args = cljs.core.seq(arglist__21559);
return G__21557__delegate(args);
});
G__21557.cljs$core$IFn$_invoke$arity$variadic = G__21557__delegate;
return G__21557;
})()
;

return null;
});
