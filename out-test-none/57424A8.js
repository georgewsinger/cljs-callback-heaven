goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16308__i = 0, G__16308__a = new Array(arguments.length -  0);
while (G__16308__i < G__16308__a.length) {G__16308__a[G__16308__i] = arguments[G__16308__i + 0]; ++G__16308__i;}
  args = new cljs.core.IndexedSeq(G__16308__a,0);
} 
return G__16307__delegate.call(this,args);};
G__16307.cljs$lang$maxFixedArity = 0;
G__16307.cljs$lang$applyTo = (function (arglist__16309){
var args = cljs.core.seq(arglist__16309);
return G__16307__delegate(args);
});
G__16307.cljs$core$IFn$_invoke$arity$variadic = G__16307__delegate;
return G__16307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16311__i = 0, G__16311__a = new Array(arguments.length -  0);
while (G__16311__i < G__16311__a.length) {G__16311__a[G__16311__i] = arguments[G__16311__i + 0]; ++G__16311__i;}
  args = new cljs.core.IndexedSeq(G__16311__a,0);
} 
return G__16310__delegate.call(this,args);};
G__16310.cljs$lang$maxFixedArity = 0;
G__16310.cljs$lang$applyTo = (function (arglist__16312){
var args = cljs.core.seq(arglist__16312);
return G__16310__delegate(args);
});
G__16310.cljs$core$IFn$_invoke$arity$variadic = G__16310__delegate;
return G__16310;
})()
;

return null;
});
