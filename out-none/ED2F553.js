goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9043__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9044__i = 0, G__9044__a = new Array(arguments.length -  0);
while (G__9044__i < G__9044__a.length) {G__9044__a[G__9044__i] = arguments[G__9044__i + 0]; ++G__9044__i;}
  args = new cljs.core.IndexedSeq(G__9044__a,0);
} 
return G__9043__delegate.call(this,args);};
G__9043.cljs$lang$maxFixedArity = 0;
G__9043.cljs$lang$applyTo = (function (arglist__9045){
var args = cljs.core.seq(arglist__9045);
return G__9043__delegate(args);
});
G__9043.cljs$core$IFn$_invoke$arity$variadic = G__9043__delegate;
return G__9043;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9046__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9047__i = 0, G__9047__a = new Array(arguments.length -  0);
while (G__9047__i < G__9047__a.length) {G__9047__a[G__9047__i] = arguments[G__9047__i + 0]; ++G__9047__i;}
  args = new cljs.core.IndexedSeq(G__9047__a,0);
} 
return G__9046__delegate.call(this,args);};
G__9046.cljs$lang$maxFixedArity = 0;
G__9046.cljs$lang$applyTo = (function (arglist__9048){
var args = cljs.core.seq(arglist__9048);
return G__9046__delegate(args);
});
G__9046.cljs$core$IFn$_invoke$arity$variadic = G__9046__delegate;
return G__9046;
})()
;

return null;
});
