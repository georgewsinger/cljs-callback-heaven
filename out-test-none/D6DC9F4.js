goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17534__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17535__i = 0, G__17535__a = new Array(arguments.length -  0);
while (G__17535__i < G__17535__a.length) {G__17535__a[G__17535__i] = arguments[G__17535__i + 0]; ++G__17535__i;}
  args = new cljs.core.IndexedSeq(G__17535__a,0);
} 
return G__17534__delegate.call(this,args);};
G__17534.cljs$lang$maxFixedArity = 0;
G__17534.cljs$lang$applyTo = (function (arglist__17536){
var args = cljs.core.seq(arglist__17536);
return G__17534__delegate(args);
});
G__17534.cljs$core$IFn$_invoke$arity$variadic = G__17534__delegate;
return G__17534;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17537__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17538__i = 0, G__17538__a = new Array(arguments.length -  0);
while (G__17538__i < G__17538__a.length) {G__17538__a[G__17538__i] = arguments[G__17538__i + 0]; ++G__17538__i;}
  args = new cljs.core.IndexedSeq(G__17538__a,0);
} 
return G__17537__delegate.call(this,args);};
G__17537.cljs$lang$maxFixedArity = 0;
G__17537.cljs$lang$applyTo = (function (arglist__17539){
var args = cljs.core.seq(arglist__17539);
return G__17537__delegate(args);
});
G__17537.cljs$core$IFn$_invoke$arity$variadic = G__17537__delegate;
return G__17537;
})()
;

return null;
});
