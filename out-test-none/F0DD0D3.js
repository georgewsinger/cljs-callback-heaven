goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10173__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10174__i = 0, G__10174__a = new Array(arguments.length -  0);
while (G__10174__i < G__10174__a.length) {G__10174__a[G__10174__i] = arguments[G__10174__i + 0]; ++G__10174__i;}
  args = new cljs.core.IndexedSeq(G__10174__a,0);
} 
return G__10173__delegate.call(this,args);};
G__10173.cljs$lang$maxFixedArity = 0;
G__10173.cljs$lang$applyTo = (function (arglist__10175){
var args = cljs.core.seq(arglist__10175);
return G__10173__delegate(args);
});
G__10173.cljs$core$IFn$_invoke$arity$variadic = G__10173__delegate;
return G__10173;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10176__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10177__i = 0, G__10177__a = new Array(arguments.length -  0);
while (G__10177__i < G__10177__a.length) {G__10177__a[G__10177__i] = arguments[G__10177__i + 0]; ++G__10177__i;}
  args = new cljs.core.IndexedSeq(G__10177__a,0);
} 
return G__10176__delegate.call(this,args);};
G__10176.cljs$lang$maxFixedArity = 0;
G__10176.cljs$lang$applyTo = (function (arglist__10178){
var args = cljs.core.seq(arglist__10178);
return G__10176__delegate(args);
});
G__10176.cljs$core$IFn$_invoke$arity$variadic = G__10176__delegate;
return G__10176;
})()
;

return null;
});
