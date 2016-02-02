goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49453__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49454__i = 0, G__49454__a = new Array(arguments.length -  0);
while (G__49454__i < G__49454__a.length) {G__49454__a[G__49454__i] = arguments[G__49454__i + 0]; ++G__49454__i;}
  args = new cljs.core.IndexedSeq(G__49454__a,0);
} 
return G__49453__delegate.call(this,args);};
G__49453.cljs$lang$maxFixedArity = 0;
G__49453.cljs$lang$applyTo = (function (arglist__49455){
var args = cljs.core.seq(arglist__49455);
return G__49453__delegate(args);
});
G__49453.cljs$core$IFn$_invoke$arity$variadic = G__49453__delegate;
return G__49453;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49456__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49457__i = 0, G__49457__a = new Array(arguments.length -  0);
while (G__49457__i < G__49457__a.length) {G__49457__a[G__49457__i] = arguments[G__49457__i + 0]; ++G__49457__i;}
  args = new cljs.core.IndexedSeq(G__49457__a,0);
} 
return G__49456__delegate.call(this,args);};
G__49456.cljs$lang$maxFixedArity = 0;
G__49456.cljs$lang$applyTo = (function (arglist__49458){
var args = cljs.core.seq(arglist__49458);
return G__49456__delegate(args);
});
G__49456.cljs$core$IFn$_invoke$arity$variadic = G__49456__delegate;
return G__49456;
})()
;

return null;
});
