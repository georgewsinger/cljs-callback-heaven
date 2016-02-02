goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12397__i = 0, G__12397__a = new Array(arguments.length -  0);
while (G__12397__i < G__12397__a.length) {G__12397__a[G__12397__i] = arguments[G__12397__i + 0]; ++G__12397__i;}
  args = new cljs.core.IndexedSeq(G__12397__a,0);
} 
return G__12396__delegate.call(this,args);};
G__12396.cljs$lang$maxFixedArity = 0;
G__12396.cljs$lang$applyTo = (function (arglist__12398){
var args = cljs.core.seq(arglist__12398);
return G__12396__delegate(args);
});
G__12396.cljs$core$IFn$_invoke$arity$variadic = G__12396__delegate;
return G__12396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12400__i = 0, G__12400__a = new Array(arguments.length -  0);
while (G__12400__i < G__12400__a.length) {G__12400__a[G__12400__i] = arguments[G__12400__i + 0]; ++G__12400__i;}
  args = new cljs.core.IndexedSeq(G__12400__a,0);
} 
return G__12399__delegate.call(this,args);};
G__12399.cljs$lang$maxFixedArity = 0;
G__12399.cljs$lang$applyTo = (function (arglist__12401){
var args = cljs.core.seq(arglist__12401);
return G__12399__delegate(args);
});
G__12399.cljs$core$IFn$_invoke$arity$variadic = G__12399__delegate;
return G__12399;
})()
;

return null;
});
