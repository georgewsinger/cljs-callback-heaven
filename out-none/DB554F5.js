goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52584__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52585__i = 0, G__52585__a = new Array(arguments.length -  0);
while (G__52585__i < G__52585__a.length) {G__52585__a[G__52585__i] = arguments[G__52585__i + 0]; ++G__52585__i;}
  args = new cljs.core.IndexedSeq(G__52585__a,0);
} 
return G__52584__delegate.call(this,args);};
G__52584.cljs$lang$maxFixedArity = 0;
G__52584.cljs$lang$applyTo = (function (arglist__52586){
var args = cljs.core.seq(arglist__52586);
return G__52584__delegate(args);
});
G__52584.cljs$core$IFn$_invoke$arity$variadic = G__52584__delegate;
return G__52584;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52587__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52588__i = 0, G__52588__a = new Array(arguments.length -  0);
while (G__52588__i < G__52588__a.length) {G__52588__a[G__52588__i] = arguments[G__52588__i + 0]; ++G__52588__i;}
  args = new cljs.core.IndexedSeq(G__52588__a,0);
} 
return G__52587__delegate.call(this,args);};
G__52587.cljs$lang$maxFixedArity = 0;
G__52587.cljs$lang$applyTo = (function (arglist__52589){
var args = cljs.core.seq(arglist__52589);
return G__52587__delegate(args);
});
G__52587.cljs$core$IFn$_invoke$arity$variadic = G__52587__delegate;
return G__52587;
})()
;

return null;
});
