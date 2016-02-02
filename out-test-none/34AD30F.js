goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10180__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10181__i = 0, G__10181__a = new Array(arguments.length -  0);
while (G__10181__i < G__10181__a.length) {G__10181__a[G__10181__i] = arguments[G__10181__i + 0]; ++G__10181__i;}
  args = new cljs.core.IndexedSeq(G__10181__a,0);
} 
return G__10180__delegate.call(this,args);};
G__10180.cljs$lang$maxFixedArity = 0;
G__10180.cljs$lang$applyTo = (function (arglist__10182){
var args = cljs.core.seq(arglist__10182);
return G__10180__delegate(args);
});
G__10180.cljs$core$IFn$_invoke$arity$variadic = G__10180__delegate;
return G__10180;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10183__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10184__i = 0, G__10184__a = new Array(arguments.length -  0);
while (G__10184__i < G__10184__a.length) {G__10184__a[G__10184__i] = arguments[G__10184__i + 0]; ++G__10184__i;}
  args = new cljs.core.IndexedSeq(G__10184__a,0);
} 
return G__10183__delegate.call(this,args);};
G__10183.cljs$lang$maxFixedArity = 0;
G__10183.cljs$lang$applyTo = (function (arglist__10185){
var args = cljs.core.seq(arglist__10185);
return G__10183__delegate(args);
});
G__10183.cljs$core$IFn$_invoke$arity$variadic = G__10183__delegate;
return G__10183;
})()
;

return null;
});
