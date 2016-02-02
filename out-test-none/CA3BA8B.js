goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10628__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10629__i = 0, G__10629__a = new Array(arguments.length -  0);
while (G__10629__i < G__10629__a.length) {G__10629__a[G__10629__i] = arguments[G__10629__i + 0]; ++G__10629__i;}
  args = new cljs.core.IndexedSeq(G__10629__a,0);
} 
return G__10628__delegate.call(this,args);};
G__10628.cljs$lang$maxFixedArity = 0;
G__10628.cljs$lang$applyTo = (function (arglist__10630){
var args = cljs.core.seq(arglist__10630);
return G__10628__delegate(args);
});
G__10628.cljs$core$IFn$_invoke$arity$variadic = G__10628__delegate;
return G__10628;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10631__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10632__i = 0, G__10632__a = new Array(arguments.length -  0);
while (G__10632__i < G__10632__a.length) {G__10632__a[G__10632__i] = arguments[G__10632__i + 0]; ++G__10632__i;}
  args = new cljs.core.IndexedSeq(G__10632__a,0);
} 
return G__10631__delegate.call(this,args);};
G__10631.cljs$lang$maxFixedArity = 0;
G__10631.cljs$lang$applyTo = (function (arglist__10633){
var args = cljs.core.seq(arglist__10633);
return G__10631__delegate(args);
});
G__10631.cljs$core$IFn$_invoke$arity$variadic = G__10631__delegate;
return G__10631;
})()
;

return null;
});
