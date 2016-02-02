goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__279452__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__279452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279453__i = 0, G__279453__a = new Array(arguments.length -  0);
while (G__279453__i < G__279453__a.length) {G__279453__a[G__279453__i] = arguments[G__279453__i + 0]; ++G__279453__i;}
  args = new cljs.core.IndexedSeq(G__279453__a,0);
} 
return G__279452__delegate.call(this,args);};
G__279452.cljs$lang$maxFixedArity = 0;
G__279452.cljs$lang$applyTo = (function (arglist__279454){
var args = cljs.core.seq(arglist__279454);
return G__279452__delegate(args);
});
G__279452.cljs$core$IFn$_invoke$arity$variadic = G__279452__delegate;
return G__279452;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__279455__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__279455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279456__i = 0, G__279456__a = new Array(arguments.length -  0);
while (G__279456__i < G__279456__a.length) {G__279456__a[G__279456__i] = arguments[G__279456__i + 0]; ++G__279456__i;}
  args = new cljs.core.IndexedSeq(G__279456__a,0);
} 
return G__279455__delegate.call(this,args);};
G__279455.cljs$lang$maxFixedArity = 0;
G__279455.cljs$lang$applyTo = (function (arglist__279457){
var args = cljs.core.seq(arglist__279457);
return G__279455__delegate(args);
});
G__279455.cljs$core$IFn$_invoke$arity$variadic = G__279455__delegate;
return G__279455;
})()
;

return null;
});
