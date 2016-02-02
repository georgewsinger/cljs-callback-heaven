goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16980__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16981__i = 0, G__16981__a = new Array(arguments.length -  0);
while (G__16981__i < G__16981__a.length) {G__16981__a[G__16981__i] = arguments[G__16981__i + 0]; ++G__16981__i;}
  args = new cljs.core.IndexedSeq(G__16981__a,0);
} 
return G__16980__delegate.call(this,args);};
G__16980.cljs$lang$maxFixedArity = 0;
G__16980.cljs$lang$applyTo = (function (arglist__16982){
var args = cljs.core.seq(arglist__16982);
return G__16980__delegate(args);
});
G__16980.cljs$core$IFn$_invoke$arity$variadic = G__16980__delegate;
return G__16980;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16983__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16984__i = 0, G__16984__a = new Array(arguments.length -  0);
while (G__16984__i < G__16984__a.length) {G__16984__a[G__16984__i] = arguments[G__16984__i + 0]; ++G__16984__i;}
  args = new cljs.core.IndexedSeq(G__16984__a,0);
} 
return G__16983__delegate.call(this,args);};
G__16983.cljs$lang$maxFixedArity = 0;
G__16983.cljs$lang$applyTo = (function (arglist__16985){
var args = cljs.core.seq(arglist__16985);
return G__16983__delegate(args);
});
G__16983.cljs$core$IFn$_invoke$arity$variadic = G__16983__delegate;
return G__16983;
})()
;

return null;
});
