goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45590__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45591__i = 0, G__45591__a = new Array(arguments.length -  0);
while (G__45591__i < G__45591__a.length) {G__45591__a[G__45591__i] = arguments[G__45591__i + 0]; ++G__45591__i;}
  args = new cljs.core.IndexedSeq(G__45591__a,0);
} 
return G__45590__delegate.call(this,args);};
G__45590.cljs$lang$maxFixedArity = 0;
G__45590.cljs$lang$applyTo = (function (arglist__45592){
var args = cljs.core.seq(arglist__45592);
return G__45590__delegate(args);
});
G__45590.cljs$core$IFn$_invoke$arity$variadic = G__45590__delegate;
return G__45590;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45593__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45594__i = 0, G__45594__a = new Array(arguments.length -  0);
while (G__45594__i < G__45594__a.length) {G__45594__a[G__45594__i] = arguments[G__45594__i + 0]; ++G__45594__i;}
  args = new cljs.core.IndexedSeq(G__45594__a,0);
} 
return G__45593__delegate.call(this,args);};
G__45593.cljs$lang$maxFixedArity = 0;
G__45593.cljs$lang$applyTo = (function (arglist__45595){
var args = cljs.core.seq(arglist__45595);
return G__45593__delegate(args);
});
G__45593.cljs$core$IFn$_invoke$arity$variadic = G__45593__delegate;
return G__45593;
})()
;

return null;
});
