goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__317536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__317536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317537__i = 0, G__317537__a = new Array(arguments.length -  0);
while (G__317537__i < G__317537__a.length) {G__317537__a[G__317537__i] = arguments[G__317537__i + 0]; ++G__317537__i;}
  args = new cljs.core.IndexedSeq(G__317537__a,0);
} 
return G__317536__delegate.call(this,args);};
G__317536.cljs$lang$maxFixedArity = 0;
G__317536.cljs$lang$applyTo = (function (arglist__317538){
var args = cljs.core.seq(arglist__317538);
return G__317536__delegate(args);
});
G__317536.cljs$core$IFn$_invoke$arity$variadic = G__317536__delegate;
return G__317536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__317539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__317539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317540__i = 0, G__317540__a = new Array(arguments.length -  0);
while (G__317540__i < G__317540__a.length) {G__317540__a[G__317540__i] = arguments[G__317540__i + 0]; ++G__317540__i;}
  args = new cljs.core.IndexedSeq(G__317540__a,0);
} 
return G__317539__delegate.call(this,args);};
G__317539.cljs$lang$maxFixedArity = 0;
G__317539.cljs$lang$applyTo = (function (arglist__317541){
var args = cljs.core.seq(arglist__317541);
return G__317539__delegate(args);
});
G__317539.cljs$core$IFn$_invoke$arity$variadic = G__317539__delegate;
return G__317539;
})()
;

return null;
});
