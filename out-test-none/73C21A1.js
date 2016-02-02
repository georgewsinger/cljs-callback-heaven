goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25167__i = 0, G__25167__a = new Array(arguments.length -  0);
while (G__25167__i < G__25167__a.length) {G__25167__a[G__25167__i] = arguments[G__25167__i + 0]; ++G__25167__i;}
  args = new cljs.core.IndexedSeq(G__25167__a,0);
} 
return G__25166__delegate.call(this,args);};
G__25166.cljs$lang$maxFixedArity = 0;
G__25166.cljs$lang$applyTo = (function (arglist__25168){
var args = cljs.core.seq(arglist__25168);
return G__25166__delegate(args);
});
G__25166.cljs$core$IFn$_invoke$arity$variadic = G__25166__delegate;
return G__25166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25170__i = 0, G__25170__a = new Array(arguments.length -  0);
while (G__25170__i < G__25170__a.length) {G__25170__a[G__25170__i] = arguments[G__25170__i + 0]; ++G__25170__i;}
  args = new cljs.core.IndexedSeq(G__25170__a,0);
} 
return G__25169__delegate.call(this,args);};
G__25169.cljs$lang$maxFixedArity = 0;
G__25169.cljs$lang$applyTo = (function (arglist__25171){
var args = cljs.core.seq(arglist__25171);
return G__25169__delegate(args);
});
G__25169.cljs$core$IFn$_invoke$arity$variadic = G__25169__delegate;
return G__25169;
})()
;

return null;
});
