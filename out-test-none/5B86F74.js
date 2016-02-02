goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14036__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14037__i = 0, G__14037__a = new Array(arguments.length -  0);
while (G__14037__i < G__14037__a.length) {G__14037__a[G__14037__i] = arguments[G__14037__i + 0]; ++G__14037__i;}
  args = new cljs.core.IndexedSeq(G__14037__a,0);
} 
return G__14036__delegate.call(this,args);};
G__14036.cljs$lang$maxFixedArity = 0;
G__14036.cljs$lang$applyTo = (function (arglist__14038){
var args = cljs.core.seq(arglist__14038);
return G__14036__delegate(args);
});
G__14036.cljs$core$IFn$_invoke$arity$variadic = G__14036__delegate;
return G__14036;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14039__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14040__i = 0, G__14040__a = new Array(arguments.length -  0);
while (G__14040__i < G__14040__a.length) {G__14040__a[G__14040__i] = arguments[G__14040__i + 0]; ++G__14040__i;}
  args = new cljs.core.IndexedSeq(G__14040__a,0);
} 
return G__14039__delegate.call(this,args);};
G__14039.cljs$lang$maxFixedArity = 0;
G__14039.cljs$lang$applyTo = (function (arglist__14041){
var args = cljs.core.seq(arglist__14041);
return G__14039__delegate(args);
});
G__14039.cljs$core$IFn$_invoke$arity$variadic = G__14039__delegate;
return G__14039;
})()
;

return null;
});