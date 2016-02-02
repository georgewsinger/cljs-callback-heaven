goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10977__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10978__i = 0, G__10978__a = new Array(arguments.length -  0);
while (G__10978__i < G__10978__a.length) {G__10978__a[G__10978__i] = arguments[G__10978__i + 0]; ++G__10978__i;}
  args = new cljs.core.IndexedSeq(G__10978__a,0);
} 
return G__10977__delegate.call(this,args);};
G__10977.cljs$lang$maxFixedArity = 0;
G__10977.cljs$lang$applyTo = (function (arglist__10979){
var args = cljs.core.seq(arglist__10979);
return G__10977__delegate(args);
});
G__10977.cljs$core$IFn$_invoke$arity$variadic = G__10977__delegate;
return G__10977;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10980__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10981__i = 0, G__10981__a = new Array(arguments.length -  0);
while (G__10981__i < G__10981__a.length) {G__10981__a[G__10981__i] = arguments[G__10981__i + 0]; ++G__10981__i;}
  args = new cljs.core.IndexedSeq(G__10981__a,0);
} 
return G__10980__delegate.call(this,args);};
G__10980.cljs$lang$maxFixedArity = 0;
G__10980.cljs$lang$applyTo = (function (arglist__10982){
var args = cljs.core.seq(arglist__10982);
return G__10980__delegate(args);
});
G__10980.cljs$core$IFn$_invoke$arity$variadic = G__10980__delegate;
return G__10980;
})()
;

return null;
});
