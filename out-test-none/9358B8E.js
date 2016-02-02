goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15186__i = 0, G__15186__a = new Array(arguments.length -  0);
while (G__15186__i < G__15186__a.length) {G__15186__a[G__15186__i] = arguments[G__15186__i + 0]; ++G__15186__i;}
  args = new cljs.core.IndexedSeq(G__15186__a,0);
} 
return G__15185__delegate.call(this,args);};
G__15185.cljs$lang$maxFixedArity = 0;
G__15185.cljs$lang$applyTo = (function (arglist__15187){
var args = cljs.core.seq(arglist__15187);
return G__15185__delegate(args);
});
G__15185.cljs$core$IFn$_invoke$arity$variadic = G__15185__delegate;
return G__15185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15189__i = 0, G__15189__a = new Array(arguments.length -  0);
while (G__15189__i < G__15189__a.length) {G__15189__a[G__15189__i] = arguments[G__15189__i + 0]; ++G__15189__i;}
  args = new cljs.core.IndexedSeq(G__15189__a,0);
} 
return G__15188__delegate.call(this,args);};
G__15188.cljs$lang$maxFixedArity = 0;
G__15188.cljs$lang$applyTo = (function (arglist__15190){
var args = cljs.core.seq(arglist__15190);
return G__15188__delegate(args);
});
G__15188.cljs$core$IFn$_invoke$arity$variadic = G__15188__delegate;
return G__15188;
})()
;

return null;
});
