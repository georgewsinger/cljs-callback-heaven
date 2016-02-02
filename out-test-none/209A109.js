goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__350358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__350358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350359__i = 0, G__350359__a = new Array(arguments.length -  0);
while (G__350359__i < G__350359__a.length) {G__350359__a[G__350359__i] = arguments[G__350359__i + 0]; ++G__350359__i;}
  args = new cljs.core.IndexedSeq(G__350359__a,0);
} 
return G__350358__delegate.call(this,args);};
G__350358.cljs$lang$maxFixedArity = 0;
G__350358.cljs$lang$applyTo = (function (arglist__350360){
var args = cljs.core.seq(arglist__350360);
return G__350358__delegate(args);
});
G__350358.cljs$core$IFn$_invoke$arity$variadic = G__350358__delegate;
return G__350358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__350361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__350361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350362__i = 0, G__350362__a = new Array(arguments.length -  0);
while (G__350362__i < G__350362__a.length) {G__350362__a[G__350362__i] = arguments[G__350362__i + 0]; ++G__350362__i;}
  args = new cljs.core.IndexedSeq(G__350362__a,0);
} 
return G__350361__delegate.call(this,args);};
G__350361.cljs$lang$maxFixedArity = 0;
G__350361.cljs$lang$applyTo = (function (arglist__350363){
var args = cljs.core.seq(arglist__350363);
return G__350361__delegate(args);
});
G__350361.cljs$core$IFn$_invoke$arity$variadic = G__350361__delegate;
return G__350361;
})()
;

return null;
});
