goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16868__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16869__i = 0, G__16869__a = new Array(arguments.length -  0);
while (G__16869__i < G__16869__a.length) {G__16869__a[G__16869__i] = arguments[G__16869__i + 0]; ++G__16869__i;}
  args = new cljs.core.IndexedSeq(G__16869__a,0);
} 
return G__16868__delegate.call(this,args);};
G__16868.cljs$lang$maxFixedArity = 0;
G__16868.cljs$lang$applyTo = (function (arglist__16870){
var args = cljs.core.seq(arglist__16870);
return G__16868__delegate(args);
});
G__16868.cljs$core$IFn$_invoke$arity$variadic = G__16868__delegate;
return G__16868;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16871__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16872__i = 0, G__16872__a = new Array(arguments.length -  0);
while (G__16872__i < G__16872__a.length) {G__16872__a[G__16872__i] = arguments[G__16872__i + 0]; ++G__16872__i;}
  args = new cljs.core.IndexedSeq(G__16872__a,0);
} 
return G__16871__delegate.call(this,args);};
G__16871.cljs$lang$maxFixedArity = 0;
G__16871.cljs$lang$applyTo = (function (arglist__16873){
var args = cljs.core.seq(arglist__16873);
return G__16871__delegate(args);
});
G__16871.cljs$core$IFn$_invoke$arity$variadic = G__16871__delegate;
return G__16871;
})()
;

return null;
});
