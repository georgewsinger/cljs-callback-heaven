goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10169__i = 0, G__10169__a = new Array(arguments.length -  0);
while (G__10169__i < G__10169__a.length) {G__10169__a[G__10169__i] = arguments[G__10169__i + 0]; ++G__10169__i;}
  args = new cljs.core.IndexedSeq(G__10169__a,0);
} 
return G__10168__delegate.call(this,args);};
G__10168.cljs$lang$maxFixedArity = 0;
G__10168.cljs$lang$applyTo = (function (arglist__10170){
var args = cljs.core.seq(arglist__10170);
return G__10168__delegate(args);
});
G__10168.cljs$core$IFn$_invoke$arity$variadic = G__10168__delegate;
return G__10168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10172__i = 0, G__10172__a = new Array(arguments.length -  0);
while (G__10172__i < G__10172__a.length) {G__10172__a[G__10172__i] = arguments[G__10172__i + 0]; ++G__10172__i;}
  args = new cljs.core.IndexedSeq(G__10172__a,0);
} 
return G__10171__delegate.call(this,args);};
G__10171.cljs$lang$maxFixedArity = 0;
G__10171.cljs$lang$applyTo = (function (arglist__10173){
var args = cljs.core.seq(arglist__10173);
return G__10171__delegate(args);
});
G__10171.cljs$core$IFn$_invoke$arity$variadic = G__10171__delegate;
return G__10171;
})()
;

return null;
});
