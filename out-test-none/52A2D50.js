goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16043__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16044__i = 0, G__16044__a = new Array(arguments.length -  0);
while (G__16044__i < G__16044__a.length) {G__16044__a[G__16044__i] = arguments[G__16044__i + 0]; ++G__16044__i;}
  args = new cljs.core.IndexedSeq(G__16044__a,0);
} 
return G__16043__delegate.call(this,args);};
G__16043.cljs$lang$maxFixedArity = 0;
G__16043.cljs$lang$applyTo = (function (arglist__16045){
var args = cljs.core.seq(arglist__16045);
return G__16043__delegate(args);
});
G__16043.cljs$core$IFn$_invoke$arity$variadic = G__16043__delegate;
return G__16043;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16046__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16047__i = 0, G__16047__a = new Array(arguments.length -  0);
while (G__16047__i < G__16047__a.length) {G__16047__a[G__16047__i] = arguments[G__16047__i + 0]; ++G__16047__i;}
  args = new cljs.core.IndexedSeq(G__16047__a,0);
} 
return G__16046__delegate.call(this,args);};
G__16046.cljs$lang$maxFixedArity = 0;
G__16046.cljs$lang$applyTo = (function (arglist__16048){
var args = cljs.core.seq(arglist__16048);
return G__16046__delegate(args);
});
G__16046.cljs$core$IFn$_invoke$arity$variadic = G__16046__delegate;
return G__16046;
})()
;

return null;
});
