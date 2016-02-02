goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16754__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16755__i = 0, G__16755__a = new Array(arguments.length -  0);
while (G__16755__i < G__16755__a.length) {G__16755__a[G__16755__i] = arguments[G__16755__i + 0]; ++G__16755__i;}
  args = new cljs.core.IndexedSeq(G__16755__a,0);
} 
return G__16754__delegate.call(this,args);};
G__16754.cljs$lang$maxFixedArity = 0;
G__16754.cljs$lang$applyTo = (function (arglist__16756){
var args = cljs.core.seq(arglist__16756);
return G__16754__delegate(args);
});
G__16754.cljs$core$IFn$_invoke$arity$variadic = G__16754__delegate;
return G__16754;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16757__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16758__i = 0, G__16758__a = new Array(arguments.length -  0);
while (G__16758__i < G__16758__a.length) {G__16758__a[G__16758__i] = arguments[G__16758__i + 0]; ++G__16758__i;}
  args = new cljs.core.IndexedSeq(G__16758__a,0);
} 
return G__16757__delegate.call(this,args);};
G__16757.cljs$lang$maxFixedArity = 0;
G__16757.cljs$lang$applyTo = (function (arglist__16759){
var args = cljs.core.seq(arglist__16759);
return G__16757__delegate(args);
});
G__16757.cljs$core$IFn$_invoke$arity$variadic = G__16757__delegate;
return G__16757;
})()
;

return null;
});
