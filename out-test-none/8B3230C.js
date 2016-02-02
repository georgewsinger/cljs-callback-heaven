goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14727__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14728__i = 0, G__14728__a = new Array(arguments.length -  0);
while (G__14728__i < G__14728__a.length) {G__14728__a[G__14728__i] = arguments[G__14728__i + 0]; ++G__14728__i;}
  args = new cljs.core.IndexedSeq(G__14728__a,0);
} 
return G__14727__delegate.call(this,args);};
G__14727.cljs$lang$maxFixedArity = 0;
G__14727.cljs$lang$applyTo = (function (arglist__14729){
var args = cljs.core.seq(arglist__14729);
return G__14727__delegate(args);
});
G__14727.cljs$core$IFn$_invoke$arity$variadic = G__14727__delegate;
return G__14727;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14730__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14731__i = 0, G__14731__a = new Array(arguments.length -  0);
while (G__14731__i < G__14731__a.length) {G__14731__a[G__14731__i] = arguments[G__14731__i + 0]; ++G__14731__i;}
  args = new cljs.core.IndexedSeq(G__14731__a,0);
} 
return G__14730__delegate.call(this,args);};
G__14730.cljs$lang$maxFixedArity = 0;
G__14730.cljs$lang$applyTo = (function (arglist__14732){
var args = cljs.core.seq(arglist__14732);
return G__14730__delegate(args);
});
G__14730.cljs$core$IFn$_invoke$arity$variadic = G__14730__delegate;
return G__14730;
})()
;

return null;
});
