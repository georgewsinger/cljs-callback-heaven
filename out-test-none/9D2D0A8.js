goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16056__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16057__i = 0, G__16057__a = new Array(arguments.length -  0);
while (G__16057__i < G__16057__a.length) {G__16057__a[G__16057__i] = arguments[G__16057__i + 0]; ++G__16057__i;}
  args = new cljs.core.IndexedSeq(G__16057__a,0);
} 
return G__16056__delegate.call(this,args);};
G__16056.cljs$lang$maxFixedArity = 0;
G__16056.cljs$lang$applyTo = (function (arglist__16058){
var args = cljs.core.seq(arglist__16058);
return G__16056__delegate(args);
});
G__16056.cljs$core$IFn$_invoke$arity$variadic = G__16056__delegate;
return G__16056;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16059__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16060__i = 0, G__16060__a = new Array(arguments.length -  0);
while (G__16060__i < G__16060__a.length) {G__16060__a[G__16060__i] = arguments[G__16060__i + 0]; ++G__16060__i;}
  args = new cljs.core.IndexedSeq(G__16060__a,0);
} 
return G__16059__delegate.call(this,args);};
G__16059.cljs$lang$maxFixedArity = 0;
G__16059.cljs$lang$applyTo = (function (arglist__16061){
var args = cljs.core.seq(arglist__16061);
return G__16059__delegate(args);
});
G__16059.cljs$core$IFn$_invoke$arity$variadic = G__16059__delegate;
return G__16059;
})()
;

return null;
});
