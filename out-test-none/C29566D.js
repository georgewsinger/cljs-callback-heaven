goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__283202__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__283202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283203__i = 0, G__283203__a = new Array(arguments.length -  0);
while (G__283203__i < G__283203__a.length) {G__283203__a[G__283203__i] = arguments[G__283203__i + 0]; ++G__283203__i;}
  args = new cljs.core.IndexedSeq(G__283203__a,0);
} 
return G__283202__delegate.call(this,args);};
G__283202.cljs$lang$maxFixedArity = 0;
G__283202.cljs$lang$applyTo = (function (arglist__283204){
var args = cljs.core.seq(arglist__283204);
return G__283202__delegate(args);
});
G__283202.cljs$core$IFn$_invoke$arity$variadic = G__283202__delegate;
return G__283202;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__283205__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__283205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283206__i = 0, G__283206__a = new Array(arguments.length -  0);
while (G__283206__i < G__283206__a.length) {G__283206__a[G__283206__i] = arguments[G__283206__i + 0]; ++G__283206__i;}
  args = new cljs.core.IndexedSeq(G__283206__a,0);
} 
return G__283205__delegate.call(this,args);};
G__283205.cljs$lang$maxFixedArity = 0;
G__283205.cljs$lang$applyTo = (function (arglist__283207){
var args = cljs.core.seq(arglist__283207);
return G__283205__delegate(args);
});
G__283205.cljs$core$IFn$_invoke$arity$variadic = G__283205__delegate;
return G__283205;
})()
;

return null;
});
