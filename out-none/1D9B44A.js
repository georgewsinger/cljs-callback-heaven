goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50115__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50116__i = 0, G__50116__a = new Array(arguments.length -  0);
while (G__50116__i < G__50116__a.length) {G__50116__a[G__50116__i] = arguments[G__50116__i + 0]; ++G__50116__i;}
  args = new cljs.core.IndexedSeq(G__50116__a,0);
} 
return G__50115__delegate.call(this,args);};
G__50115.cljs$lang$maxFixedArity = 0;
G__50115.cljs$lang$applyTo = (function (arglist__50117){
var args = cljs.core.seq(arglist__50117);
return G__50115__delegate(args);
});
G__50115.cljs$core$IFn$_invoke$arity$variadic = G__50115__delegate;
return G__50115;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50118__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50119__i = 0, G__50119__a = new Array(arguments.length -  0);
while (G__50119__i < G__50119__a.length) {G__50119__a[G__50119__i] = arguments[G__50119__i + 0]; ++G__50119__i;}
  args = new cljs.core.IndexedSeq(G__50119__a,0);
} 
return G__50118__delegate.call(this,args);};
G__50118.cljs$lang$maxFixedArity = 0;
G__50118.cljs$lang$applyTo = (function (arglist__50120){
var args = cljs.core.seq(arglist__50120);
return G__50118__delegate(args);
});
G__50118.cljs$core$IFn$_invoke$arity$variadic = G__50118__delegate;
return G__50118;
})()
;

return null;
});
