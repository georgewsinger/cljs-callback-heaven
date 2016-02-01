goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8930__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8931__i = 0, G__8931__a = new Array(arguments.length -  0);
while (G__8931__i < G__8931__a.length) {G__8931__a[G__8931__i] = arguments[G__8931__i + 0]; ++G__8931__i;}
  args = new cljs.core.IndexedSeq(G__8931__a,0);
} 
return G__8930__delegate.call(this,args);};
G__8930.cljs$lang$maxFixedArity = 0;
G__8930.cljs$lang$applyTo = (function (arglist__8932){
var args = cljs.core.seq(arglist__8932);
return G__8930__delegate(args);
});
G__8930.cljs$core$IFn$_invoke$arity$variadic = G__8930__delegate;
return G__8930;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8933__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8934__i = 0, G__8934__a = new Array(arguments.length -  0);
while (G__8934__i < G__8934__a.length) {G__8934__a[G__8934__i] = arguments[G__8934__i + 0]; ++G__8934__i;}
  args = new cljs.core.IndexedSeq(G__8934__a,0);
} 
return G__8933__delegate.call(this,args);};
G__8933.cljs$lang$maxFixedArity = 0;
G__8933.cljs$lang$applyTo = (function (arglist__8935){
var args = cljs.core.seq(arglist__8935);
return G__8933__delegate(args);
});
G__8933.cljs$core$IFn$_invoke$arity$variadic = G__8933__delegate;
return G__8933;
})()
;

return null;
});
