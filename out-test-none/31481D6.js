goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37690__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37691__i = 0, G__37691__a = new Array(arguments.length -  0);
while (G__37691__i < G__37691__a.length) {G__37691__a[G__37691__i] = arguments[G__37691__i + 0]; ++G__37691__i;}
  args = new cljs.core.IndexedSeq(G__37691__a,0);
} 
return G__37690__delegate.call(this,args);};
G__37690.cljs$lang$maxFixedArity = 0;
G__37690.cljs$lang$applyTo = (function (arglist__37692){
var args = cljs.core.seq(arglist__37692);
return G__37690__delegate(args);
});
G__37690.cljs$core$IFn$_invoke$arity$variadic = G__37690__delegate;
return G__37690;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37693__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37694__i = 0, G__37694__a = new Array(arguments.length -  0);
while (G__37694__i < G__37694__a.length) {G__37694__a[G__37694__i] = arguments[G__37694__i + 0]; ++G__37694__i;}
  args = new cljs.core.IndexedSeq(G__37694__a,0);
} 
return G__37693__delegate.call(this,args);};
G__37693.cljs$lang$maxFixedArity = 0;
G__37693.cljs$lang$applyTo = (function (arglist__37695){
var args = cljs.core.seq(arglist__37695);
return G__37693__delegate(args);
});
G__37693.cljs$core$IFn$_invoke$arity$variadic = G__37693__delegate;
return G__37693;
})()
;

return null;
});
