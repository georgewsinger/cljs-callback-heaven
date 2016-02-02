goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23674__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23675__i = 0, G__23675__a = new Array(arguments.length -  0);
while (G__23675__i < G__23675__a.length) {G__23675__a[G__23675__i] = arguments[G__23675__i + 0]; ++G__23675__i;}
  args = new cljs.core.IndexedSeq(G__23675__a,0);
} 
return G__23674__delegate.call(this,args);};
G__23674.cljs$lang$maxFixedArity = 0;
G__23674.cljs$lang$applyTo = (function (arglist__23676){
var args = cljs.core.seq(arglist__23676);
return G__23674__delegate(args);
});
G__23674.cljs$core$IFn$_invoke$arity$variadic = G__23674__delegate;
return G__23674;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23677__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23678__i = 0, G__23678__a = new Array(arguments.length -  0);
while (G__23678__i < G__23678__a.length) {G__23678__a[G__23678__i] = arguments[G__23678__i + 0]; ++G__23678__i;}
  args = new cljs.core.IndexedSeq(G__23678__a,0);
} 
return G__23677__delegate.call(this,args);};
G__23677.cljs$lang$maxFixedArity = 0;
G__23677.cljs$lang$applyTo = (function (arglist__23679){
var args = cljs.core.seq(arglist__23679);
return G__23677__delegate(args);
});
G__23677.cljs$core$IFn$_invoke$arity$variadic = G__23677__delegate;
return G__23677;
})()
;

return null;
});
