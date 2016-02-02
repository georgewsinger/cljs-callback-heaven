goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15930__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15931__i = 0, G__15931__a = new Array(arguments.length -  0);
while (G__15931__i < G__15931__a.length) {G__15931__a[G__15931__i] = arguments[G__15931__i + 0]; ++G__15931__i;}
  args = new cljs.core.IndexedSeq(G__15931__a,0);
} 
return G__15930__delegate.call(this,args);};
G__15930.cljs$lang$maxFixedArity = 0;
G__15930.cljs$lang$applyTo = (function (arglist__15932){
var args = cljs.core.seq(arglist__15932);
return G__15930__delegate(args);
});
G__15930.cljs$core$IFn$_invoke$arity$variadic = G__15930__delegate;
return G__15930;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15933__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15934__i = 0, G__15934__a = new Array(arguments.length -  0);
while (G__15934__i < G__15934__a.length) {G__15934__a[G__15934__i] = arguments[G__15934__i + 0]; ++G__15934__i;}
  args = new cljs.core.IndexedSeq(G__15934__a,0);
} 
return G__15933__delegate.call(this,args);};
G__15933.cljs$lang$maxFixedArity = 0;
G__15933.cljs$lang$applyTo = (function (arglist__15935){
var args = cljs.core.seq(arglist__15935);
return G__15933__delegate(args);
});
G__15933.cljs$core$IFn$_invoke$arity$variadic = G__15933__delegate;
return G__15933;
})()
;

return null;
});
