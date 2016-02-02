goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10305__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10306__i = 0, G__10306__a = new Array(arguments.length -  0);
while (G__10306__i < G__10306__a.length) {G__10306__a[G__10306__i] = arguments[G__10306__i + 0]; ++G__10306__i;}
  args = new cljs.core.IndexedSeq(G__10306__a,0);
} 
return G__10305__delegate.call(this,args);};
G__10305.cljs$lang$maxFixedArity = 0;
G__10305.cljs$lang$applyTo = (function (arglist__10307){
var args = cljs.core.seq(arglist__10307);
return G__10305__delegate(args);
});
G__10305.cljs$core$IFn$_invoke$arity$variadic = G__10305__delegate;
return G__10305;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10308__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10309__i = 0, G__10309__a = new Array(arguments.length -  0);
while (G__10309__i < G__10309__a.length) {G__10309__a[G__10309__i] = arguments[G__10309__i + 0]; ++G__10309__i;}
  args = new cljs.core.IndexedSeq(G__10309__a,0);
} 
return G__10308__delegate.call(this,args);};
G__10308.cljs$lang$maxFixedArity = 0;
G__10308.cljs$lang$applyTo = (function (arglist__10310){
var args = cljs.core.seq(arglist__10310);
return G__10308__delegate(args);
});
G__10308.cljs$core$IFn$_invoke$arity$variadic = G__10308__delegate;
return G__10308;
})()
;

return null;
});
