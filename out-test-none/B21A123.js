goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__241638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__241638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241639__i = 0, G__241639__a = new Array(arguments.length -  0);
while (G__241639__i < G__241639__a.length) {G__241639__a[G__241639__i] = arguments[G__241639__i + 0]; ++G__241639__i;}
  args = new cljs.core.IndexedSeq(G__241639__a,0);
} 
return G__241638__delegate.call(this,args);};
G__241638.cljs$lang$maxFixedArity = 0;
G__241638.cljs$lang$applyTo = (function (arglist__241640){
var args = cljs.core.seq(arglist__241640);
return G__241638__delegate(args);
});
G__241638.cljs$core$IFn$_invoke$arity$variadic = G__241638__delegate;
return G__241638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__241641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__241641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241642__i = 0, G__241642__a = new Array(arguments.length -  0);
while (G__241642__i < G__241642__a.length) {G__241642__a[G__241642__i] = arguments[G__241642__i + 0]; ++G__241642__i;}
  args = new cljs.core.IndexedSeq(G__241642__a,0);
} 
return G__241641__delegate.call(this,args);};
G__241641.cljs$lang$maxFixedArity = 0;
G__241641.cljs$lang$applyTo = (function (arglist__241643){
var args = cljs.core.seq(arglist__241643);
return G__241641__delegate(args);
});
G__241641.cljs$core$IFn$_invoke$arity$variadic = G__241641__delegate;
return G__241641;
})()
;

return null;
});
