goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9765__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9766__i = 0, G__9766__a = new Array(arguments.length -  0);
while (G__9766__i < G__9766__a.length) {G__9766__a[G__9766__i] = arguments[G__9766__i + 0]; ++G__9766__i;}
  args = new cljs.core.IndexedSeq(G__9766__a,0);
} 
return G__9765__delegate.call(this,args);};
G__9765.cljs$lang$maxFixedArity = 0;
G__9765.cljs$lang$applyTo = (function (arglist__9767){
var args = cljs.core.seq(arglist__9767);
return G__9765__delegate(args);
});
G__9765.cljs$core$IFn$_invoke$arity$variadic = G__9765__delegate;
return G__9765;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9768__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9769__i = 0, G__9769__a = new Array(arguments.length -  0);
while (G__9769__i < G__9769__a.length) {G__9769__a[G__9769__i] = arguments[G__9769__i + 0]; ++G__9769__i;}
  args = new cljs.core.IndexedSeq(G__9769__a,0);
} 
return G__9768__delegate.call(this,args);};
G__9768.cljs$lang$maxFixedArity = 0;
G__9768.cljs$lang$applyTo = (function (arglist__9770){
var args = cljs.core.seq(arglist__9770);
return G__9768__delegate(args);
});
G__9768.cljs$core$IFn$_invoke$arity$variadic = G__9768__delegate;
return G__9768;
})()
;

return null;
});
