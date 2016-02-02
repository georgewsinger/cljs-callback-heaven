goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39421__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39422__i = 0, G__39422__a = new Array(arguments.length -  0);
while (G__39422__i < G__39422__a.length) {G__39422__a[G__39422__i] = arguments[G__39422__i + 0]; ++G__39422__i;}
  args = new cljs.core.IndexedSeq(G__39422__a,0);
} 
return G__39421__delegate.call(this,args);};
G__39421.cljs$lang$maxFixedArity = 0;
G__39421.cljs$lang$applyTo = (function (arglist__39423){
var args = cljs.core.seq(arglist__39423);
return G__39421__delegate(args);
});
G__39421.cljs$core$IFn$_invoke$arity$variadic = G__39421__delegate;
return G__39421;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39424__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39425__i = 0, G__39425__a = new Array(arguments.length -  0);
while (G__39425__i < G__39425__a.length) {G__39425__a[G__39425__i] = arguments[G__39425__i + 0]; ++G__39425__i;}
  args = new cljs.core.IndexedSeq(G__39425__a,0);
} 
return G__39424__delegate.call(this,args);};
G__39424.cljs$lang$maxFixedArity = 0;
G__39424.cljs$lang$applyTo = (function (arglist__39426){
var args = cljs.core.seq(arglist__39426);
return G__39424__delegate(args);
});
G__39424.cljs$core$IFn$_invoke$arity$variadic = G__39424__delegate;
return G__39424;
})()
;

return null;
});
