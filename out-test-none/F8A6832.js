goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16116__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16117__i = 0, G__16117__a = new Array(arguments.length -  0);
while (G__16117__i < G__16117__a.length) {G__16117__a[G__16117__i] = arguments[G__16117__i + 0]; ++G__16117__i;}
  args = new cljs.core.IndexedSeq(G__16117__a,0);
} 
return G__16116__delegate.call(this,args);};
G__16116.cljs$lang$maxFixedArity = 0;
G__16116.cljs$lang$applyTo = (function (arglist__16118){
var args = cljs.core.seq(arglist__16118);
return G__16116__delegate(args);
});
G__16116.cljs$core$IFn$_invoke$arity$variadic = G__16116__delegate;
return G__16116;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16119__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16120__i = 0, G__16120__a = new Array(arguments.length -  0);
while (G__16120__i < G__16120__a.length) {G__16120__a[G__16120__i] = arguments[G__16120__i + 0]; ++G__16120__i;}
  args = new cljs.core.IndexedSeq(G__16120__a,0);
} 
return G__16119__delegate.call(this,args);};
G__16119.cljs$lang$maxFixedArity = 0;
G__16119.cljs$lang$applyTo = (function (arglist__16121){
var args = cljs.core.seq(arglist__16121);
return G__16119__delegate(args);
});
G__16119.cljs$core$IFn$_invoke$arity$variadic = G__16119__delegate;
return G__16119;
})()
;

return null;
});
