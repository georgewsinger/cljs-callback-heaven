goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34190__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34191__i = 0, G__34191__a = new Array(arguments.length -  0);
while (G__34191__i < G__34191__a.length) {G__34191__a[G__34191__i] = arguments[G__34191__i + 0]; ++G__34191__i;}
  args = new cljs.core.IndexedSeq(G__34191__a,0);
} 
return G__34190__delegate.call(this,args);};
G__34190.cljs$lang$maxFixedArity = 0;
G__34190.cljs$lang$applyTo = (function (arglist__34192){
var args = cljs.core.seq(arglist__34192);
return G__34190__delegate(args);
});
G__34190.cljs$core$IFn$_invoke$arity$variadic = G__34190__delegate;
return G__34190;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34193__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34194__i = 0, G__34194__a = new Array(arguments.length -  0);
while (G__34194__i < G__34194__a.length) {G__34194__a[G__34194__i] = arguments[G__34194__i + 0]; ++G__34194__i;}
  args = new cljs.core.IndexedSeq(G__34194__a,0);
} 
return G__34193__delegate.call(this,args);};
G__34193.cljs$lang$maxFixedArity = 0;
G__34193.cljs$lang$applyTo = (function (arglist__34195){
var args = cljs.core.seq(arglist__34195);
return G__34193__delegate(args);
});
G__34193.cljs$core$IFn$_invoke$arity$variadic = G__34193__delegate;
return G__34193;
})()
;

return null;
});
