goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33262__i = 0, G__33262__a = new Array(arguments.length -  0);
while (G__33262__i < G__33262__a.length) {G__33262__a[G__33262__i] = arguments[G__33262__i + 0]; ++G__33262__i;}
  args = new cljs.core.IndexedSeq(G__33262__a,0);
} 
return G__33261__delegate.call(this,args);};
G__33261.cljs$lang$maxFixedArity = 0;
G__33261.cljs$lang$applyTo = (function (arglist__33263){
var args = cljs.core.seq(arglist__33263);
return G__33261__delegate(args);
});
G__33261.cljs$core$IFn$_invoke$arity$variadic = G__33261__delegate;
return G__33261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33265__i = 0, G__33265__a = new Array(arguments.length -  0);
while (G__33265__i < G__33265__a.length) {G__33265__a[G__33265__i] = arguments[G__33265__i + 0]; ++G__33265__i;}
  args = new cljs.core.IndexedSeq(G__33265__a,0);
} 
return G__33264__delegate.call(this,args);};
G__33264.cljs$lang$maxFixedArity = 0;
G__33264.cljs$lang$applyTo = (function (arglist__33266){
var args = cljs.core.seq(arglist__33266);
return G__33264__delegate(args);
});
G__33264.cljs$core$IFn$_invoke$arity$variadic = G__33264__delegate;
return G__33264;
})()
;

return null;
});
