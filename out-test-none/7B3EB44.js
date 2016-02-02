goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18580__i = 0, G__18580__a = new Array(arguments.length -  0);
while (G__18580__i < G__18580__a.length) {G__18580__a[G__18580__i] = arguments[G__18580__i + 0]; ++G__18580__i;}
  args = new cljs.core.IndexedSeq(G__18580__a,0);
} 
return G__18579__delegate.call(this,args);};
G__18579.cljs$lang$maxFixedArity = 0;
G__18579.cljs$lang$applyTo = (function (arglist__18581){
var args = cljs.core.seq(arglist__18581);
return G__18579__delegate(args);
});
G__18579.cljs$core$IFn$_invoke$arity$variadic = G__18579__delegate;
return G__18579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18583__i = 0, G__18583__a = new Array(arguments.length -  0);
while (G__18583__i < G__18583__a.length) {G__18583__a[G__18583__i] = arguments[G__18583__i + 0]; ++G__18583__i;}
  args = new cljs.core.IndexedSeq(G__18583__a,0);
} 
return G__18582__delegate.call(this,args);};
G__18582.cljs$lang$maxFixedArity = 0;
G__18582.cljs$lang$applyTo = (function (arglist__18584){
var args = cljs.core.seq(arglist__18584);
return G__18582__delegate(args);
});
G__18582.cljs$core$IFn$_invoke$arity$variadic = G__18582__delegate;
return G__18582;
})()
;

return null;
});
