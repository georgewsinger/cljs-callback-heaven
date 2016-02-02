goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42447__i = 0, G__42447__a = new Array(arguments.length -  0);
while (G__42447__i < G__42447__a.length) {G__42447__a[G__42447__i] = arguments[G__42447__i + 0]; ++G__42447__i;}
  args = new cljs.core.IndexedSeq(G__42447__a,0);
} 
return G__42446__delegate.call(this,args);};
G__42446.cljs$lang$maxFixedArity = 0;
G__42446.cljs$lang$applyTo = (function (arglist__42448){
var args = cljs.core.seq(arglist__42448);
return G__42446__delegate(args);
});
G__42446.cljs$core$IFn$_invoke$arity$variadic = G__42446__delegate;
return G__42446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42450__i = 0, G__42450__a = new Array(arguments.length -  0);
while (G__42450__i < G__42450__a.length) {G__42450__a[G__42450__i] = arguments[G__42450__i + 0]; ++G__42450__i;}
  args = new cljs.core.IndexedSeq(G__42450__a,0);
} 
return G__42449__delegate.call(this,args);};
G__42449.cljs$lang$maxFixedArity = 0;
G__42449.cljs$lang$applyTo = (function (arglist__42451){
var args = cljs.core.seq(arglist__42451);
return G__42449__delegate(args);
});
G__42449.cljs$core$IFn$_invoke$arity$variadic = G__42449__delegate;
return G__42449;
})()
;

return null;
});
