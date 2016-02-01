goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9567__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9568__i = 0, G__9568__a = new Array(arguments.length -  0);
while (G__9568__i < G__9568__a.length) {G__9568__a[G__9568__i] = arguments[G__9568__i + 0]; ++G__9568__i;}
  args = new cljs.core.IndexedSeq(G__9568__a,0);
} 
return G__9567__delegate.call(this,args);};
G__9567.cljs$lang$maxFixedArity = 0;
G__9567.cljs$lang$applyTo = (function (arglist__9569){
var args = cljs.core.seq(arglist__9569);
return G__9567__delegate(args);
});
G__9567.cljs$core$IFn$_invoke$arity$variadic = G__9567__delegate;
return G__9567;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9570__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9571__i = 0, G__9571__a = new Array(arguments.length -  0);
while (G__9571__i < G__9571__a.length) {G__9571__a[G__9571__i] = arguments[G__9571__i + 0]; ++G__9571__i;}
  args = new cljs.core.IndexedSeq(G__9571__a,0);
} 
return G__9570__delegate.call(this,args);};
G__9570.cljs$lang$maxFixedArity = 0;
G__9570.cljs$lang$applyTo = (function (arglist__9572){
var args = cljs.core.seq(arglist__9572);
return G__9570__delegate(args);
});
G__9570.cljs$core$IFn$_invoke$arity$variadic = G__9570__delegate;
return G__9570;
})()
;

return null;
});
