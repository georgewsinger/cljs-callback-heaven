goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14928__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14929__i = 0, G__14929__a = new Array(arguments.length -  0);
while (G__14929__i < G__14929__a.length) {G__14929__a[G__14929__i] = arguments[G__14929__i + 0]; ++G__14929__i;}
  args = new cljs.core.IndexedSeq(G__14929__a,0);
} 
return G__14928__delegate.call(this,args);};
G__14928.cljs$lang$maxFixedArity = 0;
G__14928.cljs$lang$applyTo = (function (arglist__14930){
var args = cljs.core.seq(arglist__14930);
return G__14928__delegate(args);
});
G__14928.cljs$core$IFn$_invoke$arity$variadic = G__14928__delegate;
return G__14928;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14931__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14932__i = 0, G__14932__a = new Array(arguments.length -  0);
while (G__14932__i < G__14932__a.length) {G__14932__a[G__14932__i] = arguments[G__14932__i + 0]; ++G__14932__i;}
  args = new cljs.core.IndexedSeq(G__14932__a,0);
} 
return G__14931__delegate.call(this,args);};
G__14931.cljs$lang$maxFixedArity = 0;
G__14931.cljs$lang$applyTo = (function (arglist__14933){
var args = cljs.core.seq(arglist__14933);
return G__14931__delegate(args);
});
G__14931.cljs$core$IFn$_invoke$arity$variadic = G__14931__delegate;
return G__14931;
})()
;

return null;
});
