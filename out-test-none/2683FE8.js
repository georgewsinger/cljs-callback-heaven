goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9551__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9552__i = 0, G__9552__a = new Array(arguments.length -  0);
while (G__9552__i < G__9552__a.length) {G__9552__a[G__9552__i] = arguments[G__9552__i + 0]; ++G__9552__i;}
  args = new cljs.core.IndexedSeq(G__9552__a,0);
} 
return G__9551__delegate.call(this,args);};
G__9551.cljs$lang$maxFixedArity = 0;
G__9551.cljs$lang$applyTo = (function (arglist__9553){
var args = cljs.core.seq(arglist__9553);
return G__9551__delegate(args);
});
G__9551.cljs$core$IFn$_invoke$arity$variadic = G__9551__delegate;
return G__9551;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9554__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9555__i = 0, G__9555__a = new Array(arguments.length -  0);
while (G__9555__i < G__9555__a.length) {G__9555__a[G__9555__i] = arguments[G__9555__i + 0]; ++G__9555__i;}
  args = new cljs.core.IndexedSeq(G__9555__a,0);
} 
return G__9554__delegate.call(this,args);};
G__9554.cljs$lang$maxFixedArity = 0;
G__9554.cljs$lang$applyTo = (function (arglist__9556){
var args = cljs.core.seq(arglist__9556);
return G__9554__delegate(args);
});
G__9554.cljs$core$IFn$_invoke$arity$variadic = G__9554__delegate;
return G__9554;
})()
;

return null;
});
