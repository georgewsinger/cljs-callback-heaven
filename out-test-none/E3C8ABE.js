goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__340024__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__340024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340025__i = 0, G__340025__a = new Array(arguments.length -  0);
while (G__340025__i < G__340025__a.length) {G__340025__a[G__340025__i] = arguments[G__340025__i + 0]; ++G__340025__i;}
  args = new cljs.core.IndexedSeq(G__340025__a,0);
} 
return G__340024__delegate.call(this,args);};
G__340024.cljs$lang$maxFixedArity = 0;
G__340024.cljs$lang$applyTo = (function (arglist__340026){
var args = cljs.core.seq(arglist__340026);
return G__340024__delegate(args);
});
G__340024.cljs$core$IFn$_invoke$arity$variadic = G__340024__delegate;
return G__340024;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__340027__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__340027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340028__i = 0, G__340028__a = new Array(arguments.length -  0);
while (G__340028__i < G__340028__a.length) {G__340028__a[G__340028__i] = arguments[G__340028__i + 0]; ++G__340028__i;}
  args = new cljs.core.IndexedSeq(G__340028__a,0);
} 
return G__340027__delegate.call(this,args);};
G__340027.cljs$lang$maxFixedArity = 0;
G__340027.cljs$lang$applyTo = (function (arglist__340029){
var args = cljs.core.seq(arglist__340029);
return G__340027__delegate(args);
});
G__340027.cljs$core$IFn$_invoke$arity$variadic = G__340027__delegate;
return G__340027;
})()
;

return null;
});
