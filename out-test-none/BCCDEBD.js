goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10189__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10190__i = 0, G__10190__a = new Array(arguments.length -  0);
while (G__10190__i < G__10190__a.length) {G__10190__a[G__10190__i] = arguments[G__10190__i + 0]; ++G__10190__i;}
  args = new cljs.core.IndexedSeq(G__10190__a,0);
} 
return G__10189__delegate.call(this,args);};
G__10189.cljs$lang$maxFixedArity = 0;
G__10189.cljs$lang$applyTo = (function (arglist__10191){
var args = cljs.core.seq(arglist__10191);
return G__10189__delegate(args);
});
G__10189.cljs$core$IFn$_invoke$arity$variadic = G__10189__delegate;
return G__10189;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10192__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10193__i = 0, G__10193__a = new Array(arguments.length -  0);
while (G__10193__i < G__10193__a.length) {G__10193__a[G__10193__i] = arguments[G__10193__i + 0]; ++G__10193__i;}
  args = new cljs.core.IndexedSeq(G__10193__a,0);
} 
return G__10192__delegate.call(this,args);};
G__10192.cljs$lang$maxFixedArity = 0;
G__10192.cljs$lang$applyTo = (function (arglist__10194){
var args = cljs.core.seq(arglist__10194);
return G__10192__delegate(args);
});
G__10192.cljs$core$IFn$_invoke$arity$variadic = G__10192__delegate;
return G__10192;
})()
;

return null;
});
