goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56203__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56204__i = 0, G__56204__a = new Array(arguments.length -  0);
while (G__56204__i < G__56204__a.length) {G__56204__a[G__56204__i] = arguments[G__56204__i + 0]; ++G__56204__i;}
  args = new cljs.core.IndexedSeq(G__56204__a,0);
} 
return G__56203__delegate.call(this,args);};
G__56203.cljs$lang$maxFixedArity = 0;
G__56203.cljs$lang$applyTo = (function (arglist__56205){
var args = cljs.core.seq(arglist__56205);
return G__56203__delegate(args);
});
G__56203.cljs$core$IFn$_invoke$arity$variadic = G__56203__delegate;
return G__56203;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56206__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56207__i = 0, G__56207__a = new Array(arguments.length -  0);
while (G__56207__i < G__56207__a.length) {G__56207__a[G__56207__i] = arguments[G__56207__i + 0]; ++G__56207__i;}
  args = new cljs.core.IndexedSeq(G__56207__a,0);
} 
return G__56206__delegate.call(this,args);};
G__56206.cljs$lang$maxFixedArity = 0;
G__56206.cljs$lang$applyTo = (function (arglist__56208){
var args = cljs.core.seq(arglist__56208);
return G__56206__delegate(args);
});
G__56206.cljs$core$IFn$_invoke$arity$variadic = G__56206__delegate;
return G__56206;
})()
;

return null;
});
