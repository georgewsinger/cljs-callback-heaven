goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9662__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9663__i = 0, G__9663__a = new Array(arguments.length -  0);
while (G__9663__i < G__9663__a.length) {G__9663__a[G__9663__i] = arguments[G__9663__i + 0]; ++G__9663__i;}
  args = new cljs.core.IndexedSeq(G__9663__a,0);
} 
return G__9662__delegate.call(this,args);};
G__9662.cljs$lang$maxFixedArity = 0;
G__9662.cljs$lang$applyTo = (function (arglist__9664){
var args = cljs.core.seq(arglist__9664);
return G__9662__delegate(args);
});
G__9662.cljs$core$IFn$_invoke$arity$variadic = G__9662__delegate;
return G__9662;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9665__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9666__i = 0, G__9666__a = new Array(arguments.length -  0);
while (G__9666__i < G__9666__a.length) {G__9666__a[G__9666__i] = arguments[G__9666__i + 0]; ++G__9666__i;}
  args = new cljs.core.IndexedSeq(G__9666__a,0);
} 
return G__9665__delegate.call(this,args);};
G__9665.cljs$lang$maxFixedArity = 0;
G__9665.cljs$lang$applyTo = (function (arglist__9667){
var args = cljs.core.seq(arglist__9667);
return G__9665__delegate(args);
});
G__9665.cljs$core$IFn$_invoke$arity$variadic = G__9665__delegate;
return G__9665;
})()
;

return null;
});
