goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14930__i = 0, G__14930__a = new Array(arguments.length -  0);
while (G__14930__i < G__14930__a.length) {G__14930__a[G__14930__i] = arguments[G__14930__i + 0]; ++G__14930__i;}
  args = new cljs.core.IndexedSeq(G__14930__a,0);
} 
return G__14929__delegate.call(this,args);};
G__14929.cljs$lang$maxFixedArity = 0;
G__14929.cljs$lang$applyTo = (function (arglist__14931){
var args = cljs.core.seq(arglist__14931);
return G__14929__delegate(args);
});
G__14929.cljs$core$IFn$_invoke$arity$variadic = G__14929__delegate;
return G__14929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14933__i = 0, G__14933__a = new Array(arguments.length -  0);
while (G__14933__i < G__14933__a.length) {G__14933__a[G__14933__i] = arguments[G__14933__i + 0]; ++G__14933__i;}
  args = new cljs.core.IndexedSeq(G__14933__a,0);
} 
return G__14932__delegate.call(this,args);};
G__14932.cljs$lang$maxFixedArity = 0;
G__14932.cljs$lang$applyTo = (function (arglist__14934){
var args = cljs.core.seq(arglist__14934);
return G__14932__delegate(args);
});
G__14932.cljs$core$IFn$_invoke$arity$variadic = G__14932__delegate;
return G__14932;
})()
;

return null;
});
