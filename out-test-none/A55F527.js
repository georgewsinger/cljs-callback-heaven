goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__204548__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__204548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__204549__i = 0, G__204549__a = new Array(arguments.length -  0);
while (G__204549__i < G__204549__a.length) {G__204549__a[G__204549__i] = arguments[G__204549__i + 0]; ++G__204549__i;}
  args = new cljs.core.IndexedSeq(G__204549__a,0);
} 
return G__204548__delegate.call(this,args);};
G__204548.cljs$lang$maxFixedArity = 0;
G__204548.cljs$lang$applyTo = (function (arglist__204550){
var args = cljs.core.seq(arglist__204550);
return G__204548__delegate(args);
});
G__204548.cljs$core$IFn$_invoke$arity$variadic = G__204548__delegate;
return G__204548;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__204551__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__204551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__204552__i = 0, G__204552__a = new Array(arguments.length -  0);
while (G__204552__i < G__204552__a.length) {G__204552__a[G__204552__i] = arguments[G__204552__i + 0]; ++G__204552__i;}
  args = new cljs.core.IndexedSeq(G__204552__a,0);
} 
return G__204551__delegate.call(this,args);};
G__204551.cljs$lang$maxFixedArity = 0;
G__204551.cljs$lang$applyTo = (function (arglist__204553){
var args = cljs.core.seq(arglist__204553);
return G__204551__delegate(args);
});
G__204551.cljs$core$IFn$_invoke$arity$variadic = G__204551__delegate;
return G__204551;
})()
;

return null;
});