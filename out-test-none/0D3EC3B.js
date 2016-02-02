goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11537__i = 0, G__11537__a = new Array(arguments.length -  0);
while (G__11537__i < G__11537__a.length) {G__11537__a[G__11537__i] = arguments[G__11537__i + 0]; ++G__11537__i;}
  args = new cljs.core.IndexedSeq(G__11537__a,0);
} 
return G__11536__delegate.call(this,args);};
G__11536.cljs$lang$maxFixedArity = 0;
G__11536.cljs$lang$applyTo = (function (arglist__11538){
var args = cljs.core.seq(arglist__11538);
return G__11536__delegate(args);
});
G__11536.cljs$core$IFn$_invoke$arity$variadic = G__11536__delegate;
return G__11536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11540__i = 0, G__11540__a = new Array(arguments.length -  0);
while (G__11540__i < G__11540__a.length) {G__11540__a[G__11540__i] = arguments[G__11540__i + 0]; ++G__11540__i;}
  args = new cljs.core.IndexedSeq(G__11540__a,0);
} 
return G__11539__delegate.call(this,args);};
G__11539.cljs$lang$maxFixedArity = 0;
G__11539.cljs$lang$applyTo = (function (arglist__11541){
var args = cljs.core.seq(arglist__11541);
return G__11539__delegate(args);
});
G__11539.cljs$core$IFn$_invoke$arity$variadic = G__11539__delegate;
return G__11539;
})()
;

return null;
});
