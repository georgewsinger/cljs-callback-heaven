goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__115062__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__115062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115063__i = 0, G__115063__a = new Array(arguments.length -  0);
while (G__115063__i < G__115063__a.length) {G__115063__a[G__115063__i] = arguments[G__115063__i + 0]; ++G__115063__i;}
  args = new cljs.core.IndexedSeq(G__115063__a,0);
} 
return G__115062__delegate.call(this,args);};
G__115062.cljs$lang$maxFixedArity = 0;
G__115062.cljs$lang$applyTo = (function (arglist__115064){
var args = cljs.core.seq(arglist__115064);
return G__115062__delegate(args);
});
G__115062.cljs$core$IFn$_invoke$arity$variadic = G__115062__delegate;
return G__115062;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__115065__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__115065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115066__i = 0, G__115066__a = new Array(arguments.length -  0);
while (G__115066__i < G__115066__a.length) {G__115066__a[G__115066__i] = arguments[G__115066__i + 0]; ++G__115066__i;}
  args = new cljs.core.IndexedSeq(G__115066__a,0);
} 
return G__115065__delegate.call(this,args);};
G__115065.cljs$lang$maxFixedArity = 0;
G__115065.cljs$lang$applyTo = (function (arglist__115067){
var args = cljs.core.seq(arglist__115067);
return G__115065__delegate(args);
});
G__115065.cljs$core$IFn$_invoke$arity$variadic = G__115065__delegate;
return G__115065;
})()
;

return null;
});
