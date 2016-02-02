goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35352__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35353__i = 0, G__35353__a = new Array(arguments.length -  0);
while (G__35353__i < G__35353__a.length) {G__35353__a[G__35353__i] = arguments[G__35353__i + 0]; ++G__35353__i;}
  args = new cljs.core.IndexedSeq(G__35353__a,0);
} 
return G__35352__delegate.call(this,args);};
G__35352.cljs$lang$maxFixedArity = 0;
G__35352.cljs$lang$applyTo = (function (arglist__35354){
var args = cljs.core.seq(arglist__35354);
return G__35352__delegate(args);
});
G__35352.cljs$core$IFn$_invoke$arity$variadic = G__35352__delegate;
return G__35352;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35355__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35356__i = 0, G__35356__a = new Array(arguments.length -  0);
while (G__35356__i < G__35356__a.length) {G__35356__a[G__35356__i] = arguments[G__35356__i + 0]; ++G__35356__i;}
  args = new cljs.core.IndexedSeq(G__35356__a,0);
} 
return G__35355__delegate.call(this,args);};
G__35355.cljs$lang$maxFixedArity = 0;
G__35355.cljs$lang$applyTo = (function (arglist__35357){
var args = cljs.core.seq(arglist__35357);
return G__35355__delegate(args);
});
G__35355.cljs$core$IFn$_invoke$arity$variadic = G__35355__delegate;
return G__35355;
})()
;

return null;
});
