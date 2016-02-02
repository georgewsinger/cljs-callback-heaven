goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16641__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16642__i = 0, G__16642__a = new Array(arguments.length -  0);
while (G__16642__i < G__16642__a.length) {G__16642__a[G__16642__i] = arguments[G__16642__i + 0]; ++G__16642__i;}
  args = new cljs.core.IndexedSeq(G__16642__a,0);
} 
return G__16641__delegate.call(this,args);};
G__16641.cljs$lang$maxFixedArity = 0;
G__16641.cljs$lang$applyTo = (function (arglist__16643){
var args = cljs.core.seq(arglist__16643);
return G__16641__delegate(args);
});
G__16641.cljs$core$IFn$_invoke$arity$variadic = G__16641__delegate;
return G__16641;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16644__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16645__i = 0, G__16645__a = new Array(arguments.length -  0);
while (G__16645__i < G__16645__a.length) {G__16645__a[G__16645__i] = arguments[G__16645__i + 0]; ++G__16645__i;}
  args = new cljs.core.IndexedSeq(G__16645__a,0);
} 
return G__16644__delegate.call(this,args);};
G__16644.cljs$lang$maxFixedArity = 0;
G__16644.cljs$lang$applyTo = (function (arglist__16646){
var args = cljs.core.seq(arglist__16646);
return G__16644__delegate(args);
});
G__16644.cljs$core$IFn$_invoke$arity$variadic = G__16644__delegate;
return G__16644;
})()
;

return null;
});
