goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37279__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37280__i = 0, G__37280__a = new Array(arguments.length -  0);
while (G__37280__i < G__37280__a.length) {G__37280__a[G__37280__i] = arguments[G__37280__i + 0]; ++G__37280__i;}
  args = new cljs.core.IndexedSeq(G__37280__a,0);
} 
return G__37279__delegate.call(this,args);};
G__37279.cljs$lang$maxFixedArity = 0;
G__37279.cljs$lang$applyTo = (function (arglist__37281){
var args = cljs.core.seq(arglist__37281);
return G__37279__delegate(args);
});
G__37279.cljs$core$IFn$_invoke$arity$variadic = G__37279__delegate;
return G__37279;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37282__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37283__i = 0, G__37283__a = new Array(arguments.length -  0);
while (G__37283__i < G__37283__a.length) {G__37283__a[G__37283__i] = arguments[G__37283__i + 0]; ++G__37283__i;}
  args = new cljs.core.IndexedSeq(G__37283__a,0);
} 
return G__37282__delegate.call(this,args);};
G__37282.cljs$lang$maxFixedArity = 0;
G__37282.cljs$lang$applyTo = (function (arglist__37284){
var args = cljs.core.seq(arglist__37284);
return G__37282__delegate(args);
});
G__37282.cljs$core$IFn$_invoke$arity$variadic = G__37282__delegate;
return G__37282;
})()
;

return null;
});
