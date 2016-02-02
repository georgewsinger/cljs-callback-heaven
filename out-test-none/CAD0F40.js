goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25997__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25998__i = 0, G__25998__a = new Array(arguments.length -  0);
while (G__25998__i < G__25998__a.length) {G__25998__a[G__25998__i] = arguments[G__25998__i + 0]; ++G__25998__i;}
  args = new cljs.core.IndexedSeq(G__25998__a,0);
} 
return G__25997__delegate.call(this,args);};
G__25997.cljs$lang$maxFixedArity = 0;
G__25997.cljs$lang$applyTo = (function (arglist__25999){
var args = cljs.core.seq(arglist__25999);
return G__25997__delegate(args);
});
G__25997.cljs$core$IFn$_invoke$arity$variadic = G__25997__delegate;
return G__25997;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26000__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26001__i = 0, G__26001__a = new Array(arguments.length -  0);
while (G__26001__i < G__26001__a.length) {G__26001__a[G__26001__i] = arguments[G__26001__i + 0]; ++G__26001__i;}
  args = new cljs.core.IndexedSeq(G__26001__a,0);
} 
return G__26000__delegate.call(this,args);};
G__26000.cljs$lang$maxFixedArity = 0;
G__26000.cljs$lang$applyTo = (function (arglist__26002){
var args = cljs.core.seq(arglist__26002);
return G__26000__delegate(args);
});
G__26000.cljs$core$IFn$_invoke$arity$variadic = G__26000__delegate;
return G__26000;
})()
;

return null;
});
