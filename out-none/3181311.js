goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15618__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15619__i = 0, G__15619__a = new Array(arguments.length -  0);
while (G__15619__i < G__15619__a.length) {G__15619__a[G__15619__i] = arguments[G__15619__i + 0]; ++G__15619__i;}
  args = new cljs.core.IndexedSeq(G__15619__a,0);
} 
return G__15618__delegate.call(this,args);};
G__15618.cljs$lang$maxFixedArity = 0;
G__15618.cljs$lang$applyTo = (function (arglist__15620){
var args = cljs.core.seq(arglist__15620);
return G__15618__delegate(args);
});
G__15618.cljs$core$IFn$_invoke$arity$variadic = G__15618__delegate;
return G__15618;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15621__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15622__i = 0, G__15622__a = new Array(arguments.length -  0);
while (G__15622__i < G__15622__a.length) {G__15622__a[G__15622__i] = arguments[G__15622__i + 0]; ++G__15622__i;}
  args = new cljs.core.IndexedSeq(G__15622__a,0);
} 
return G__15621__delegate.call(this,args);};
G__15621.cljs$lang$maxFixedArity = 0;
G__15621.cljs$lang$applyTo = (function (arglist__15623){
var args = cljs.core.seq(arglist__15623);
return G__15621__delegate(args);
});
G__15621.cljs$core$IFn$_invoke$arity$variadic = G__15621__delegate;
return G__15621;
})()
;

return null;
});
