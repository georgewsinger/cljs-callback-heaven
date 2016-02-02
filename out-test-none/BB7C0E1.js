goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9781__i = 0, G__9781__a = new Array(arguments.length -  0);
while (G__9781__i < G__9781__a.length) {G__9781__a[G__9781__i] = arguments[G__9781__i + 0]; ++G__9781__i;}
  args = new cljs.core.IndexedSeq(G__9781__a,0);
} 
return G__9780__delegate.call(this,args);};
G__9780.cljs$lang$maxFixedArity = 0;
G__9780.cljs$lang$applyTo = (function (arglist__9782){
var args = cljs.core.seq(arglist__9782);
return G__9780__delegate(args);
});
G__9780.cljs$core$IFn$_invoke$arity$variadic = G__9780__delegate;
return G__9780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9784__i = 0, G__9784__a = new Array(arguments.length -  0);
while (G__9784__i < G__9784__a.length) {G__9784__a[G__9784__i] = arguments[G__9784__i + 0]; ++G__9784__i;}
  args = new cljs.core.IndexedSeq(G__9784__a,0);
} 
return G__9783__delegate.call(this,args);};
G__9783.cljs$lang$maxFixedArity = 0;
G__9783.cljs$lang$applyTo = (function (arglist__9785){
var args = cljs.core.seq(arglist__9785);
return G__9783__delegate(args);
});
G__9783.cljs$core$IFn$_invoke$arity$variadic = G__9783__delegate;
return G__9783;
})()
;

return null;
});
