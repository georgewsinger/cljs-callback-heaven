goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10861__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10862__i = 0, G__10862__a = new Array(arguments.length -  0);
while (G__10862__i < G__10862__a.length) {G__10862__a[G__10862__i] = arguments[G__10862__i + 0]; ++G__10862__i;}
  args = new cljs.core.IndexedSeq(G__10862__a,0);
} 
return G__10861__delegate.call(this,args);};
G__10861.cljs$lang$maxFixedArity = 0;
G__10861.cljs$lang$applyTo = (function (arglist__10863){
var args = cljs.core.seq(arglist__10863);
return G__10861__delegate(args);
});
G__10861.cljs$core$IFn$_invoke$arity$variadic = G__10861__delegate;
return G__10861;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10864__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10865__i = 0, G__10865__a = new Array(arguments.length -  0);
while (G__10865__i < G__10865__a.length) {G__10865__a[G__10865__i] = arguments[G__10865__i + 0]; ++G__10865__i;}
  args = new cljs.core.IndexedSeq(G__10865__a,0);
} 
return G__10864__delegate.call(this,args);};
G__10864.cljs$lang$maxFixedArity = 0;
G__10864.cljs$lang$applyTo = (function (arglist__10866){
var args = cljs.core.seq(arglist__10866);
return G__10864__delegate(args);
});
G__10864.cljs$core$IFn$_invoke$arity$variadic = G__10864__delegate;
return G__10864;
})()
;

return null;
});
