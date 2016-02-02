goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10613__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10614__i = 0, G__10614__a = new Array(arguments.length -  0);
while (G__10614__i < G__10614__a.length) {G__10614__a[G__10614__i] = arguments[G__10614__i + 0]; ++G__10614__i;}
  args = new cljs.core.IndexedSeq(G__10614__a,0);
} 
return G__10613__delegate.call(this,args);};
G__10613.cljs$lang$maxFixedArity = 0;
G__10613.cljs$lang$applyTo = (function (arglist__10615){
var args = cljs.core.seq(arglist__10615);
return G__10613__delegate(args);
});
G__10613.cljs$core$IFn$_invoke$arity$variadic = G__10613__delegate;
return G__10613;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10616__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10617__i = 0, G__10617__a = new Array(arguments.length -  0);
while (G__10617__i < G__10617__a.length) {G__10617__a[G__10617__i] = arguments[G__10617__i + 0]; ++G__10617__i;}
  args = new cljs.core.IndexedSeq(G__10617__a,0);
} 
return G__10616__delegate.call(this,args);};
G__10616.cljs$lang$maxFixedArity = 0;
G__10616.cljs$lang$applyTo = (function (arglist__10618){
var args = cljs.core.seq(arglist__10618);
return G__10616__delegate(args);
});
G__10616.cljs$core$IFn$_invoke$arity$variadic = G__10616__delegate;
return G__10616;
})()
;

return null;
});
