goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13689__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13690__i = 0, G__13690__a = new Array(arguments.length -  0);
while (G__13690__i < G__13690__a.length) {G__13690__a[G__13690__i] = arguments[G__13690__i + 0]; ++G__13690__i;}
  args = new cljs.core.IndexedSeq(G__13690__a,0);
} 
return G__13689__delegate.call(this,args);};
G__13689.cljs$lang$maxFixedArity = 0;
G__13689.cljs$lang$applyTo = (function (arglist__13691){
var args = cljs.core.seq(arglist__13691);
return G__13689__delegate(args);
});
G__13689.cljs$core$IFn$_invoke$arity$variadic = G__13689__delegate;
return G__13689;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13692__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13693__i = 0, G__13693__a = new Array(arguments.length -  0);
while (G__13693__i < G__13693__a.length) {G__13693__a[G__13693__i] = arguments[G__13693__i + 0]; ++G__13693__i;}
  args = new cljs.core.IndexedSeq(G__13693__a,0);
} 
return G__13692__delegate.call(this,args);};
G__13692.cljs$lang$maxFixedArity = 0;
G__13692.cljs$lang$applyTo = (function (arglist__13694){
var args = cljs.core.seq(arglist__13694);
return G__13692__delegate(args);
});
G__13692.cljs$core$IFn$_invoke$arity$variadic = G__13692__delegate;
return G__13692;
})()
;

return null;
});
