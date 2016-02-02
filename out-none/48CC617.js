goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67556__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67557__i = 0, G__67557__a = new Array(arguments.length -  0);
while (G__67557__i < G__67557__a.length) {G__67557__a[G__67557__i] = arguments[G__67557__i + 0]; ++G__67557__i;}
  args = new cljs.core.IndexedSeq(G__67557__a,0);
} 
return G__67556__delegate.call(this,args);};
G__67556.cljs$lang$maxFixedArity = 0;
G__67556.cljs$lang$applyTo = (function (arglist__67558){
var args = cljs.core.seq(arglist__67558);
return G__67556__delegate(args);
});
G__67556.cljs$core$IFn$_invoke$arity$variadic = G__67556__delegate;
return G__67556;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67559__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67560__i = 0, G__67560__a = new Array(arguments.length -  0);
while (G__67560__i < G__67560__a.length) {G__67560__a[G__67560__i] = arguments[G__67560__i + 0]; ++G__67560__i;}
  args = new cljs.core.IndexedSeq(G__67560__a,0);
} 
return G__67559__delegate.call(this,args);};
G__67559.cljs$lang$maxFixedArity = 0;
G__67559.cljs$lang$applyTo = (function (arglist__67561){
var args = cljs.core.seq(arglist__67561);
return G__67559__delegate(args);
});
G__67559.cljs$core$IFn$_invoke$arity$variadic = G__67559__delegate;
return G__67559;
})()
;

return null;
});
