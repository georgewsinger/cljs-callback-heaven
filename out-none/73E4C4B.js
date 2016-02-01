goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9655__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9656__i = 0, G__9656__a = new Array(arguments.length -  0);
while (G__9656__i < G__9656__a.length) {G__9656__a[G__9656__i] = arguments[G__9656__i + 0]; ++G__9656__i;}
  args = new cljs.core.IndexedSeq(G__9656__a,0);
} 
return G__9655__delegate.call(this,args);};
G__9655.cljs$lang$maxFixedArity = 0;
G__9655.cljs$lang$applyTo = (function (arglist__9657){
var args = cljs.core.seq(arglist__9657);
return G__9655__delegate(args);
});
G__9655.cljs$core$IFn$_invoke$arity$variadic = G__9655__delegate;
return G__9655;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9658__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9659__i = 0, G__9659__a = new Array(arguments.length -  0);
while (G__9659__i < G__9659__a.length) {G__9659__a[G__9659__i] = arguments[G__9659__i + 0]; ++G__9659__i;}
  args = new cljs.core.IndexedSeq(G__9659__a,0);
} 
return G__9658__delegate.call(this,args);};
G__9658.cljs$lang$maxFixedArity = 0;
G__9658.cljs$lang$applyTo = (function (arglist__9660){
var args = cljs.core.seq(arglist__9660);
return G__9658__delegate(args);
});
G__9658.cljs$core$IFn$_invoke$arity$variadic = G__9658__delegate;
return G__9658;
})()
;

return null;
});
