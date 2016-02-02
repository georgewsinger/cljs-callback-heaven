goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15050__i = 0, G__15050__a = new Array(arguments.length -  0);
while (G__15050__i < G__15050__a.length) {G__15050__a[G__15050__i] = arguments[G__15050__i + 0]; ++G__15050__i;}
  args = new cljs.core.IndexedSeq(G__15050__a,0);
} 
return G__15049__delegate.call(this,args);};
G__15049.cljs$lang$maxFixedArity = 0;
G__15049.cljs$lang$applyTo = (function (arglist__15051){
var args = cljs.core.seq(arglist__15051);
return G__15049__delegate(args);
});
G__15049.cljs$core$IFn$_invoke$arity$variadic = G__15049__delegate;
return G__15049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15053__i = 0, G__15053__a = new Array(arguments.length -  0);
while (G__15053__i < G__15053__a.length) {G__15053__a[G__15053__i] = arguments[G__15053__i + 0]; ++G__15053__i;}
  args = new cljs.core.IndexedSeq(G__15053__a,0);
} 
return G__15052__delegate.call(this,args);};
G__15052.cljs$lang$maxFixedArity = 0;
G__15052.cljs$lang$applyTo = (function (arglist__15054){
var args = cljs.core.seq(arglist__15054);
return G__15052__delegate(args);
});
G__15052.cljs$core$IFn$_invoke$arity$variadic = G__15052__delegate;
return G__15052;
})()
;

return null;
});
