goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10004__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10005__i = 0, G__10005__a = new Array(arguments.length -  0);
while (G__10005__i < G__10005__a.length) {G__10005__a[G__10005__i] = arguments[G__10005__i + 0]; ++G__10005__i;}
  args = new cljs.core.IndexedSeq(G__10005__a,0);
} 
return G__10004__delegate.call(this,args);};
G__10004.cljs$lang$maxFixedArity = 0;
G__10004.cljs$lang$applyTo = (function (arglist__10006){
var args = cljs.core.seq(arglist__10006);
return G__10004__delegate(args);
});
G__10004.cljs$core$IFn$_invoke$arity$variadic = G__10004__delegate;
return G__10004;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10007__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10008__i = 0, G__10008__a = new Array(arguments.length -  0);
while (G__10008__i < G__10008__a.length) {G__10008__a[G__10008__i] = arguments[G__10008__i + 0]; ++G__10008__i;}
  args = new cljs.core.IndexedSeq(G__10008__a,0);
} 
return G__10007__delegate.call(this,args);};
G__10007.cljs$lang$maxFixedArity = 0;
G__10007.cljs$lang$applyTo = (function (arglist__10009){
var args = cljs.core.seq(arglist__10009);
return G__10007__delegate(args);
});
G__10007.cljs$core$IFn$_invoke$arity$variadic = G__10007__delegate;
return G__10007;
})()
;

return null;
});
