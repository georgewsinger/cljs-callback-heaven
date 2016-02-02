goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__265576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__265576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265577__i = 0, G__265577__a = new Array(arguments.length -  0);
while (G__265577__i < G__265577__a.length) {G__265577__a[G__265577__i] = arguments[G__265577__i + 0]; ++G__265577__i;}
  args = new cljs.core.IndexedSeq(G__265577__a,0);
} 
return G__265576__delegate.call(this,args);};
G__265576.cljs$lang$maxFixedArity = 0;
G__265576.cljs$lang$applyTo = (function (arglist__265578){
var args = cljs.core.seq(arglist__265578);
return G__265576__delegate(args);
});
G__265576.cljs$core$IFn$_invoke$arity$variadic = G__265576__delegate;
return G__265576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__265579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__265579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265580__i = 0, G__265580__a = new Array(arguments.length -  0);
while (G__265580__i < G__265580__a.length) {G__265580__a[G__265580__i] = arguments[G__265580__i + 0]; ++G__265580__i;}
  args = new cljs.core.IndexedSeq(G__265580__a,0);
} 
return G__265579__delegate.call(this,args);};
G__265579.cljs$lang$maxFixedArity = 0;
G__265579.cljs$lang$applyTo = (function (arglist__265581){
var args = cljs.core.seq(arglist__265581);
return G__265579__delegate(args);
});
G__265579.cljs$core$IFn$_invoke$arity$variadic = G__265579__delegate;
return G__265579;
})()
;

return null;
});
