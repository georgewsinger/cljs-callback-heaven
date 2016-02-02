goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18422__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18423__i = 0, G__18423__a = new Array(arguments.length -  0);
while (G__18423__i < G__18423__a.length) {G__18423__a[G__18423__i] = arguments[G__18423__i + 0]; ++G__18423__i;}
  args = new cljs.core.IndexedSeq(G__18423__a,0);
} 
return G__18422__delegate.call(this,args);};
G__18422.cljs$lang$maxFixedArity = 0;
G__18422.cljs$lang$applyTo = (function (arglist__18424){
var args = cljs.core.seq(arglist__18424);
return G__18422__delegate(args);
});
G__18422.cljs$core$IFn$_invoke$arity$variadic = G__18422__delegate;
return G__18422;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18425__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18426__i = 0, G__18426__a = new Array(arguments.length -  0);
while (G__18426__i < G__18426__a.length) {G__18426__a[G__18426__i] = arguments[G__18426__i + 0]; ++G__18426__i;}
  args = new cljs.core.IndexedSeq(G__18426__a,0);
} 
return G__18425__delegate.call(this,args);};
G__18425.cljs$lang$maxFixedArity = 0;
G__18425.cljs$lang$applyTo = (function (arglist__18427){
var args = cljs.core.seq(arglist__18427);
return G__18425__delegate(args);
});
G__18425.cljs$core$IFn$_invoke$arity$variadic = G__18425__delegate;
return G__18425;
})()
;

return null;
});
