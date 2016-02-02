goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__72560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__72560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72561__i = 0, G__72561__a = new Array(arguments.length -  0);
while (G__72561__i < G__72561__a.length) {G__72561__a[G__72561__i] = arguments[G__72561__i + 0]; ++G__72561__i;}
  args = new cljs.core.IndexedSeq(G__72561__a,0);
} 
return G__72560__delegate.call(this,args);};
G__72560.cljs$lang$maxFixedArity = 0;
G__72560.cljs$lang$applyTo = (function (arglist__72562){
var args = cljs.core.seq(arglist__72562);
return G__72560__delegate(args);
});
G__72560.cljs$core$IFn$_invoke$arity$variadic = G__72560__delegate;
return G__72560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__72563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__72563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72564__i = 0, G__72564__a = new Array(arguments.length -  0);
while (G__72564__i < G__72564__a.length) {G__72564__a[G__72564__i] = arguments[G__72564__i + 0]; ++G__72564__i;}
  args = new cljs.core.IndexedSeq(G__72564__a,0);
} 
return G__72563__delegate.call(this,args);};
G__72563.cljs$lang$maxFixedArity = 0;
G__72563.cljs$lang$applyTo = (function (arglist__72565){
var args = cljs.core.seq(arglist__72565);
return G__72563__delegate(args);
});
G__72563.cljs$core$IFn$_invoke$arity$variadic = G__72563__delegate;
return G__72563;
})()
;

return null;
});
