goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27293__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27294__i = 0, G__27294__a = new Array(arguments.length -  0);
while (G__27294__i < G__27294__a.length) {G__27294__a[G__27294__i] = arguments[G__27294__i + 0]; ++G__27294__i;}
  args = new cljs.core.IndexedSeq(G__27294__a,0);
} 
return G__27293__delegate.call(this,args);};
G__27293.cljs$lang$maxFixedArity = 0;
G__27293.cljs$lang$applyTo = (function (arglist__27295){
var args = cljs.core.seq(arglist__27295);
return G__27293__delegate(args);
});
G__27293.cljs$core$IFn$_invoke$arity$variadic = G__27293__delegate;
return G__27293;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27296__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27297__i = 0, G__27297__a = new Array(arguments.length -  0);
while (G__27297__i < G__27297__a.length) {G__27297__a[G__27297__i] = arguments[G__27297__i + 0]; ++G__27297__i;}
  args = new cljs.core.IndexedSeq(G__27297__a,0);
} 
return G__27296__delegate.call(this,args);};
G__27296.cljs$lang$maxFixedArity = 0;
G__27296.cljs$lang$applyTo = (function (arglist__27298){
var args = cljs.core.seq(arglist__27298);
return G__27296__delegate(args);
});
G__27296.cljs$core$IFn$_invoke$arity$variadic = G__27296__delegate;
return G__27296;
})()
;

return null;
});
