goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33102__i = 0, G__33102__a = new Array(arguments.length -  0);
while (G__33102__i < G__33102__a.length) {G__33102__a[G__33102__i] = arguments[G__33102__i + 0]; ++G__33102__i;}
  args = new cljs.core.IndexedSeq(G__33102__a,0);
} 
return G__33101__delegate.call(this,args);};
G__33101.cljs$lang$maxFixedArity = 0;
G__33101.cljs$lang$applyTo = (function (arglist__33103){
var args = cljs.core.seq(arglist__33103);
return G__33101__delegate(args);
});
G__33101.cljs$core$IFn$_invoke$arity$variadic = G__33101__delegate;
return G__33101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33105__i = 0, G__33105__a = new Array(arguments.length -  0);
while (G__33105__i < G__33105__a.length) {G__33105__a[G__33105__i] = arguments[G__33105__i + 0]; ++G__33105__i;}
  args = new cljs.core.IndexedSeq(G__33105__a,0);
} 
return G__33104__delegate.call(this,args);};
G__33104.cljs$lang$maxFixedArity = 0;
G__33104.cljs$lang$applyTo = (function (arglist__33106){
var args = cljs.core.seq(arglist__33106);
return G__33104__delegate(args);
});
G__33104.cljs$core$IFn$_invoke$arity$variadic = G__33104__delegate;
return G__33104;
})()
;

return null;
});
