goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29305__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29306__i = 0, G__29306__a = new Array(arguments.length -  0);
while (G__29306__i < G__29306__a.length) {G__29306__a[G__29306__i] = arguments[G__29306__i + 0]; ++G__29306__i;}
  args = new cljs.core.IndexedSeq(G__29306__a,0);
} 
return G__29305__delegate.call(this,args);};
G__29305.cljs$lang$maxFixedArity = 0;
G__29305.cljs$lang$applyTo = (function (arglist__29307){
var args = cljs.core.seq(arglist__29307);
return G__29305__delegate(args);
});
G__29305.cljs$core$IFn$_invoke$arity$variadic = G__29305__delegate;
return G__29305;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29308__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29309__i = 0, G__29309__a = new Array(arguments.length -  0);
while (G__29309__i < G__29309__a.length) {G__29309__a[G__29309__i] = arguments[G__29309__i + 0]; ++G__29309__i;}
  args = new cljs.core.IndexedSeq(G__29309__a,0);
} 
return G__29308__delegate.call(this,args);};
G__29308.cljs$lang$maxFixedArity = 0;
G__29308.cljs$lang$applyTo = (function (arglist__29310){
var args = cljs.core.seq(arglist__29310);
return G__29308__delegate(args);
});
G__29308.cljs$core$IFn$_invoke$arity$variadic = G__29308__delegate;
return G__29308;
})()
;

return null;
});
