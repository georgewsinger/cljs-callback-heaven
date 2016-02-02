goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38613__i = 0, G__38613__a = new Array(arguments.length -  0);
while (G__38613__i < G__38613__a.length) {G__38613__a[G__38613__i] = arguments[G__38613__i + 0]; ++G__38613__i;}
  args = new cljs.core.IndexedSeq(G__38613__a,0);
} 
return G__38612__delegate.call(this,args);};
G__38612.cljs$lang$maxFixedArity = 0;
G__38612.cljs$lang$applyTo = (function (arglist__38614){
var args = cljs.core.seq(arglist__38614);
return G__38612__delegate(args);
});
G__38612.cljs$core$IFn$_invoke$arity$variadic = G__38612__delegate;
return G__38612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38616__i = 0, G__38616__a = new Array(arguments.length -  0);
while (G__38616__i < G__38616__a.length) {G__38616__a[G__38616__i] = arguments[G__38616__i + 0]; ++G__38616__i;}
  args = new cljs.core.IndexedSeq(G__38616__a,0);
} 
return G__38615__delegate.call(this,args);};
G__38615.cljs$lang$maxFixedArity = 0;
G__38615.cljs$lang$applyTo = (function (arglist__38617){
var args = cljs.core.seq(arglist__38617);
return G__38615__delegate(args);
});
G__38615.cljs$core$IFn$_invoke$arity$variadic = G__38615__delegate;
return G__38615;
})()
;

return null;
});
