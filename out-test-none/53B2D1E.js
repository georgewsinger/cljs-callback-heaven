goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13483__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13484__i = 0, G__13484__a = new Array(arguments.length -  0);
while (G__13484__i < G__13484__a.length) {G__13484__a[G__13484__i] = arguments[G__13484__i + 0]; ++G__13484__i;}
  args = new cljs.core.IndexedSeq(G__13484__a,0);
} 
return G__13483__delegate.call(this,args);};
G__13483.cljs$lang$maxFixedArity = 0;
G__13483.cljs$lang$applyTo = (function (arglist__13485){
var args = cljs.core.seq(arglist__13485);
return G__13483__delegate(args);
});
G__13483.cljs$core$IFn$_invoke$arity$variadic = G__13483__delegate;
return G__13483;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13486__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13487__i = 0, G__13487__a = new Array(arguments.length -  0);
while (G__13487__i < G__13487__a.length) {G__13487__a[G__13487__i] = arguments[G__13487__i + 0]; ++G__13487__i;}
  args = new cljs.core.IndexedSeq(G__13487__a,0);
} 
return G__13486__delegate.call(this,args);};
G__13486.cljs$lang$maxFixedArity = 0;
G__13486.cljs$lang$applyTo = (function (arglist__13488){
var args = cljs.core.seq(arglist__13488);
return G__13486__delegate(args);
});
G__13486.cljs$core$IFn$_invoke$arity$variadic = G__13486__delegate;
return G__13486;
})()
;

return null;
});
