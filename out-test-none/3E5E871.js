goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14305__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14306__i = 0, G__14306__a = new Array(arguments.length -  0);
while (G__14306__i < G__14306__a.length) {G__14306__a[G__14306__i] = arguments[G__14306__i + 0]; ++G__14306__i;}
  args = new cljs.core.IndexedSeq(G__14306__a,0);
} 
return G__14305__delegate.call(this,args);};
G__14305.cljs$lang$maxFixedArity = 0;
G__14305.cljs$lang$applyTo = (function (arglist__14307){
var args = cljs.core.seq(arglist__14307);
return G__14305__delegate(args);
});
G__14305.cljs$core$IFn$_invoke$arity$variadic = G__14305__delegate;
return G__14305;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14308__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14309__i = 0, G__14309__a = new Array(arguments.length -  0);
while (G__14309__i < G__14309__a.length) {G__14309__a[G__14309__i] = arguments[G__14309__i + 0]; ++G__14309__i;}
  args = new cljs.core.IndexedSeq(G__14309__a,0);
} 
return G__14308__delegate.call(this,args);};
G__14308.cljs$lang$maxFixedArity = 0;
G__14308.cljs$lang$applyTo = (function (arglist__14310){
var args = cljs.core.seq(arglist__14310);
return G__14308__delegate(args);
});
G__14308.cljs$core$IFn$_invoke$arity$variadic = G__14308__delegate;
return G__14308;
})()
;

return null;
});
