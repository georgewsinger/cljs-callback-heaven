goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15977__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15978__i = 0, G__15978__a = new Array(arguments.length -  0);
while (G__15978__i < G__15978__a.length) {G__15978__a[G__15978__i] = arguments[G__15978__i + 0]; ++G__15978__i;}
  args = new cljs.core.IndexedSeq(G__15978__a,0);
} 
return G__15977__delegate.call(this,args);};
G__15977.cljs$lang$maxFixedArity = 0;
G__15977.cljs$lang$applyTo = (function (arglist__15979){
var args = cljs.core.seq(arglist__15979);
return G__15977__delegate(args);
});
G__15977.cljs$core$IFn$_invoke$arity$variadic = G__15977__delegate;
return G__15977;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15980__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15981__i = 0, G__15981__a = new Array(arguments.length -  0);
while (G__15981__i < G__15981__a.length) {G__15981__a[G__15981__i] = arguments[G__15981__i + 0]; ++G__15981__i;}
  args = new cljs.core.IndexedSeq(G__15981__a,0);
} 
return G__15980__delegate.call(this,args);};
G__15980.cljs$lang$maxFixedArity = 0;
G__15980.cljs$lang$applyTo = (function (arglist__15982){
var args = cljs.core.seq(arglist__15982);
return G__15980__delegate(args);
});
G__15980.cljs$core$IFn$_invoke$arity$variadic = G__15980__delegate;
return G__15980;
})()
;

return null;
});
