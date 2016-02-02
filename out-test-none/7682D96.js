goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39850__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39851__i = 0, G__39851__a = new Array(arguments.length -  0);
while (G__39851__i < G__39851__a.length) {G__39851__a[G__39851__i] = arguments[G__39851__i + 0]; ++G__39851__i;}
  args = new cljs.core.IndexedSeq(G__39851__a,0);
} 
return G__39850__delegate.call(this,args);};
G__39850.cljs$lang$maxFixedArity = 0;
G__39850.cljs$lang$applyTo = (function (arglist__39852){
var args = cljs.core.seq(arglist__39852);
return G__39850__delegate(args);
});
G__39850.cljs$core$IFn$_invoke$arity$variadic = G__39850__delegate;
return G__39850;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39853__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39854__i = 0, G__39854__a = new Array(arguments.length -  0);
while (G__39854__i < G__39854__a.length) {G__39854__a[G__39854__i] = arguments[G__39854__i + 0]; ++G__39854__i;}
  args = new cljs.core.IndexedSeq(G__39854__a,0);
} 
return G__39853__delegate.call(this,args);};
G__39853.cljs$lang$maxFixedArity = 0;
G__39853.cljs$lang$applyTo = (function (arglist__39855){
var args = cljs.core.seq(arglist__39855);
return G__39853__delegate(args);
});
G__39853.cljs$core$IFn$_invoke$arity$variadic = G__39853__delegate;
return G__39853;
})()
;

return null;
});
