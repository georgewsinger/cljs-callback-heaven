goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346613__i = 0, G__346613__a = new Array(arguments.length -  0);
while (G__346613__i < G__346613__a.length) {G__346613__a[G__346613__i] = arguments[G__346613__i + 0]; ++G__346613__i;}
  args = new cljs.core.IndexedSeq(G__346613__a,0);
} 
return G__346612__delegate.call(this,args);};
G__346612.cljs$lang$maxFixedArity = 0;
G__346612.cljs$lang$applyTo = (function (arglist__346614){
var args = cljs.core.seq(arglist__346614);
return G__346612__delegate(args);
});
G__346612.cljs$core$IFn$_invoke$arity$variadic = G__346612__delegate;
return G__346612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346616__i = 0, G__346616__a = new Array(arguments.length -  0);
while (G__346616__i < G__346616__a.length) {G__346616__a[G__346616__i] = arguments[G__346616__i + 0]; ++G__346616__i;}
  args = new cljs.core.IndexedSeq(G__346616__a,0);
} 
return G__346615__delegate.call(this,args);};
G__346615.cljs$lang$maxFixedArity = 0;
G__346615.cljs$lang$applyTo = (function (arglist__346617){
var args = cljs.core.seq(arglist__346617);
return G__346615__delegate(args);
});
G__346615.cljs$core$IFn$_invoke$arity$variadic = G__346615__delegate;
return G__346615;
})()
;

return null;
});
