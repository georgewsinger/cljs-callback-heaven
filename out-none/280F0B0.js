goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38248__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38249__i = 0, G__38249__a = new Array(arguments.length -  0);
while (G__38249__i < G__38249__a.length) {G__38249__a[G__38249__i] = arguments[G__38249__i + 0]; ++G__38249__i;}
  args = new cljs.core.IndexedSeq(G__38249__a,0);
} 
return G__38248__delegate.call(this,args);};
G__38248.cljs$lang$maxFixedArity = 0;
G__38248.cljs$lang$applyTo = (function (arglist__38250){
var args = cljs.core.seq(arglist__38250);
return G__38248__delegate(args);
});
G__38248.cljs$core$IFn$_invoke$arity$variadic = G__38248__delegate;
return G__38248;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38251__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38252__i = 0, G__38252__a = new Array(arguments.length -  0);
while (G__38252__i < G__38252__a.length) {G__38252__a[G__38252__i] = arguments[G__38252__i + 0]; ++G__38252__i;}
  args = new cljs.core.IndexedSeq(G__38252__a,0);
} 
return G__38251__delegate.call(this,args);};
G__38251.cljs$lang$maxFixedArity = 0;
G__38251.cljs$lang$applyTo = (function (arglist__38253){
var args = cljs.core.seq(arglist__38253);
return G__38251__delegate(args);
});
G__38251.cljs$core$IFn$_invoke$arity$variadic = G__38251__delegate;
return G__38251;
})()
;

return null;
});
