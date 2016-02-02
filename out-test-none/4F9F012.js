goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148115__i = 0, G__148115__a = new Array(arguments.length -  0);
while (G__148115__i < G__148115__a.length) {G__148115__a[G__148115__i] = arguments[G__148115__i + 0]; ++G__148115__i;}
  args = new cljs.core.IndexedSeq(G__148115__a,0);
} 
return G__148114__delegate.call(this,args);};
G__148114.cljs$lang$maxFixedArity = 0;
G__148114.cljs$lang$applyTo = (function (arglist__148116){
var args = cljs.core.seq(arglist__148116);
return G__148114__delegate(args);
});
G__148114.cljs$core$IFn$_invoke$arity$variadic = G__148114__delegate;
return G__148114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148118__i = 0, G__148118__a = new Array(arguments.length -  0);
while (G__148118__i < G__148118__a.length) {G__148118__a[G__148118__i] = arguments[G__148118__i + 0]; ++G__148118__i;}
  args = new cljs.core.IndexedSeq(G__148118__a,0);
} 
return G__148117__delegate.call(this,args);};
G__148117.cljs$lang$maxFixedArity = 0;
G__148117.cljs$lang$applyTo = (function (arglist__148119){
var args = cljs.core.seq(arglist__148119);
return G__148117__delegate(args);
});
G__148117.cljs$core$IFn$_invoke$arity$variadic = G__148117__delegate;
return G__148117;
})()
;

return null;
});
