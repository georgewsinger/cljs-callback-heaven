goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23539__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23540__i = 0, G__23540__a = new Array(arguments.length -  0);
while (G__23540__i < G__23540__a.length) {G__23540__a[G__23540__i] = arguments[G__23540__i + 0]; ++G__23540__i;}
  args = new cljs.core.IndexedSeq(G__23540__a,0);
} 
return G__23539__delegate.call(this,args);};
G__23539.cljs$lang$maxFixedArity = 0;
G__23539.cljs$lang$applyTo = (function (arglist__23541){
var args = cljs.core.seq(arglist__23541);
return G__23539__delegate(args);
});
G__23539.cljs$core$IFn$_invoke$arity$variadic = G__23539__delegate;
return G__23539;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23542__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23543__i = 0, G__23543__a = new Array(arguments.length -  0);
while (G__23543__i < G__23543__a.length) {G__23543__a[G__23543__i] = arguments[G__23543__i + 0]; ++G__23543__i;}
  args = new cljs.core.IndexedSeq(G__23543__a,0);
} 
return G__23542__delegate.call(this,args);};
G__23542.cljs$lang$maxFixedArity = 0;
G__23542.cljs$lang$applyTo = (function (arglist__23544){
var args = cljs.core.seq(arglist__23544);
return G__23542__delegate(args);
});
G__23542.cljs$core$IFn$_invoke$arity$variadic = G__23542__delegate;
return G__23542;
})()
;

return null;
});
