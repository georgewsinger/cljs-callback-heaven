goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31622__i = 0, G__31622__a = new Array(arguments.length -  0);
while (G__31622__i < G__31622__a.length) {G__31622__a[G__31622__i] = arguments[G__31622__i + 0]; ++G__31622__i;}
  args = new cljs.core.IndexedSeq(G__31622__a,0);
} 
return G__31621__delegate.call(this,args);};
G__31621.cljs$lang$maxFixedArity = 0;
G__31621.cljs$lang$applyTo = (function (arglist__31623){
var args = cljs.core.seq(arglist__31623);
return G__31621__delegate(args);
});
G__31621.cljs$core$IFn$_invoke$arity$variadic = G__31621__delegate;
return G__31621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31625__i = 0, G__31625__a = new Array(arguments.length -  0);
while (G__31625__i < G__31625__a.length) {G__31625__a[G__31625__i] = arguments[G__31625__i + 0]; ++G__31625__i;}
  args = new cljs.core.IndexedSeq(G__31625__a,0);
} 
return G__31624__delegate.call(this,args);};
G__31624.cljs$lang$maxFixedArity = 0;
G__31624.cljs$lang$applyTo = (function (arglist__31626){
var args = cljs.core.seq(arglist__31626);
return G__31624__delegate(args);
});
G__31624.cljs$core$IFn$_invoke$arity$variadic = G__31624__delegate;
return G__31624;
})()
;

return null;
});
