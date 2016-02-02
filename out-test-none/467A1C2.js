goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18762__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18763__i = 0, G__18763__a = new Array(arguments.length -  0);
while (G__18763__i < G__18763__a.length) {G__18763__a[G__18763__i] = arguments[G__18763__i + 0]; ++G__18763__i;}
  args = new cljs.core.IndexedSeq(G__18763__a,0);
} 
return G__18762__delegate.call(this,args);};
G__18762.cljs$lang$maxFixedArity = 0;
G__18762.cljs$lang$applyTo = (function (arglist__18764){
var args = cljs.core.seq(arglist__18764);
return G__18762__delegate(args);
});
G__18762.cljs$core$IFn$_invoke$arity$variadic = G__18762__delegate;
return G__18762;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18765__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18766__i = 0, G__18766__a = new Array(arguments.length -  0);
while (G__18766__i < G__18766__a.length) {G__18766__a[G__18766__i] = arguments[G__18766__i + 0]; ++G__18766__i;}
  args = new cljs.core.IndexedSeq(G__18766__a,0);
} 
return G__18765__delegate.call(this,args);};
G__18765.cljs$lang$maxFixedArity = 0;
G__18765.cljs$lang$applyTo = (function (arglist__18767){
var args = cljs.core.seq(arglist__18767);
return G__18765__delegate(args);
});
G__18765.cljs$core$IFn$_invoke$arity$variadic = G__18765__delegate;
return G__18765;
})()
;

return null;
});
