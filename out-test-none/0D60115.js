goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32397__i = 0, G__32397__a = new Array(arguments.length -  0);
while (G__32397__i < G__32397__a.length) {G__32397__a[G__32397__i] = arguments[G__32397__i + 0]; ++G__32397__i;}
  args = new cljs.core.IndexedSeq(G__32397__a,0);
} 
return G__32396__delegate.call(this,args);};
G__32396.cljs$lang$maxFixedArity = 0;
G__32396.cljs$lang$applyTo = (function (arglist__32398){
var args = cljs.core.seq(arglist__32398);
return G__32396__delegate(args);
});
G__32396.cljs$core$IFn$_invoke$arity$variadic = G__32396__delegate;
return G__32396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32400__i = 0, G__32400__a = new Array(arguments.length -  0);
while (G__32400__i < G__32400__a.length) {G__32400__a[G__32400__i] = arguments[G__32400__i + 0]; ++G__32400__i;}
  args = new cljs.core.IndexedSeq(G__32400__a,0);
} 
return G__32399__delegate.call(this,args);};
G__32399.cljs$lang$maxFixedArity = 0;
G__32399.cljs$lang$applyTo = (function (arglist__32401){
var args = cljs.core.seq(arglist__32401);
return G__32399__delegate(args);
});
G__32399.cljs$core$IFn$_invoke$arity$variadic = G__32399__delegate;
return G__32399;
})()
;

return null;
});
