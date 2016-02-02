goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14784__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14785__i = 0, G__14785__a = new Array(arguments.length -  0);
while (G__14785__i < G__14785__a.length) {G__14785__a[G__14785__i] = arguments[G__14785__i + 0]; ++G__14785__i;}
  args = new cljs.core.IndexedSeq(G__14785__a,0);
} 
return G__14784__delegate.call(this,args);};
G__14784.cljs$lang$maxFixedArity = 0;
G__14784.cljs$lang$applyTo = (function (arglist__14786){
var args = cljs.core.seq(arglist__14786);
return G__14784__delegate(args);
});
G__14784.cljs$core$IFn$_invoke$arity$variadic = G__14784__delegate;
return G__14784;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14787__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14788__i = 0, G__14788__a = new Array(arguments.length -  0);
while (G__14788__i < G__14788__a.length) {G__14788__a[G__14788__i] = arguments[G__14788__i + 0]; ++G__14788__i;}
  args = new cljs.core.IndexedSeq(G__14788__a,0);
} 
return G__14787__delegate.call(this,args);};
G__14787.cljs$lang$maxFixedArity = 0;
G__14787.cljs$lang$applyTo = (function (arglist__14789){
var args = cljs.core.seq(arglist__14789);
return G__14787__delegate(args);
});
G__14787.cljs$core$IFn$_invoke$arity$variadic = G__14787__delegate;
return G__14787;
})()
;

return null;
});
