goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10618__i = 0, G__10618__a = new Array(arguments.length -  0);
while (G__10618__i < G__10618__a.length) {G__10618__a[G__10618__i] = arguments[G__10618__i + 0]; ++G__10618__i;}
  args = new cljs.core.IndexedSeq(G__10618__a,0);
} 
return G__10617__delegate.call(this,args);};
G__10617.cljs$lang$maxFixedArity = 0;
G__10617.cljs$lang$applyTo = (function (arglist__10619){
var args = cljs.core.seq(arglist__10619);
return G__10617__delegate(args);
});
G__10617.cljs$core$IFn$_invoke$arity$variadic = G__10617__delegate;
return G__10617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10621__i = 0, G__10621__a = new Array(arguments.length -  0);
while (G__10621__i < G__10621__a.length) {G__10621__a[G__10621__i] = arguments[G__10621__i + 0]; ++G__10621__i;}
  args = new cljs.core.IndexedSeq(G__10621__a,0);
} 
return G__10620__delegate.call(this,args);};
G__10620.cljs$lang$maxFixedArity = 0;
G__10620.cljs$lang$applyTo = (function (arglist__10622){
var args = cljs.core.seq(arglist__10622);
return G__10620__delegate(args);
});
G__10620.cljs$core$IFn$_invoke$arity$variadic = G__10620__delegate;
return G__10620;
})()
;

return null;
});
