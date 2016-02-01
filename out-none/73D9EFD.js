goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9104__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9105__i = 0, G__9105__a = new Array(arguments.length -  0);
while (G__9105__i < G__9105__a.length) {G__9105__a[G__9105__i] = arguments[G__9105__i + 0]; ++G__9105__i;}
  args = new cljs.core.IndexedSeq(G__9105__a,0);
} 
return G__9104__delegate.call(this,args);};
G__9104.cljs$lang$maxFixedArity = 0;
G__9104.cljs$lang$applyTo = (function (arglist__9106){
var args = cljs.core.seq(arglist__9106);
return G__9104__delegate(args);
});
G__9104.cljs$core$IFn$_invoke$arity$variadic = G__9104__delegate;
return G__9104;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9107__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9108__i = 0, G__9108__a = new Array(arguments.length -  0);
while (G__9108__i < G__9108__a.length) {G__9108__a[G__9108__i] = arguments[G__9108__i + 0]; ++G__9108__i;}
  args = new cljs.core.IndexedSeq(G__9108__a,0);
} 
return G__9107__delegate.call(this,args);};
G__9107.cljs$lang$maxFixedArity = 0;
G__9107.cljs$lang$applyTo = (function (arglist__9109){
var args = cljs.core.seq(arglist__9109);
return G__9107__delegate(args);
});
G__9107.cljs$core$IFn$_invoke$arity$variadic = G__9107__delegate;
return G__9107;
})()
;

return null;
});
