goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10324__i = 0, G__10324__a = new Array(arguments.length -  0);
while (G__10324__i < G__10324__a.length) {G__10324__a[G__10324__i] = arguments[G__10324__i + 0]; ++G__10324__i;}
  args = new cljs.core.IndexedSeq(G__10324__a,0);
} 
return G__10323__delegate.call(this,args);};
G__10323.cljs$lang$maxFixedArity = 0;
G__10323.cljs$lang$applyTo = (function (arglist__10325){
var args = cljs.core.seq(arglist__10325);
return G__10323__delegate(args);
});
G__10323.cljs$core$IFn$_invoke$arity$variadic = G__10323__delegate;
return G__10323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10327__i = 0, G__10327__a = new Array(arguments.length -  0);
while (G__10327__i < G__10327__a.length) {G__10327__a[G__10327__i] = arguments[G__10327__i + 0]; ++G__10327__i;}
  args = new cljs.core.IndexedSeq(G__10327__a,0);
} 
return G__10326__delegate.call(this,args);};
G__10326.cljs$lang$maxFixedArity = 0;
G__10326.cljs$lang$applyTo = (function (arglist__10328){
var args = cljs.core.seq(arglist__10328);
return G__10326__delegate(args);
});
G__10326.cljs$core$IFn$_invoke$arity$variadic = G__10326__delegate;
return G__10326;
})()
;

return null;
});
