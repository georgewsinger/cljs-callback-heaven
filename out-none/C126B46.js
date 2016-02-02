goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34364__i = 0, G__34364__a = new Array(arguments.length -  0);
while (G__34364__i < G__34364__a.length) {G__34364__a[G__34364__i] = arguments[G__34364__i + 0]; ++G__34364__i;}
  args = new cljs.core.IndexedSeq(G__34364__a,0);
} 
return G__34363__delegate.call(this,args);};
G__34363.cljs$lang$maxFixedArity = 0;
G__34363.cljs$lang$applyTo = (function (arglist__34365){
var args = cljs.core.seq(arglist__34365);
return G__34363__delegate(args);
});
G__34363.cljs$core$IFn$_invoke$arity$variadic = G__34363__delegate;
return G__34363;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34367__i = 0, G__34367__a = new Array(arguments.length -  0);
while (G__34367__i < G__34367__a.length) {G__34367__a[G__34367__i] = arguments[G__34367__i + 0]; ++G__34367__i;}
  args = new cljs.core.IndexedSeq(G__34367__a,0);
} 
return G__34366__delegate.call(this,args);};
G__34366.cljs$lang$maxFixedArity = 0;
G__34366.cljs$lang$applyTo = (function (arglist__34368){
var args = cljs.core.seq(arglist__34368);
return G__34366__delegate(args);
});
G__34366.cljs$core$IFn$_invoke$arity$variadic = G__34366__delegate;
return G__34366;
})()
;

return null;
});
