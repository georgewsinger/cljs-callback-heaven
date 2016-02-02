goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__112225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__112225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112226__i = 0, G__112226__a = new Array(arguments.length -  0);
while (G__112226__i < G__112226__a.length) {G__112226__a[G__112226__i] = arguments[G__112226__i + 0]; ++G__112226__i;}
  args = new cljs.core.IndexedSeq(G__112226__a,0);
} 
return G__112225__delegate.call(this,args);};
G__112225.cljs$lang$maxFixedArity = 0;
G__112225.cljs$lang$applyTo = (function (arglist__112227){
var args = cljs.core.seq(arglist__112227);
return G__112225__delegate(args);
});
G__112225.cljs$core$IFn$_invoke$arity$variadic = G__112225__delegate;
return G__112225;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__112228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__112228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112229__i = 0, G__112229__a = new Array(arguments.length -  0);
while (G__112229__i < G__112229__a.length) {G__112229__a[G__112229__i] = arguments[G__112229__i + 0]; ++G__112229__i;}
  args = new cljs.core.IndexedSeq(G__112229__a,0);
} 
return G__112228__delegate.call(this,args);};
G__112228.cljs$lang$maxFixedArity = 0;
G__112228.cljs$lang$applyTo = (function (arglist__112230){
var args = cljs.core.seq(arglist__112230);
return G__112228__delegate(args);
});
G__112228.cljs$core$IFn$_invoke$arity$variadic = G__112228__delegate;
return G__112228;
})()
;

return null;
});
