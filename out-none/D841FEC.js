goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10563__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10564__i = 0, G__10564__a = new Array(arguments.length -  0);
while (G__10564__i < G__10564__a.length) {G__10564__a[G__10564__i] = arguments[G__10564__i + 0]; ++G__10564__i;}
  args = new cljs.core.IndexedSeq(G__10564__a,0);
} 
return G__10563__delegate.call(this,args);};
G__10563.cljs$lang$maxFixedArity = 0;
G__10563.cljs$lang$applyTo = (function (arglist__10565){
var args = cljs.core.seq(arglist__10565);
return G__10563__delegate(args);
});
G__10563.cljs$core$IFn$_invoke$arity$variadic = G__10563__delegate;
return G__10563;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10566__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10567__i = 0, G__10567__a = new Array(arguments.length -  0);
while (G__10567__i < G__10567__a.length) {G__10567__a[G__10567__i] = arguments[G__10567__i + 0]; ++G__10567__i;}
  args = new cljs.core.IndexedSeq(G__10567__a,0);
} 
return G__10566__delegate.call(this,args);};
G__10566.cljs$lang$maxFixedArity = 0;
G__10566.cljs$lang$applyTo = (function (arglist__10568){
var args = cljs.core.seq(arglist__10568);
return G__10566__delegate(args);
});
G__10566.cljs$core$IFn$_invoke$arity$variadic = G__10566__delegate;
return G__10566;
})()
;

return null;
});
