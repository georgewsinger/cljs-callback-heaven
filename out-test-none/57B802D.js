goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__167907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__167907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167908__i = 0, G__167908__a = new Array(arguments.length -  0);
while (G__167908__i < G__167908__a.length) {G__167908__a[G__167908__i] = arguments[G__167908__i + 0]; ++G__167908__i;}
  args = new cljs.core.IndexedSeq(G__167908__a,0);
} 
return G__167907__delegate.call(this,args);};
G__167907.cljs$lang$maxFixedArity = 0;
G__167907.cljs$lang$applyTo = (function (arglist__167909){
var args = cljs.core.seq(arglist__167909);
return G__167907__delegate(args);
});
G__167907.cljs$core$IFn$_invoke$arity$variadic = G__167907__delegate;
return G__167907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__167910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__167910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167911__i = 0, G__167911__a = new Array(arguments.length -  0);
while (G__167911__i < G__167911__a.length) {G__167911__a[G__167911__i] = arguments[G__167911__i + 0]; ++G__167911__i;}
  args = new cljs.core.IndexedSeq(G__167911__a,0);
} 
return G__167910__delegate.call(this,args);};
G__167910.cljs$lang$maxFixedArity = 0;
G__167910.cljs$lang$applyTo = (function (arglist__167912){
var args = cljs.core.seq(arglist__167912);
return G__167910__delegate(args);
});
G__167910.cljs$core$IFn$_invoke$arity$variadic = G__167910__delegate;
return G__167910;
})()
;

return null;
});
