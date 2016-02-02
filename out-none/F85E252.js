goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37766__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37767__i = 0, G__37767__a = new Array(arguments.length -  0);
while (G__37767__i < G__37767__a.length) {G__37767__a[G__37767__i] = arguments[G__37767__i + 0]; ++G__37767__i;}
  args = new cljs.core.IndexedSeq(G__37767__a,0);
} 
return G__37766__delegate.call(this,args);};
G__37766.cljs$lang$maxFixedArity = 0;
G__37766.cljs$lang$applyTo = (function (arglist__37768){
var args = cljs.core.seq(arglist__37768);
return G__37766__delegate(args);
});
G__37766.cljs$core$IFn$_invoke$arity$variadic = G__37766__delegate;
return G__37766;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37769__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37770__i = 0, G__37770__a = new Array(arguments.length -  0);
while (G__37770__i < G__37770__a.length) {G__37770__a[G__37770__i] = arguments[G__37770__i + 0]; ++G__37770__i;}
  args = new cljs.core.IndexedSeq(G__37770__a,0);
} 
return G__37769__delegate.call(this,args);};
G__37769.cljs$lang$maxFixedArity = 0;
G__37769.cljs$lang$applyTo = (function (arglist__37771){
var args = cljs.core.seq(arglist__37771);
return G__37769__delegate(args);
});
G__37769.cljs$core$IFn$_invoke$arity$variadic = G__37769__delegate;
return G__37769;
})()
;

return null;
});
