goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15632__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15633__i = 0, G__15633__a = new Array(arguments.length -  0);
while (G__15633__i < G__15633__a.length) {G__15633__a[G__15633__i] = arguments[G__15633__i + 0]; ++G__15633__i;}
  args = new cljs.core.IndexedSeq(G__15633__a,0);
} 
return G__15632__delegate.call(this,args);};
G__15632.cljs$lang$maxFixedArity = 0;
G__15632.cljs$lang$applyTo = (function (arglist__15634){
var args = cljs.core.seq(arglist__15634);
return G__15632__delegate(args);
});
G__15632.cljs$core$IFn$_invoke$arity$variadic = G__15632__delegate;
return G__15632;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15635__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15636__i = 0, G__15636__a = new Array(arguments.length -  0);
while (G__15636__i < G__15636__a.length) {G__15636__a[G__15636__i] = arguments[G__15636__i + 0]; ++G__15636__i;}
  args = new cljs.core.IndexedSeq(G__15636__a,0);
} 
return G__15635__delegate.call(this,args);};
G__15635.cljs$lang$maxFixedArity = 0;
G__15635.cljs$lang$applyTo = (function (arglist__15637){
var args = cljs.core.seq(arglist__15637);
return G__15635__delegate(args);
});
G__15635.cljs$core$IFn$_invoke$arity$variadic = G__15635__delegate;
return G__15635;
})()
;

return null;
});
