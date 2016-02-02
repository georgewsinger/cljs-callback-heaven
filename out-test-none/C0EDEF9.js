goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18590__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18591__i = 0, G__18591__a = new Array(arguments.length -  0);
while (G__18591__i < G__18591__a.length) {G__18591__a[G__18591__i] = arguments[G__18591__i + 0]; ++G__18591__i;}
  args = new cljs.core.IndexedSeq(G__18591__a,0);
} 
return G__18590__delegate.call(this,args);};
G__18590.cljs$lang$maxFixedArity = 0;
G__18590.cljs$lang$applyTo = (function (arglist__18592){
var args = cljs.core.seq(arglist__18592);
return G__18590__delegate(args);
});
G__18590.cljs$core$IFn$_invoke$arity$variadic = G__18590__delegate;
return G__18590;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18593__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18594__i = 0, G__18594__a = new Array(arguments.length -  0);
while (G__18594__i < G__18594__a.length) {G__18594__a[G__18594__i] = arguments[G__18594__i + 0]; ++G__18594__i;}
  args = new cljs.core.IndexedSeq(G__18594__a,0);
} 
return G__18593__delegate.call(this,args);};
G__18593.cljs$lang$maxFixedArity = 0;
G__18593.cljs$lang$applyTo = (function (arglist__18595){
var args = cljs.core.seq(arglist__18595);
return G__18593__delegate(args);
});
G__18593.cljs$core$IFn$_invoke$arity$variadic = G__18593__delegate;
return G__18593;
})()
;

return null;
});
