goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16296__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16297__i = 0, G__16297__a = new Array(arguments.length -  0);
while (G__16297__i < G__16297__a.length) {G__16297__a[G__16297__i] = arguments[G__16297__i + 0]; ++G__16297__i;}
  args = new cljs.core.IndexedSeq(G__16297__a,0);
} 
return G__16296__delegate.call(this,args);};
G__16296.cljs$lang$maxFixedArity = 0;
G__16296.cljs$lang$applyTo = (function (arglist__16298){
var args = cljs.core.seq(arglist__16298);
return G__16296__delegate(args);
});
G__16296.cljs$core$IFn$_invoke$arity$variadic = G__16296__delegate;
return G__16296;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16299__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16300__i = 0, G__16300__a = new Array(arguments.length -  0);
while (G__16300__i < G__16300__a.length) {G__16300__a[G__16300__i] = arguments[G__16300__i + 0]; ++G__16300__i;}
  args = new cljs.core.IndexedSeq(G__16300__a,0);
} 
return G__16299__delegate.call(this,args);};
G__16299.cljs$lang$maxFixedArity = 0;
G__16299.cljs$lang$applyTo = (function (arglist__16301){
var args = cljs.core.seq(arglist__16301);
return G__16299__delegate(args);
});
G__16299.cljs$core$IFn$_invoke$arity$variadic = G__16299__delegate;
return G__16299;
})()
;

return null;
});
