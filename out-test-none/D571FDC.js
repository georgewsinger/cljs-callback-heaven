goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25154__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25155__i = 0, G__25155__a = new Array(arguments.length -  0);
while (G__25155__i < G__25155__a.length) {G__25155__a[G__25155__i] = arguments[G__25155__i + 0]; ++G__25155__i;}
  args = new cljs.core.IndexedSeq(G__25155__a,0);
} 
return G__25154__delegate.call(this,args);};
G__25154.cljs$lang$maxFixedArity = 0;
G__25154.cljs$lang$applyTo = (function (arglist__25156){
var args = cljs.core.seq(arglist__25156);
return G__25154__delegate(args);
});
G__25154.cljs$core$IFn$_invoke$arity$variadic = G__25154__delegate;
return G__25154;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25157__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25158__i = 0, G__25158__a = new Array(arguments.length -  0);
while (G__25158__i < G__25158__a.length) {G__25158__a[G__25158__i] = arguments[G__25158__i + 0]; ++G__25158__i;}
  args = new cljs.core.IndexedSeq(G__25158__a,0);
} 
return G__25157__delegate.call(this,args);};
G__25157.cljs$lang$maxFixedArity = 0;
G__25157.cljs$lang$applyTo = (function (arglist__25159){
var args = cljs.core.seq(arglist__25159);
return G__25157__delegate(args);
});
G__25157.cljs$core$IFn$_invoke$arity$variadic = G__25157__delegate;
return G__25157;
})()
;

return null;
});
