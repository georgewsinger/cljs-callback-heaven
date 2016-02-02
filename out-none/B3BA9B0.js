goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16519__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16520__i = 0, G__16520__a = new Array(arguments.length -  0);
while (G__16520__i < G__16520__a.length) {G__16520__a[G__16520__i] = arguments[G__16520__i + 0]; ++G__16520__i;}
  args = new cljs.core.IndexedSeq(G__16520__a,0);
} 
return G__16519__delegate.call(this,args);};
G__16519.cljs$lang$maxFixedArity = 0;
G__16519.cljs$lang$applyTo = (function (arglist__16521){
var args = cljs.core.seq(arglist__16521);
return G__16519__delegate(args);
});
G__16519.cljs$core$IFn$_invoke$arity$variadic = G__16519__delegate;
return G__16519;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16522__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16523__i = 0, G__16523__a = new Array(arguments.length -  0);
while (G__16523__i < G__16523__a.length) {G__16523__a[G__16523__i] = arguments[G__16523__i + 0]; ++G__16523__i;}
  args = new cljs.core.IndexedSeq(G__16523__a,0);
} 
return G__16522__delegate.call(this,args);};
G__16522.cljs$lang$maxFixedArity = 0;
G__16522.cljs$lang$applyTo = (function (arglist__16524){
var args = cljs.core.seq(arglist__16524);
return G__16522__delegate(args);
});
G__16522.cljs$core$IFn$_invoke$arity$variadic = G__16522__delegate;
return G__16522;
})()
;

return null;
});
