goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26184__i = 0, G__26184__a = new Array(arguments.length -  0);
while (G__26184__i < G__26184__a.length) {G__26184__a[G__26184__i] = arguments[G__26184__i + 0]; ++G__26184__i;}
  args = new cljs.core.IndexedSeq(G__26184__a,0);
} 
return G__26183__delegate.call(this,args);};
G__26183.cljs$lang$maxFixedArity = 0;
G__26183.cljs$lang$applyTo = (function (arglist__26185){
var args = cljs.core.seq(arglist__26185);
return G__26183__delegate(args);
});
G__26183.cljs$core$IFn$_invoke$arity$variadic = G__26183__delegate;
return G__26183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26187__i = 0, G__26187__a = new Array(arguments.length -  0);
while (G__26187__i < G__26187__a.length) {G__26187__a[G__26187__i] = arguments[G__26187__i + 0]; ++G__26187__i;}
  args = new cljs.core.IndexedSeq(G__26187__a,0);
} 
return G__26186__delegate.call(this,args);};
G__26186.cljs$lang$maxFixedArity = 0;
G__26186.cljs$lang$applyTo = (function (arglist__26188){
var args = cljs.core.seq(arglist__26188);
return G__26186__delegate(args);
});
G__26186.cljs$core$IFn$_invoke$arity$variadic = G__26186__delegate;
return G__26186;
})()
;

return null;
});
