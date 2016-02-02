goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49651__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49652__i = 0, G__49652__a = new Array(arguments.length -  0);
while (G__49652__i < G__49652__a.length) {G__49652__a[G__49652__i] = arguments[G__49652__i + 0]; ++G__49652__i;}
  args = new cljs.core.IndexedSeq(G__49652__a,0);
} 
return G__49651__delegate.call(this,args);};
G__49651.cljs$lang$maxFixedArity = 0;
G__49651.cljs$lang$applyTo = (function (arglist__49653){
var args = cljs.core.seq(arglist__49653);
return G__49651__delegate(args);
});
G__49651.cljs$core$IFn$_invoke$arity$variadic = G__49651__delegate;
return G__49651;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49654__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49655__i = 0, G__49655__a = new Array(arguments.length -  0);
while (G__49655__i < G__49655__a.length) {G__49655__a[G__49655__i] = arguments[G__49655__i + 0]; ++G__49655__i;}
  args = new cljs.core.IndexedSeq(G__49655__a,0);
} 
return G__49654__delegate.call(this,args);};
G__49654.cljs$lang$maxFixedArity = 0;
G__49654.cljs$lang$applyTo = (function (arglist__49656){
var args = cljs.core.seq(arglist__49656);
return G__49654__delegate(args);
});
G__49654.cljs$core$IFn$_invoke$arity$variadic = G__49654__delegate;
return G__49654;
})()
;

return null;
});
