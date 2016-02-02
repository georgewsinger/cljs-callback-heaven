goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21066__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21067__i = 0, G__21067__a = new Array(arguments.length -  0);
while (G__21067__i < G__21067__a.length) {G__21067__a[G__21067__i] = arguments[G__21067__i + 0]; ++G__21067__i;}
  args = new cljs.core.IndexedSeq(G__21067__a,0);
} 
return G__21066__delegate.call(this,args);};
G__21066.cljs$lang$maxFixedArity = 0;
G__21066.cljs$lang$applyTo = (function (arglist__21068){
var args = cljs.core.seq(arglist__21068);
return G__21066__delegate(args);
});
G__21066.cljs$core$IFn$_invoke$arity$variadic = G__21066__delegate;
return G__21066;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21069__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21070__i = 0, G__21070__a = new Array(arguments.length -  0);
while (G__21070__i < G__21070__a.length) {G__21070__a[G__21070__i] = arguments[G__21070__i + 0]; ++G__21070__i;}
  args = new cljs.core.IndexedSeq(G__21070__a,0);
} 
return G__21069__delegate.call(this,args);};
G__21069.cljs$lang$maxFixedArity = 0;
G__21069.cljs$lang$applyTo = (function (arglist__21071){
var args = cljs.core.seq(arglist__21071);
return G__21069__delegate(args);
});
G__21069.cljs$core$IFn$_invoke$arity$variadic = G__21069__delegate;
return G__21069;
})()
;

return null;
});
