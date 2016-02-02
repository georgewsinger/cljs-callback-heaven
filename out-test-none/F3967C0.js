goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9984__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9985__i = 0, G__9985__a = new Array(arguments.length -  0);
while (G__9985__i < G__9985__a.length) {G__9985__a[G__9985__i] = arguments[G__9985__i + 0]; ++G__9985__i;}
  args = new cljs.core.IndexedSeq(G__9985__a,0);
} 
return G__9984__delegate.call(this,args);};
G__9984.cljs$lang$maxFixedArity = 0;
G__9984.cljs$lang$applyTo = (function (arglist__9986){
var args = cljs.core.seq(arglist__9986);
return G__9984__delegate(args);
});
G__9984.cljs$core$IFn$_invoke$arity$variadic = G__9984__delegate;
return G__9984;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9987__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9988__i = 0, G__9988__a = new Array(arguments.length -  0);
while (G__9988__i < G__9988__a.length) {G__9988__a[G__9988__i] = arguments[G__9988__i + 0]; ++G__9988__i;}
  args = new cljs.core.IndexedSeq(G__9988__a,0);
} 
return G__9987__delegate.call(this,args);};
G__9987.cljs$lang$maxFixedArity = 0;
G__9987.cljs$lang$applyTo = (function (arglist__9989){
var args = cljs.core.seq(arglist__9989);
return G__9987__delegate(args);
});
G__9987.cljs$core$IFn$_invoke$arity$variadic = G__9987__delegate;
return G__9987;
})()
;

return null;
});
