goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__227156__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__227156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__227157__i = 0, G__227157__a = new Array(arguments.length -  0);
while (G__227157__i < G__227157__a.length) {G__227157__a[G__227157__i] = arguments[G__227157__i + 0]; ++G__227157__i;}
  args = new cljs.core.IndexedSeq(G__227157__a,0);
} 
return G__227156__delegate.call(this,args);};
G__227156.cljs$lang$maxFixedArity = 0;
G__227156.cljs$lang$applyTo = (function (arglist__227158){
var args = cljs.core.seq(arglist__227158);
return G__227156__delegate(args);
});
G__227156.cljs$core$IFn$_invoke$arity$variadic = G__227156__delegate;
return G__227156;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__227159__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__227159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__227160__i = 0, G__227160__a = new Array(arguments.length -  0);
while (G__227160__i < G__227160__a.length) {G__227160__a[G__227160__i] = arguments[G__227160__i + 0]; ++G__227160__i;}
  args = new cljs.core.IndexedSeq(G__227160__a,0);
} 
return G__227159__delegate.call(this,args);};
G__227159.cljs$lang$maxFixedArity = 0;
G__227159.cljs$lang$applyTo = (function (arglist__227161){
var args = cljs.core.seq(arglist__227161);
return G__227159__delegate(args);
});
G__227159.cljs$core$IFn$_invoke$arity$variadic = G__227159__delegate;
return G__227159;
})()
;

return null;
});
