goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51350__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51351__i = 0, G__51351__a = new Array(arguments.length -  0);
while (G__51351__i < G__51351__a.length) {G__51351__a[G__51351__i] = arguments[G__51351__i + 0]; ++G__51351__i;}
  args = new cljs.core.IndexedSeq(G__51351__a,0);
} 
return G__51350__delegate.call(this,args);};
G__51350.cljs$lang$maxFixedArity = 0;
G__51350.cljs$lang$applyTo = (function (arglist__51352){
var args = cljs.core.seq(arglist__51352);
return G__51350__delegate(args);
});
G__51350.cljs$core$IFn$_invoke$arity$variadic = G__51350__delegate;
return G__51350;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51353__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51354__i = 0, G__51354__a = new Array(arguments.length -  0);
while (G__51354__i < G__51354__a.length) {G__51354__a[G__51354__i] = arguments[G__51354__i + 0]; ++G__51354__i;}
  args = new cljs.core.IndexedSeq(G__51354__a,0);
} 
return G__51353__delegate.call(this,args);};
G__51353.cljs$lang$maxFixedArity = 0;
G__51353.cljs$lang$applyTo = (function (arglist__51355){
var args = cljs.core.seq(arglist__51355);
return G__51353__delegate(args);
});
G__51353.cljs$core$IFn$_invoke$arity$variadic = G__51353__delegate;
return G__51353;
})()
;

return null;
});
