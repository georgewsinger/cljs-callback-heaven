goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__232819__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__232819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__232820__i = 0, G__232820__a = new Array(arguments.length -  0);
while (G__232820__i < G__232820__a.length) {G__232820__a[G__232820__i] = arguments[G__232820__i + 0]; ++G__232820__i;}
  args = new cljs.core.IndexedSeq(G__232820__a,0);
} 
return G__232819__delegate.call(this,args);};
G__232819.cljs$lang$maxFixedArity = 0;
G__232819.cljs$lang$applyTo = (function (arglist__232821){
var args = cljs.core.seq(arglist__232821);
return G__232819__delegate(args);
});
G__232819.cljs$core$IFn$_invoke$arity$variadic = G__232819__delegate;
return G__232819;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__232822__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__232822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__232823__i = 0, G__232823__a = new Array(arguments.length -  0);
while (G__232823__i < G__232823__a.length) {G__232823__a[G__232823__i] = arguments[G__232823__i + 0]; ++G__232823__i;}
  args = new cljs.core.IndexedSeq(G__232823__a,0);
} 
return G__232822__delegate.call(this,args);};
G__232822.cljs$lang$maxFixedArity = 0;
G__232822.cljs$lang$applyTo = (function (arglist__232824){
var args = cljs.core.seq(arglist__232824);
return G__232822__delegate(args);
});
G__232822.cljs$core$IFn$_invoke$arity$variadic = G__232822__delegate;
return G__232822;
})()
;

return null;
});
