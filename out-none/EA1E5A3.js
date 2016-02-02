goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14219__i = 0, G__14219__a = new Array(arguments.length -  0);
while (G__14219__i < G__14219__a.length) {G__14219__a[G__14219__i] = arguments[G__14219__i + 0]; ++G__14219__i;}
  args = new cljs.core.IndexedSeq(G__14219__a,0);
} 
return G__14218__delegate.call(this,args);};
G__14218.cljs$lang$maxFixedArity = 0;
G__14218.cljs$lang$applyTo = (function (arglist__14220){
var args = cljs.core.seq(arglist__14220);
return G__14218__delegate(args);
});
G__14218.cljs$core$IFn$_invoke$arity$variadic = G__14218__delegate;
return G__14218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14222__i = 0, G__14222__a = new Array(arguments.length -  0);
while (G__14222__i < G__14222__a.length) {G__14222__a[G__14222__i] = arguments[G__14222__i + 0]; ++G__14222__i;}
  args = new cljs.core.IndexedSeq(G__14222__a,0);
} 
return G__14221__delegate.call(this,args);};
G__14221.cljs$lang$maxFixedArity = 0;
G__14221.cljs$lang$applyTo = (function (arglist__14223){
var args = cljs.core.seq(arglist__14223);
return G__14221__delegate(args);
});
G__14221.cljs$core$IFn$_invoke$arity$variadic = G__14221__delegate;
return G__14221;
})()
;

return null;
});
