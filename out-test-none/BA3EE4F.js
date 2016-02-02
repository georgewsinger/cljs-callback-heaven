goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__193285__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__193285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__193286__i = 0, G__193286__a = new Array(arguments.length -  0);
while (G__193286__i < G__193286__a.length) {G__193286__a[G__193286__i] = arguments[G__193286__i + 0]; ++G__193286__i;}
  args = new cljs.core.IndexedSeq(G__193286__a,0);
} 
return G__193285__delegate.call(this,args);};
G__193285.cljs$lang$maxFixedArity = 0;
G__193285.cljs$lang$applyTo = (function (arglist__193287){
var args = cljs.core.seq(arglist__193287);
return G__193285__delegate(args);
});
G__193285.cljs$core$IFn$_invoke$arity$variadic = G__193285__delegate;
return G__193285;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__193288__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__193288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__193289__i = 0, G__193289__a = new Array(arguments.length -  0);
while (G__193289__i < G__193289__a.length) {G__193289__a[G__193289__i] = arguments[G__193289__i + 0]; ++G__193289__i;}
  args = new cljs.core.IndexedSeq(G__193289__a,0);
} 
return G__193288__delegate.call(this,args);};
G__193288.cljs$lang$maxFixedArity = 0;
G__193288.cljs$lang$applyTo = (function (arglist__193290){
var args = cljs.core.seq(arglist__193290);
return G__193288__delegate(args);
});
G__193288.cljs$core$IFn$_invoke$arity$variadic = G__193288__delegate;
return G__193288;
})()
;

return null;
});
