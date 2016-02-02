goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10448__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10449__i = 0, G__10449__a = new Array(arguments.length -  0);
while (G__10449__i < G__10449__a.length) {G__10449__a[G__10449__i] = arguments[G__10449__i + 0]; ++G__10449__i;}
  args = new cljs.core.IndexedSeq(G__10449__a,0);
} 
return G__10448__delegate.call(this,args);};
G__10448.cljs$lang$maxFixedArity = 0;
G__10448.cljs$lang$applyTo = (function (arglist__10450){
var args = cljs.core.seq(arglist__10450);
return G__10448__delegate(args);
});
G__10448.cljs$core$IFn$_invoke$arity$variadic = G__10448__delegate;
return G__10448;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10451__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10452__i = 0, G__10452__a = new Array(arguments.length -  0);
while (G__10452__i < G__10452__a.length) {G__10452__a[G__10452__i] = arguments[G__10452__i + 0]; ++G__10452__i;}
  args = new cljs.core.IndexedSeq(G__10452__a,0);
} 
return G__10451__delegate.call(this,args);};
G__10451.cljs$lang$maxFixedArity = 0;
G__10451.cljs$lang$applyTo = (function (arglist__10453){
var args = cljs.core.seq(arglist__10453);
return G__10451__delegate(args);
});
G__10451.cljs$core$IFn$_invoke$arity$variadic = G__10451__delegate;
return G__10451;
})()
;

return null;
});
