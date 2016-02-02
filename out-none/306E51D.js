goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62552__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62553__i = 0, G__62553__a = new Array(arguments.length -  0);
while (G__62553__i < G__62553__a.length) {G__62553__a[G__62553__i] = arguments[G__62553__i + 0]; ++G__62553__i;}
  args = new cljs.core.IndexedSeq(G__62553__a,0);
} 
return G__62552__delegate.call(this,args);};
G__62552.cljs$lang$maxFixedArity = 0;
G__62552.cljs$lang$applyTo = (function (arglist__62554){
var args = cljs.core.seq(arglist__62554);
return G__62552__delegate(args);
});
G__62552.cljs$core$IFn$_invoke$arity$variadic = G__62552__delegate;
return G__62552;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62555__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62556__i = 0, G__62556__a = new Array(arguments.length -  0);
while (G__62556__i < G__62556__a.length) {G__62556__a[G__62556__i] = arguments[G__62556__i + 0]; ++G__62556__i;}
  args = new cljs.core.IndexedSeq(G__62556__a,0);
} 
return G__62555__delegate.call(this,args);};
G__62555.cljs$lang$maxFixedArity = 0;
G__62555.cljs$lang$applyTo = (function (arglist__62557){
var args = cljs.core.seq(arglist__62557);
return G__62555__delegate(args);
});
G__62555.cljs$core$IFn$_invoke$arity$variadic = G__62555__delegate;
return G__62555;
})()
;

return null;
});
