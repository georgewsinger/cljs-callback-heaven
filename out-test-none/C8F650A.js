goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16177__i = 0, G__16177__a = new Array(arguments.length -  0);
while (G__16177__i < G__16177__a.length) {G__16177__a[G__16177__i] = arguments[G__16177__i + 0]; ++G__16177__i;}
  args = new cljs.core.IndexedSeq(G__16177__a,0);
} 
return G__16176__delegate.call(this,args);};
G__16176.cljs$lang$maxFixedArity = 0;
G__16176.cljs$lang$applyTo = (function (arglist__16178){
var args = cljs.core.seq(arglist__16178);
return G__16176__delegate(args);
});
G__16176.cljs$core$IFn$_invoke$arity$variadic = G__16176__delegate;
return G__16176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16180__i = 0, G__16180__a = new Array(arguments.length -  0);
while (G__16180__i < G__16180__a.length) {G__16180__a[G__16180__i] = arguments[G__16180__i + 0]; ++G__16180__i;}
  args = new cljs.core.IndexedSeq(G__16180__a,0);
} 
return G__16179__delegate.call(this,args);};
G__16179.cljs$lang$maxFixedArity = 0;
G__16179.cljs$lang$applyTo = (function (arglist__16181){
var args = cljs.core.seq(arglist__16181);
return G__16179__delegate(args);
});
G__16179.cljs$core$IFn$_invoke$arity$variadic = G__16179__delegate;
return G__16179;
})()
;

return null;
});
