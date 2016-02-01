goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16517__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16518__i = 0, G__16518__a = new Array(arguments.length -  0);
while (G__16518__i < G__16518__a.length) {G__16518__a[G__16518__i] = arguments[G__16518__i + 0]; ++G__16518__i;}
  args = new cljs.core.IndexedSeq(G__16518__a,0);
} 
return G__16517__delegate.call(this,args);};
G__16517.cljs$lang$maxFixedArity = 0;
G__16517.cljs$lang$applyTo = (function (arglist__16519){
var args = cljs.core.seq(arglist__16519);
return G__16517__delegate(args);
});
G__16517.cljs$core$IFn$_invoke$arity$variadic = G__16517__delegate;
return G__16517;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16520__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16521__i = 0, G__16521__a = new Array(arguments.length -  0);
while (G__16521__i < G__16521__a.length) {G__16521__a[G__16521__i] = arguments[G__16521__i + 0]; ++G__16521__i;}
  args = new cljs.core.IndexedSeq(G__16521__a,0);
} 
return G__16520__delegate.call(this,args);};
G__16520.cljs$lang$maxFixedArity = 0;
G__16520.cljs$lang$applyTo = (function (arglist__16522){
var args = cljs.core.seq(arglist__16522);
return G__16520__delegate(args);
});
G__16520.cljs$core$IFn$_invoke$arity$variadic = G__16520__delegate;
return G__16520;
})()
;

return null;
});
