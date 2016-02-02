goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19727__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19728__i = 0, G__19728__a = new Array(arguments.length -  0);
while (G__19728__i < G__19728__a.length) {G__19728__a[G__19728__i] = arguments[G__19728__i + 0]; ++G__19728__i;}
  args = new cljs.core.IndexedSeq(G__19728__a,0);
} 
return G__19727__delegate.call(this,args);};
G__19727.cljs$lang$maxFixedArity = 0;
G__19727.cljs$lang$applyTo = (function (arglist__19729){
var args = cljs.core.seq(arglist__19729);
return G__19727__delegate(args);
});
G__19727.cljs$core$IFn$_invoke$arity$variadic = G__19727__delegate;
return G__19727;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19730__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19731__i = 0, G__19731__a = new Array(arguments.length -  0);
while (G__19731__i < G__19731__a.length) {G__19731__a[G__19731__i] = arguments[G__19731__i + 0]; ++G__19731__i;}
  args = new cljs.core.IndexedSeq(G__19731__a,0);
} 
return G__19730__delegate.call(this,args);};
G__19730.cljs$lang$maxFixedArity = 0;
G__19730.cljs$lang$applyTo = (function (arglist__19732){
var args = cljs.core.seq(arglist__19732);
return G__19730__delegate(args);
});
G__19730.cljs$core$IFn$_invoke$arity$variadic = G__19730__delegate;
return G__19730;
})()
;

return null;
});
