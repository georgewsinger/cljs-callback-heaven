goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48186__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48187__i = 0, G__48187__a = new Array(arguments.length -  0);
while (G__48187__i < G__48187__a.length) {G__48187__a[G__48187__i] = arguments[G__48187__i + 0]; ++G__48187__i;}
  args = new cljs.core.IndexedSeq(G__48187__a,0);
} 
return G__48186__delegate.call(this,args);};
G__48186.cljs$lang$maxFixedArity = 0;
G__48186.cljs$lang$applyTo = (function (arglist__48188){
var args = cljs.core.seq(arglist__48188);
return G__48186__delegate(args);
});
G__48186.cljs$core$IFn$_invoke$arity$variadic = G__48186__delegate;
return G__48186;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48189__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48190__i = 0, G__48190__a = new Array(arguments.length -  0);
while (G__48190__i < G__48190__a.length) {G__48190__a[G__48190__i] = arguments[G__48190__i + 0]; ++G__48190__i;}
  args = new cljs.core.IndexedSeq(G__48190__a,0);
} 
return G__48189__delegate.call(this,args);};
G__48189.cljs$lang$maxFixedArity = 0;
G__48189.cljs$lang$applyTo = (function (arglist__48191){
var args = cljs.core.seq(arglist__48191);
return G__48189__delegate(args);
});
G__48189.cljs$core$IFn$_invoke$arity$variadic = G__48189__delegate;
return G__48189;
})()
;

return null;
});
