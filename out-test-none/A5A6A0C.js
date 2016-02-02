goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10561__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10562__i = 0, G__10562__a = new Array(arguments.length -  0);
while (G__10562__i < G__10562__a.length) {G__10562__a[G__10562__i] = arguments[G__10562__i + 0]; ++G__10562__i;}
  args = new cljs.core.IndexedSeq(G__10562__a,0);
} 
return G__10561__delegate.call(this,args);};
G__10561.cljs$lang$maxFixedArity = 0;
G__10561.cljs$lang$applyTo = (function (arglist__10563){
var args = cljs.core.seq(arglist__10563);
return G__10561__delegate(args);
});
G__10561.cljs$core$IFn$_invoke$arity$variadic = G__10561__delegate;
return G__10561;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10564__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10565__i = 0, G__10565__a = new Array(arguments.length -  0);
while (G__10565__i < G__10565__a.length) {G__10565__a[G__10565__i] = arguments[G__10565__i + 0]; ++G__10565__i;}
  args = new cljs.core.IndexedSeq(G__10565__a,0);
} 
return G__10564__delegate.call(this,args);};
G__10564.cljs$lang$maxFixedArity = 0;
G__10564.cljs$lang$applyTo = (function (arglist__10566){
var args = cljs.core.seq(arglist__10566);
return G__10564__delegate(args);
});
G__10564.cljs$core$IFn$_invoke$arity$variadic = G__10564__delegate;
return G__10564;
})()
;

return null;
});
