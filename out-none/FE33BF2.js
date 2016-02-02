goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12019__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12020__i = 0, G__12020__a = new Array(arguments.length -  0);
while (G__12020__i < G__12020__a.length) {G__12020__a[G__12020__i] = arguments[G__12020__i + 0]; ++G__12020__i;}
  args = new cljs.core.IndexedSeq(G__12020__a,0);
} 
return G__12019__delegate.call(this,args);};
G__12019.cljs$lang$maxFixedArity = 0;
G__12019.cljs$lang$applyTo = (function (arglist__12021){
var args = cljs.core.seq(arglist__12021);
return G__12019__delegate(args);
});
G__12019.cljs$core$IFn$_invoke$arity$variadic = G__12019__delegate;
return G__12019;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12022__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12023__i = 0, G__12023__a = new Array(arguments.length -  0);
while (G__12023__i < G__12023__a.length) {G__12023__a[G__12023__i] = arguments[G__12023__i + 0]; ++G__12023__i;}
  args = new cljs.core.IndexedSeq(G__12023__a,0);
} 
return G__12022__delegate.call(this,args);};
G__12022.cljs$lang$maxFixedArity = 0;
G__12022.cljs$lang$applyTo = (function (arglist__12024){
var args = cljs.core.seq(arglist__12024);
return G__12022__delegate(args);
});
G__12022.cljs$core$IFn$_invoke$arity$variadic = G__12022__delegate;
return G__12022;
})()
;

return null;
});
