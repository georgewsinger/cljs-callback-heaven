goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13639__i = 0, G__13639__a = new Array(arguments.length -  0);
while (G__13639__i < G__13639__a.length) {G__13639__a[G__13639__i] = arguments[G__13639__i + 0]; ++G__13639__i;}
  args = new cljs.core.IndexedSeq(G__13639__a,0);
} 
return G__13638__delegate.call(this,args);};
G__13638.cljs$lang$maxFixedArity = 0;
G__13638.cljs$lang$applyTo = (function (arglist__13640){
var args = cljs.core.seq(arglist__13640);
return G__13638__delegate(args);
});
G__13638.cljs$core$IFn$_invoke$arity$variadic = G__13638__delegate;
return G__13638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13642__i = 0, G__13642__a = new Array(arguments.length -  0);
while (G__13642__i < G__13642__a.length) {G__13642__a[G__13642__i] = arguments[G__13642__i + 0]; ++G__13642__i;}
  args = new cljs.core.IndexedSeq(G__13642__a,0);
} 
return G__13641__delegate.call(this,args);};
G__13641.cljs$lang$maxFixedArity = 0;
G__13641.cljs$lang$applyTo = (function (arglist__13643){
var args = cljs.core.seq(arglist__13643);
return G__13641__delegate(args);
});
G__13641.cljs$core$IFn$_invoke$arity$variadic = G__13641__delegate;
return G__13641;
})()
;

return null;
});
