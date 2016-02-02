goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16661__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16662__i = 0, G__16662__a = new Array(arguments.length -  0);
while (G__16662__i < G__16662__a.length) {G__16662__a[G__16662__i] = arguments[G__16662__i + 0]; ++G__16662__i;}
  args = new cljs.core.IndexedSeq(G__16662__a,0);
} 
return G__16661__delegate.call(this,args);};
G__16661.cljs$lang$maxFixedArity = 0;
G__16661.cljs$lang$applyTo = (function (arglist__16663){
var args = cljs.core.seq(arglist__16663);
return G__16661__delegate(args);
});
G__16661.cljs$core$IFn$_invoke$arity$variadic = G__16661__delegate;
return G__16661;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16664__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16665__i = 0, G__16665__a = new Array(arguments.length -  0);
while (G__16665__i < G__16665__a.length) {G__16665__a[G__16665__i] = arguments[G__16665__i + 0]; ++G__16665__i;}
  args = new cljs.core.IndexedSeq(G__16665__a,0);
} 
return G__16664__delegate.call(this,args);};
G__16664.cljs$lang$maxFixedArity = 0;
G__16664.cljs$lang$applyTo = (function (arglist__16666){
var args = cljs.core.seq(arglist__16666);
return G__16664__delegate(args);
});
G__16664.cljs$core$IFn$_invoke$arity$variadic = G__16664__delegate;
return G__16664;
})()
;

return null;
});
