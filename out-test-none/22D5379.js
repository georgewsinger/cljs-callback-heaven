goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__283213__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__283213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283214__i = 0, G__283214__a = new Array(arguments.length -  0);
while (G__283214__i < G__283214__a.length) {G__283214__a[G__283214__i] = arguments[G__283214__i + 0]; ++G__283214__i;}
  args = new cljs.core.IndexedSeq(G__283214__a,0);
} 
return G__283213__delegate.call(this,args);};
G__283213.cljs$lang$maxFixedArity = 0;
G__283213.cljs$lang$applyTo = (function (arglist__283215){
var args = cljs.core.seq(arglist__283215);
return G__283213__delegate(args);
});
G__283213.cljs$core$IFn$_invoke$arity$variadic = G__283213__delegate;
return G__283213;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__283216__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__283216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283217__i = 0, G__283217__a = new Array(arguments.length -  0);
while (G__283217__i < G__283217__a.length) {G__283217__a[G__283217__i] = arguments[G__283217__i + 0]; ++G__283217__i;}
  args = new cljs.core.IndexedSeq(G__283217__a,0);
} 
return G__283216__delegate.call(this,args);};
G__283216.cljs$lang$maxFixedArity = 0;
G__283216.cljs$lang$applyTo = (function (arglist__283218){
var args = cljs.core.seq(arglist__283218);
return G__283216__delegate(args);
});
G__283216.cljs$core$IFn$_invoke$arity$variadic = G__283216__delegate;
return G__283216;
})()
;

return null;
});
