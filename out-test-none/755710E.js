goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__279463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__279463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279464__i = 0, G__279464__a = new Array(arguments.length -  0);
while (G__279464__i < G__279464__a.length) {G__279464__a[G__279464__i] = arguments[G__279464__i + 0]; ++G__279464__i;}
  args = new cljs.core.IndexedSeq(G__279464__a,0);
} 
return G__279463__delegate.call(this,args);};
G__279463.cljs$lang$maxFixedArity = 0;
G__279463.cljs$lang$applyTo = (function (arglist__279465){
var args = cljs.core.seq(arglist__279465);
return G__279463__delegate(args);
});
G__279463.cljs$core$IFn$_invoke$arity$variadic = G__279463__delegate;
return G__279463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__279466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__279466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279467__i = 0, G__279467__a = new Array(arguments.length -  0);
while (G__279467__i < G__279467__a.length) {G__279467__a[G__279467__i] = arguments[G__279467__i + 0]; ++G__279467__i;}
  args = new cljs.core.IndexedSeq(G__279467__a,0);
} 
return G__279466__delegate.call(this,args);};
G__279466.cljs$lang$maxFixedArity = 0;
G__279466.cljs$lang$applyTo = (function (arglist__279468){
var args = cljs.core.seq(arglist__279468);
return G__279466__delegate(args);
});
G__279466.cljs$core$IFn$_invoke$arity$variadic = G__279466__delegate;
return G__279466;
})()
;

return null;
});
