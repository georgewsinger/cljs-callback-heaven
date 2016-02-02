goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15082__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15083__i = 0, G__15083__a = new Array(arguments.length -  0);
while (G__15083__i < G__15083__a.length) {G__15083__a[G__15083__i] = arguments[G__15083__i + 0]; ++G__15083__i;}
  args = new cljs.core.IndexedSeq(G__15083__a,0);
} 
return G__15082__delegate.call(this,args);};
G__15082.cljs$lang$maxFixedArity = 0;
G__15082.cljs$lang$applyTo = (function (arglist__15084){
var args = cljs.core.seq(arglist__15084);
return G__15082__delegate(args);
});
G__15082.cljs$core$IFn$_invoke$arity$variadic = G__15082__delegate;
return G__15082;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15085__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15086__i = 0, G__15086__a = new Array(arguments.length -  0);
while (G__15086__i < G__15086__a.length) {G__15086__a[G__15086__i] = arguments[G__15086__i + 0]; ++G__15086__i;}
  args = new cljs.core.IndexedSeq(G__15086__a,0);
} 
return G__15085__delegate.call(this,args);};
G__15085.cljs$lang$maxFixedArity = 0;
G__15085.cljs$lang$applyTo = (function (arglist__15087){
var args = cljs.core.seq(arglist__15087);
return G__15085__delegate(args);
});
G__15085.cljs$core$IFn$_invoke$arity$variadic = G__15085__delegate;
return G__15085;
})()
;

return null;
});
