goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11152__i = 0, G__11152__a = new Array(arguments.length -  0);
while (G__11152__i < G__11152__a.length) {G__11152__a[G__11152__i] = arguments[G__11152__i + 0]; ++G__11152__i;}
  args = new cljs.core.IndexedSeq(G__11152__a,0);
} 
return G__11151__delegate.call(this,args);};
G__11151.cljs$lang$maxFixedArity = 0;
G__11151.cljs$lang$applyTo = (function (arglist__11153){
var args = cljs.core.seq(arglist__11153);
return G__11151__delegate(args);
});
G__11151.cljs$core$IFn$_invoke$arity$variadic = G__11151__delegate;
return G__11151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11155__i = 0, G__11155__a = new Array(arguments.length -  0);
while (G__11155__i < G__11155__a.length) {G__11155__a[G__11155__i] = arguments[G__11155__i + 0]; ++G__11155__i;}
  args = new cljs.core.IndexedSeq(G__11155__a,0);
} 
return G__11154__delegate.call(this,args);};
G__11154.cljs$lang$maxFixedArity = 0;
G__11154.cljs$lang$applyTo = (function (arglist__11156){
var args = cljs.core.seq(arglist__11156);
return G__11154__delegate(args);
});
G__11154.cljs$core$IFn$_invoke$arity$variadic = G__11154__delegate;
return G__11154;
})()
;

return null;
});
