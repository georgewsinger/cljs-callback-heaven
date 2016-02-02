goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9568__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9569__i = 0, G__9569__a = new Array(arguments.length -  0);
while (G__9569__i < G__9569__a.length) {G__9569__a[G__9569__i] = arguments[G__9569__i + 0]; ++G__9569__i;}
  args = new cljs.core.IndexedSeq(G__9569__a,0);
} 
return G__9568__delegate.call(this,args);};
G__9568.cljs$lang$maxFixedArity = 0;
G__9568.cljs$lang$applyTo = (function (arglist__9570){
var args = cljs.core.seq(arglist__9570);
return G__9568__delegate(args);
});
G__9568.cljs$core$IFn$_invoke$arity$variadic = G__9568__delegate;
return G__9568;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9571__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9572__i = 0, G__9572__a = new Array(arguments.length -  0);
while (G__9572__i < G__9572__a.length) {G__9572__a[G__9572__i] = arguments[G__9572__i + 0]; ++G__9572__i;}
  args = new cljs.core.IndexedSeq(G__9572__a,0);
} 
return G__9571__delegate.call(this,args);};
G__9571.cljs$lang$maxFixedArity = 0;
G__9571.cljs$lang$applyTo = (function (arglist__9573){
var args = cljs.core.seq(arglist__9573);
return G__9571__delegate(args);
});
G__9571.cljs$core$IFn$_invoke$arity$variadic = G__9571__delegate;
return G__9571;
})()
;

return null;
});
