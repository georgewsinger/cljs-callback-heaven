goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10019__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10020__i = 0, G__10020__a = new Array(arguments.length -  0);
while (G__10020__i < G__10020__a.length) {G__10020__a[G__10020__i] = arguments[G__10020__i + 0]; ++G__10020__i;}
  args = new cljs.core.IndexedSeq(G__10020__a,0);
} 
return G__10019__delegate.call(this,args);};
G__10019.cljs$lang$maxFixedArity = 0;
G__10019.cljs$lang$applyTo = (function (arglist__10021){
var args = cljs.core.seq(arglist__10021);
return G__10019__delegate(args);
});
G__10019.cljs$core$IFn$_invoke$arity$variadic = G__10019__delegate;
return G__10019;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10022__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10023__i = 0, G__10023__a = new Array(arguments.length -  0);
while (G__10023__i < G__10023__a.length) {G__10023__a[G__10023__i] = arguments[G__10023__i + 0]; ++G__10023__i;}
  args = new cljs.core.IndexedSeq(G__10023__a,0);
} 
return G__10022__delegate.call(this,args);};
G__10022.cljs$lang$maxFixedArity = 0;
G__10022.cljs$lang$applyTo = (function (arglist__10024){
var args = cljs.core.seq(arglist__10024);
return G__10022__delegate(args);
});
G__10022.cljs$core$IFn$_invoke$arity$variadic = G__10022__delegate;
return G__10022;
})()
;

return null;
});
