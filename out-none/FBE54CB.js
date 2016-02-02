goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65332__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65333__i = 0, G__65333__a = new Array(arguments.length -  0);
while (G__65333__i < G__65333__a.length) {G__65333__a[G__65333__i] = arguments[G__65333__i + 0]; ++G__65333__i;}
  args = new cljs.core.IndexedSeq(G__65333__a,0);
} 
return G__65332__delegate.call(this,args);};
G__65332.cljs$lang$maxFixedArity = 0;
G__65332.cljs$lang$applyTo = (function (arglist__65334){
var args = cljs.core.seq(arglist__65334);
return G__65332__delegate(args);
});
G__65332.cljs$core$IFn$_invoke$arity$variadic = G__65332__delegate;
return G__65332;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65335__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65336__i = 0, G__65336__a = new Array(arguments.length -  0);
while (G__65336__i < G__65336__a.length) {G__65336__a[G__65336__i] = arguments[G__65336__i + 0]; ++G__65336__i;}
  args = new cljs.core.IndexedSeq(G__65336__a,0);
} 
return G__65335__delegate.call(this,args);};
G__65335.cljs$lang$maxFixedArity = 0;
G__65335.cljs$lang$applyTo = (function (arglist__65337){
var args = cljs.core.seq(arglist__65337);
return G__65335__delegate(args);
});
G__65335.cljs$core$IFn$_invoke$arity$variadic = G__65335__delegate;
return G__65335;
})()
;

return null;
});
