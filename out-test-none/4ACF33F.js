goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64825__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64826__i = 0, G__64826__a = new Array(arguments.length -  0);
while (G__64826__i < G__64826__a.length) {G__64826__a[G__64826__i] = arguments[G__64826__i + 0]; ++G__64826__i;}
  args = new cljs.core.IndexedSeq(G__64826__a,0);
} 
return G__64825__delegate.call(this,args);};
G__64825.cljs$lang$maxFixedArity = 0;
G__64825.cljs$lang$applyTo = (function (arglist__64827){
var args = cljs.core.seq(arglist__64827);
return G__64825__delegate(args);
});
G__64825.cljs$core$IFn$_invoke$arity$variadic = G__64825__delegate;
return G__64825;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64828__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64829__i = 0, G__64829__a = new Array(arguments.length -  0);
while (G__64829__i < G__64829__a.length) {G__64829__a[G__64829__i] = arguments[G__64829__i + 0]; ++G__64829__i;}
  args = new cljs.core.IndexedSeq(G__64829__a,0);
} 
return G__64828__delegate.call(this,args);};
G__64828.cljs$lang$maxFixedArity = 0;
G__64828.cljs$lang$applyTo = (function (arglist__64830){
var args = cljs.core.seq(arglist__64830);
return G__64828__delegate(args);
});
G__64828.cljs$core$IFn$_invoke$arity$variadic = G__64828__delegate;
return G__64828;
})()
;

return null;
});
