goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20132__i = 0, G__20132__a = new Array(arguments.length -  0);
while (G__20132__i < G__20132__a.length) {G__20132__a[G__20132__i] = arguments[G__20132__i + 0]; ++G__20132__i;}
  args = new cljs.core.IndexedSeq(G__20132__a,0);
} 
return G__20131__delegate.call(this,args);};
G__20131.cljs$lang$maxFixedArity = 0;
G__20131.cljs$lang$applyTo = (function (arglist__20133){
var args = cljs.core.seq(arglist__20133);
return G__20131__delegate(args);
});
G__20131.cljs$core$IFn$_invoke$arity$variadic = G__20131__delegate;
return G__20131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20135__i = 0, G__20135__a = new Array(arguments.length -  0);
while (G__20135__i < G__20135__a.length) {G__20135__a[G__20135__i] = arguments[G__20135__i + 0]; ++G__20135__i;}
  args = new cljs.core.IndexedSeq(G__20135__a,0);
} 
return G__20134__delegate.call(this,args);};
G__20134.cljs$lang$maxFixedArity = 0;
G__20134.cljs$lang$applyTo = (function (arglist__20136){
var args = cljs.core.seq(arglist__20136);
return G__20134__delegate(args);
});
G__20134.cljs$core$IFn$_invoke$arity$variadic = G__20134__delegate;
return G__20134;
})()
;

return null;
});
