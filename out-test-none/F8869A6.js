goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__224330__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__224330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__224331__i = 0, G__224331__a = new Array(arguments.length -  0);
while (G__224331__i < G__224331__a.length) {G__224331__a[G__224331__i] = arguments[G__224331__i + 0]; ++G__224331__i;}
  args = new cljs.core.IndexedSeq(G__224331__a,0);
} 
return G__224330__delegate.call(this,args);};
G__224330.cljs$lang$maxFixedArity = 0;
G__224330.cljs$lang$applyTo = (function (arglist__224332){
var args = cljs.core.seq(arglist__224332);
return G__224330__delegate(args);
});
G__224330.cljs$core$IFn$_invoke$arity$variadic = G__224330__delegate;
return G__224330;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__224333__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__224333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__224334__i = 0, G__224334__a = new Array(arguments.length -  0);
while (G__224334__i < G__224334__a.length) {G__224334__a[G__224334__i] = arguments[G__224334__i + 0]; ++G__224334__i;}
  args = new cljs.core.IndexedSeq(G__224334__a,0);
} 
return G__224333__delegate.call(this,args);};
G__224333.cljs$lang$maxFixedArity = 0;
G__224333.cljs$lang$applyTo = (function (arglist__224335){
var args = cljs.core.seq(arglist__224335);
return G__224333__delegate(args);
});
G__224333.cljs$core$IFn$_invoke$arity$variadic = G__224333__delegate;
return G__224333;
})()
;

return null;
});
