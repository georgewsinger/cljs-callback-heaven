goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41637__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41638__i = 0, G__41638__a = new Array(arguments.length -  0);
while (G__41638__i < G__41638__a.length) {G__41638__a[G__41638__i] = arguments[G__41638__i + 0]; ++G__41638__i;}
  args = new cljs.core.IndexedSeq(G__41638__a,0);
} 
return G__41637__delegate.call(this,args);};
G__41637.cljs$lang$maxFixedArity = 0;
G__41637.cljs$lang$applyTo = (function (arglist__41639){
var args = cljs.core.seq(arglist__41639);
return G__41637__delegate(args);
});
G__41637.cljs$core$IFn$_invoke$arity$variadic = G__41637__delegate;
return G__41637;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41640__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41641__i = 0, G__41641__a = new Array(arguments.length -  0);
while (G__41641__i < G__41641__a.length) {G__41641__a[G__41641__i] = arguments[G__41641__i + 0]; ++G__41641__i;}
  args = new cljs.core.IndexedSeq(G__41641__a,0);
} 
return G__41640__delegate.call(this,args);};
G__41640.cljs$lang$maxFixedArity = 0;
G__41640.cljs$lang$applyTo = (function (arglist__41642){
var args = cljs.core.seq(arglist__41642);
return G__41640__delegate(args);
});
G__41640.cljs$core$IFn$_invoke$arity$variadic = G__41640__delegate;
return G__41640;
})()
;

return null;
});
