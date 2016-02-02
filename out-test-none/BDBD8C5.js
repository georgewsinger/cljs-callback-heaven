goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10157__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10158__i = 0, G__10158__a = new Array(arguments.length -  0);
while (G__10158__i < G__10158__a.length) {G__10158__a[G__10158__i] = arguments[G__10158__i + 0]; ++G__10158__i;}
  args = new cljs.core.IndexedSeq(G__10158__a,0);
} 
return G__10157__delegate.call(this,args);};
G__10157.cljs$lang$maxFixedArity = 0;
G__10157.cljs$lang$applyTo = (function (arglist__10159){
var args = cljs.core.seq(arglist__10159);
return G__10157__delegate(args);
});
G__10157.cljs$core$IFn$_invoke$arity$variadic = G__10157__delegate;
return G__10157;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10160__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10161__i = 0, G__10161__a = new Array(arguments.length -  0);
while (G__10161__i < G__10161__a.length) {G__10161__a[G__10161__i] = arguments[G__10161__i + 0]; ++G__10161__i;}
  args = new cljs.core.IndexedSeq(G__10161__a,0);
} 
return G__10160__delegate.call(this,args);};
G__10160.cljs$lang$maxFixedArity = 0;
G__10160.cljs$lang$applyTo = (function (arglist__10162){
var args = cljs.core.seq(arglist__10162);
return G__10160__delegate(args);
});
G__10160.cljs$core$IFn$_invoke$arity$variadic = G__10160__delegate;
return G__10160;
})()
;

return null;
});
