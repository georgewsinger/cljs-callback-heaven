goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15336__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15337__i = 0, G__15337__a = new Array(arguments.length -  0);
while (G__15337__i < G__15337__a.length) {G__15337__a[G__15337__i] = arguments[G__15337__i + 0]; ++G__15337__i;}
  args = new cljs.core.IndexedSeq(G__15337__a,0);
} 
return G__15336__delegate.call(this,args);};
G__15336.cljs$lang$maxFixedArity = 0;
G__15336.cljs$lang$applyTo = (function (arglist__15338){
var args = cljs.core.seq(arglist__15338);
return G__15336__delegate(args);
});
G__15336.cljs$core$IFn$_invoke$arity$variadic = G__15336__delegate;
return G__15336;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15339__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15340__i = 0, G__15340__a = new Array(arguments.length -  0);
while (G__15340__i < G__15340__a.length) {G__15340__a[G__15340__i] = arguments[G__15340__i + 0]; ++G__15340__i;}
  args = new cljs.core.IndexedSeq(G__15340__a,0);
} 
return G__15339__delegate.call(this,args);};
G__15339.cljs$lang$maxFixedArity = 0;
G__15339.cljs$lang$applyTo = (function (arglist__15341){
var args = cljs.core.seq(arglist__15341);
return G__15339__delegate(args);
});
G__15339.cljs$core$IFn$_invoke$arity$variadic = G__15339__delegate;
return G__15339;
})()
;

return null;
});
