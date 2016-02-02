goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15066__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15067__i = 0, G__15067__a = new Array(arguments.length -  0);
while (G__15067__i < G__15067__a.length) {G__15067__a[G__15067__i] = arguments[G__15067__i + 0]; ++G__15067__i;}
  args = new cljs.core.IndexedSeq(G__15067__a,0);
} 
return G__15066__delegate.call(this,args);};
G__15066.cljs$lang$maxFixedArity = 0;
G__15066.cljs$lang$applyTo = (function (arglist__15068){
var args = cljs.core.seq(arglist__15068);
return G__15066__delegate(args);
});
G__15066.cljs$core$IFn$_invoke$arity$variadic = G__15066__delegate;
return G__15066;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15069__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15070__i = 0, G__15070__a = new Array(arguments.length -  0);
while (G__15070__i < G__15070__a.length) {G__15070__a[G__15070__i] = arguments[G__15070__i + 0]; ++G__15070__i;}
  args = new cljs.core.IndexedSeq(G__15070__a,0);
} 
return G__15069__delegate.call(this,args);};
G__15069.cljs$lang$maxFixedArity = 0;
G__15069.cljs$lang$applyTo = (function (arglist__15071){
var args = cljs.core.seq(arglist__15071);
return G__15069__delegate(args);
});
G__15069.cljs$core$IFn$_invoke$arity$variadic = G__15069__delegate;
return G__15069;
})()
;

return null;
});
