goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17050__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17051__i = 0, G__17051__a = new Array(arguments.length -  0);
while (G__17051__i < G__17051__a.length) {G__17051__a[G__17051__i] = arguments[G__17051__i + 0]; ++G__17051__i;}
  args = new cljs.core.IndexedSeq(G__17051__a,0);
} 
return G__17050__delegate.call(this,args);};
G__17050.cljs$lang$maxFixedArity = 0;
G__17050.cljs$lang$applyTo = (function (arglist__17052){
var args = cljs.core.seq(arglist__17052);
return G__17050__delegate(args);
});
G__17050.cljs$core$IFn$_invoke$arity$variadic = G__17050__delegate;
return G__17050;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17053__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17054__i = 0, G__17054__a = new Array(arguments.length -  0);
while (G__17054__i < G__17054__a.length) {G__17054__a[G__17054__i] = arguments[G__17054__i + 0]; ++G__17054__i;}
  args = new cljs.core.IndexedSeq(G__17054__a,0);
} 
return G__17053__delegate.call(this,args);};
G__17053.cljs$lang$maxFixedArity = 0;
G__17053.cljs$lang$applyTo = (function (arglist__17055){
var args = cljs.core.seq(arglist__17055);
return G__17053__delegate(args);
});
G__17053.cljs$core$IFn$_invoke$arity$variadic = G__17053__delegate;
return G__17053;
})()
;

return null;
});
