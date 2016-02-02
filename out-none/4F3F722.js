goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78677__i = 0, G__78677__a = new Array(arguments.length -  0);
while (G__78677__i < G__78677__a.length) {G__78677__a[G__78677__i] = arguments[G__78677__i + 0]; ++G__78677__i;}
  args = new cljs.core.IndexedSeq(G__78677__a,0);
} 
return G__78676__delegate.call(this,args);};
G__78676.cljs$lang$maxFixedArity = 0;
G__78676.cljs$lang$applyTo = (function (arglist__78678){
var args = cljs.core.seq(arglist__78678);
return G__78676__delegate(args);
});
G__78676.cljs$core$IFn$_invoke$arity$variadic = G__78676__delegate;
return G__78676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78680__i = 0, G__78680__a = new Array(arguments.length -  0);
while (G__78680__i < G__78680__a.length) {G__78680__a[G__78680__i] = arguments[G__78680__i + 0]; ++G__78680__i;}
  args = new cljs.core.IndexedSeq(G__78680__a,0);
} 
return G__78679__delegate.call(this,args);};
G__78679.cljs$lang$maxFixedArity = 0;
G__78679.cljs$lang$applyTo = (function (arglist__78681){
var args = cljs.core.seq(arglist__78681);
return G__78679__delegate(args);
});
G__78679.cljs$core$IFn$_invoke$arity$variadic = G__78679__delegate;
return G__78679;
})()
;

return null;
});
