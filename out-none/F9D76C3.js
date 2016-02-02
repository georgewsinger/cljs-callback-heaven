goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18424__i = 0, G__18424__a = new Array(arguments.length -  0);
while (G__18424__i < G__18424__a.length) {G__18424__a[G__18424__i] = arguments[G__18424__i + 0]; ++G__18424__i;}
  args = new cljs.core.IndexedSeq(G__18424__a,0);
} 
return G__18423__delegate.call(this,args);};
G__18423.cljs$lang$maxFixedArity = 0;
G__18423.cljs$lang$applyTo = (function (arglist__18425){
var args = cljs.core.seq(arglist__18425);
return G__18423__delegate(args);
});
G__18423.cljs$core$IFn$_invoke$arity$variadic = G__18423__delegate;
return G__18423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18427__i = 0, G__18427__a = new Array(arguments.length -  0);
while (G__18427__i < G__18427__a.length) {G__18427__a[G__18427__i] = arguments[G__18427__i + 0]; ++G__18427__i;}
  args = new cljs.core.IndexedSeq(G__18427__a,0);
} 
return G__18426__delegate.call(this,args);};
G__18426.cljs$lang$maxFixedArity = 0;
G__18426.cljs$lang$applyTo = (function (arglist__18428){
var args = cljs.core.seq(arglist__18428);
return G__18426__delegate(args);
});
G__18426.cljs$core$IFn$_invoke$arity$variadic = G__18426__delegate;
return G__18426;
})()
;

return null;
});
