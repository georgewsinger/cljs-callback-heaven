goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33626__i = 0, G__33626__a = new Array(arguments.length -  0);
while (G__33626__i < G__33626__a.length) {G__33626__a[G__33626__i] = arguments[G__33626__i + 0]; ++G__33626__i;}
  args = new cljs.core.IndexedSeq(G__33626__a,0);
} 
return G__33625__delegate.call(this,args);};
G__33625.cljs$lang$maxFixedArity = 0;
G__33625.cljs$lang$applyTo = (function (arglist__33627){
var args = cljs.core.seq(arglist__33627);
return G__33625__delegate(args);
});
G__33625.cljs$core$IFn$_invoke$arity$variadic = G__33625__delegate;
return G__33625;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33629__i = 0, G__33629__a = new Array(arguments.length -  0);
while (G__33629__i < G__33629__a.length) {G__33629__a[G__33629__i] = arguments[G__33629__i + 0]; ++G__33629__i;}
  args = new cljs.core.IndexedSeq(G__33629__a,0);
} 
return G__33628__delegate.call(this,args);};
G__33628.cljs$lang$maxFixedArity = 0;
G__33628.cljs$lang$applyTo = (function (arglist__33630){
var args = cljs.core.seq(arglist__33630);
return G__33628__delegate(args);
});
G__33628.cljs$core$IFn$_invoke$arity$variadic = G__33628__delegate;
return G__33628;
})()
;

return null;
});
