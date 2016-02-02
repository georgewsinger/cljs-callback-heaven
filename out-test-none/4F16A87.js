goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24685__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24686__i = 0, G__24686__a = new Array(arguments.length -  0);
while (G__24686__i < G__24686__a.length) {G__24686__a[G__24686__i] = arguments[G__24686__i + 0]; ++G__24686__i;}
  args = new cljs.core.IndexedSeq(G__24686__a,0);
} 
return G__24685__delegate.call(this,args);};
G__24685.cljs$lang$maxFixedArity = 0;
G__24685.cljs$lang$applyTo = (function (arglist__24687){
var args = cljs.core.seq(arglist__24687);
return G__24685__delegate(args);
});
G__24685.cljs$core$IFn$_invoke$arity$variadic = G__24685__delegate;
return G__24685;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24688__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24689__i = 0, G__24689__a = new Array(arguments.length -  0);
while (G__24689__i < G__24689__a.length) {G__24689__a[G__24689__i] = arguments[G__24689__i + 0]; ++G__24689__i;}
  args = new cljs.core.IndexedSeq(G__24689__a,0);
} 
return G__24688__delegate.call(this,args);};
G__24688.cljs$lang$maxFixedArity = 0;
G__24688.cljs$lang$applyTo = (function (arglist__24690){
var args = cljs.core.seq(arglist__24690);
return G__24688__delegate(args);
});
G__24688.cljs$core$IFn$_invoke$arity$variadic = G__24688__delegate;
return G__24688;
})()
;

return null;
});
