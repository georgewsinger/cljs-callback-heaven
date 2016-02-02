goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33279__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33280__i = 0, G__33280__a = new Array(arguments.length -  0);
while (G__33280__i < G__33280__a.length) {G__33280__a[G__33280__i] = arguments[G__33280__i + 0]; ++G__33280__i;}
  args = new cljs.core.IndexedSeq(G__33280__a,0);
} 
return G__33279__delegate.call(this,args);};
G__33279.cljs$lang$maxFixedArity = 0;
G__33279.cljs$lang$applyTo = (function (arglist__33281){
var args = cljs.core.seq(arglist__33281);
return G__33279__delegate(args);
});
G__33279.cljs$core$IFn$_invoke$arity$variadic = G__33279__delegate;
return G__33279;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33282__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33283__i = 0, G__33283__a = new Array(arguments.length -  0);
while (G__33283__i < G__33283__a.length) {G__33283__a[G__33283__i] = arguments[G__33283__i + 0]; ++G__33283__i;}
  args = new cljs.core.IndexedSeq(G__33283__a,0);
} 
return G__33282__delegate.call(this,args);};
G__33282.cljs$lang$maxFixedArity = 0;
G__33282.cljs$lang$applyTo = (function (arglist__33284){
var args = cljs.core.seq(arglist__33284);
return G__33282__delegate(args);
});
G__33282.cljs$core$IFn$_invoke$arity$variadic = G__33282__delegate;
return G__33282;
})()
;

return null;
});
