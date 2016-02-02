goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19839__i = 0, G__19839__a = new Array(arguments.length -  0);
while (G__19839__i < G__19839__a.length) {G__19839__a[G__19839__i] = arguments[G__19839__i + 0]; ++G__19839__i;}
  args = new cljs.core.IndexedSeq(G__19839__a,0);
} 
return G__19838__delegate.call(this,args);};
G__19838.cljs$lang$maxFixedArity = 0;
G__19838.cljs$lang$applyTo = (function (arglist__19840){
var args = cljs.core.seq(arglist__19840);
return G__19838__delegate(args);
});
G__19838.cljs$core$IFn$_invoke$arity$variadic = G__19838__delegate;
return G__19838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19842__i = 0, G__19842__a = new Array(arguments.length -  0);
while (G__19842__i < G__19842__a.length) {G__19842__a[G__19842__i] = arguments[G__19842__i + 0]; ++G__19842__i;}
  args = new cljs.core.IndexedSeq(G__19842__a,0);
} 
return G__19841__delegate.call(this,args);};
G__19841.cljs$lang$maxFixedArity = 0;
G__19841.cljs$lang$applyTo = (function (arglist__19843){
var args = cljs.core.seq(arglist__19843);
return G__19841__delegate(args);
});
G__19841.cljs$core$IFn$_invoke$arity$variadic = G__19841__delegate;
return G__19841;
})()
;

return null;
});
