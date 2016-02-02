goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10328__i = 0, G__10328__a = new Array(arguments.length -  0);
while (G__10328__i < G__10328__a.length) {G__10328__a[G__10328__i] = arguments[G__10328__i + 0]; ++G__10328__i;}
  args = new cljs.core.IndexedSeq(G__10328__a,0);
} 
return G__10327__delegate.call(this,args);};
G__10327.cljs$lang$maxFixedArity = 0;
G__10327.cljs$lang$applyTo = (function (arglist__10329){
var args = cljs.core.seq(arglist__10329);
return G__10327__delegate(args);
});
G__10327.cljs$core$IFn$_invoke$arity$variadic = G__10327__delegate;
return G__10327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10331__i = 0, G__10331__a = new Array(arguments.length -  0);
while (G__10331__i < G__10331__a.length) {G__10331__a[G__10331__i] = arguments[G__10331__i + 0]; ++G__10331__i;}
  args = new cljs.core.IndexedSeq(G__10331__a,0);
} 
return G__10330__delegate.call(this,args);};
G__10330.cljs$lang$maxFixedArity = 0;
G__10330.cljs$lang$applyTo = (function (arglist__10332){
var args = cljs.core.seq(arglist__10332);
return G__10330__delegate(args);
});
G__10330.cljs$core$IFn$_invoke$arity$variadic = G__10330__delegate;
return G__10330;
})()
;

return null;
});
