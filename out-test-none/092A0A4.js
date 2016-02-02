goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__204559__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__204559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__204560__i = 0, G__204560__a = new Array(arguments.length -  0);
while (G__204560__i < G__204560__a.length) {G__204560__a[G__204560__i] = arguments[G__204560__i + 0]; ++G__204560__i;}
  args = new cljs.core.IndexedSeq(G__204560__a,0);
} 
return G__204559__delegate.call(this,args);};
G__204559.cljs$lang$maxFixedArity = 0;
G__204559.cljs$lang$applyTo = (function (arglist__204561){
var args = cljs.core.seq(arglist__204561);
return G__204559__delegate(args);
});
G__204559.cljs$core$IFn$_invoke$arity$variadic = G__204559__delegate;
return G__204559;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__204562__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__204562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__204563__i = 0, G__204563__a = new Array(arguments.length -  0);
while (G__204563__i < G__204563__a.length) {G__204563__a[G__204563__i] = arguments[G__204563__i + 0]; ++G__204563__i;}
  args = new cljs.core.IndexedSeq(G__204563__a,0);
} 
return G__204562__delegate.call(this,args);};
G__204562.cljs$lang$maxFixedArity = 0;
G__204562.cljs$lang$applyTo = (function (arglist__204564){
var args = cljs.core.seq(arglist__204564);
return G__204562__delegate(args);
});
G__204562.cljs$core$IFn$_invoke$arity$variadic = G__204562__delegate;
return G__204562;
})()
;

return null;
});
