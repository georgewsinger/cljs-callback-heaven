goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__247765__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__247765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247766__i = 0, G__247766__a = new Array(arguments.length -  0);
while (G__247766__i < G__247766__a.length) {G__247766__a[G__247766__i] = arguments[G__247766__i + 0]; ++G__247766__i;}
  args = new cljs.core.IndexedSeq(G__247766__a,0);
} 
return G__247765__delegate.call(this,args);};
G__247765.cljs$lang$maxFixedArity = 0;
G__247765.cljs$lang$applyTo = (function (arglist__247767){
var args = cljs.core.seq(arglist__247767);
return G__247765__delegate(args);
});
G__247765.cljs$core$IFn$_invoke$arity$variadic = G__247765__delegate;
return G__247765;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__247768__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__247768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247769__i = 0, G__247769__a = new Array(arguments.length -  0);
while (G__247769__i < G__247769__a.length) {G__247769__a[G__247769__i] = arguments[G__247769__i + 0]; ++G__247769__i;}
  args = new cljs.core.IndexedSeq(G__247769__a,0);
} 
return G__247768__delegate.call(this,args);};
G__247768.cljs$lang$maxFixedArity = 0;
G__247768.cljs$lang$applyTo = (function (arglist__247770){
var args = cljs.core.seq(arglist__247770);
return G__247768__delegate(args);
});
G__247768.cljs$core$IFn$_invoke$arity$variadic = G__247768__delegate;
return G__247768;
})()
;

return null;
});
