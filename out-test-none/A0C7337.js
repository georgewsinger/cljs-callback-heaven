goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56214__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56215__i = 0, G__56215__a = new Array(arguments.length -  0);
while (G__56215__i < G__56215__a.length) {G__56215__a[G__56215__i] = arguments[G__56215__i + 0]; ++G__56215__i;}
  args = new cljs.core.IndexedSeq(G__56215__a,0);
} 
return G__56214__delegate.call(this,args);};
G__56214.cljs$lang$maxFixedArity = 0;
G__56214.cljs$lang$applyTo = (function (arglist__56216){
var args = cljs.core.seq(arglist__56216);
return G__56214__delegate(args);
});
G__56214.cljs$core$IFn$_invoke$arity$variadic = G__56214__delegate;
return G__56214;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56217__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56218__i = 0, G__56218__a = new Array(arguments.length -  0);
while (G__56218__i < G__56218__a.length) {G__56218__a[G__56218__i] = arguments[G__56218__i + 0]; ++G__56218__i;}
  args = new cljs.core.IndexedSeq(G__56218__a,0);
} 
return G__56217__delegate.call(this,args);};
G__56217.cljs$lang$maxFixedArity = 0;
G__56217.cljs$lang$applyTo = (function (arglist__56219){
var args = cljs.core.seq(arglist__56219);
return G__56217__delegate(args);
});
G__56217.cljs$core$IFn$_invoke$arity$variadic = G__56217__delegate;
return G__56217;
})()
;

return null;
});
