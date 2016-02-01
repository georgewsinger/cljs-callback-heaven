goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10156__i = 0, G__10156__a = new Array(arguments.length -  0);
while (G__10156__i < G__10156__a.length) {G__10156__a[G__10156__i] = arguments[G__10156__i + 0]; ++G__10156__i;}
  args = new cljs.core.IndexedSeq(G__10156__a,0);
} 
return G__10155__delegate.call(this,args);};
G__10155.cljs$lang$maxFixedArity = 0;
G__10155.cljs$lang$applyTo = (function (arglist__10157){
var args = cljs.core.seq(arglist__10157);
return G__10155__delegate(args);
});
G__10155.cljs$core$IFn$_invoke$arity$variadic = G__10155__delegate;
return G__10155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10159__i = 0, G__10159__a = new Array(arguments.length -  0);
while (G__10159__i < G__10159__a.length) {G__10159__a[G__10159__i] = arguments[G__10159__i + 0]; ++G__10159__i;}
  args = new cljs.core.IndexedSeq(G__10159__a,0);
} 
return G__10158__delegate.call(this,args);};
G__10158.cljs$lang$maxFixedArity = 0;
G__10158.cljs$lang$applyTo = (function (arglist__10160){
var args = cljs.core.seq(arglist__10160);
return G__10158__delegate(args);
});
G__10158.cljs$core$IFn$_invoke$arity$variadic = G__10158__delegate;
return G__10158;
})()
;

return null;
});
