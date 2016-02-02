goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41028__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41029__i = 0, G__41029__a = new Array(arguments.length -  0);
while (G__41029__i < G__41029__a.length) {G__41029__a[G__41029__i] = arguments[G__41029__i + 0]; ++G__41029__i;}
  args = new cljs.core.IndexedSeq(G__41029__a,0);
} 
return G__41028__delegate.call(this,args);};
G__41028.cljs$lang$maxFixedArity = 0;
G__41028.cljs$lang$applyTo = (function (arglist__41030){
var args = cljs.core.seq(arglist__41030);
return G__41028__delegate(args);
});
G__41028.cljs$core$IFn$_invoke$arity$variadic = G__41028__delegate;
return G__41028;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41031__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41032__i = 0, G__41032__a = new Array(arguments.length -  0);
while (G__41032__i < G__41032__a.length) {G__41032__a[G__41032__i] = arguments[G__41032__i + 0]; ++G__41032__i;}
  args = new cljs.core.IndexedSeq(G__41032__a,0);
} 
return G__41031__delegate.call(this,args);};
G__41031.cljs$lang$maxFixedArity = 0;
G__41031.cljs$lang$applyTo = (function (arglist__41033){
var args = cljs.core.seq(arglist__41033);
return G__41031__delegate(args);
});
G__41031.cljs$core$IFn$_invoke$arity$variadic = G__41031__delegate;
return G__41031;
})()
;

return null;
});
