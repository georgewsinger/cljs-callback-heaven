goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11285__i = 0, G__11285__a = new Array(arguments.length -  0);
while (G__11285__i < G__11285__a.length) {G__11285__a[G__11285__i] = arguments[G__11285__i + 0]; ++G__11285__i;}
  args = new cljs.core.IndexedSeq(G__11285__a,0);
} 
return G__11284__delegate.call(this,args);};
G__11284.cljs$lang$maxFixedArity = 0;
G__11284.cljs$lang$applyTo = (function (arglist__11286){
var args = cljs.core.seq(arglist__11286);
return G__11284__delegate(args);
});
G__11284.cljs$core$IFn$_invoke$arity$variadic = G__11284__delegate;
return G__11284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11288__i = 0, G__11288__a = new Array(arguments.length -  0);
while (G__11288__i < G__11288__a.length) {G__11288__a[G__11288__i] = arguments[G__11288__i + 0]; ++G__11288__i;}
  args = new cljs.core.IndexedSeq(G__11288__a,0);
} 
return G__11287__delegate.call(this,args);};
G__11287.cljs$lang$maxFixedArity = 0;
G__11287.cljs$lang$applyTo = (function (arglist__11289){
var args = cljs.core.seq(arglist__11289);
return G__11287__delegate(args);
});
G__11287.cljs$core$IFn$_invoke$arity$variadic = G__11287__delegate;
return G__11287;
})()
;

return null;
});
