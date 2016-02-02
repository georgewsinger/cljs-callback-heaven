goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33090__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33091__i = 0, G__33091__a = new Array(arguments.length -  0);
while (G__33091__i < G__33091__a.length) {G__33091__a[G__33091__i] = arguments[G__33091__i + 0]; ++G__33091__i;}
  args = new cljs.core.IndexedSeq(G__33091__a,0);
} 
return G__33090__delegate.call(this,args);};
G__33090.cljs$lang$maxFixedArity = 0;
G__33090.cljs$lang$applyTo = (function (arglist__33092){
var args = cljs.core.seq(arglist__33092);
return G__33090__delegate(args);
});
G__33090.cljs$core$IFn$_invoke$arity$variadic = G__33090__delegate;
return G__33090;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33093__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33094__i = 0, G__33094__a = new Array(arguments.length -  0);
while (G__33094__i < G__33094__a.length) {G__33094__a[G__33094__i] = arguments[G__33094__i + 0]; ++G__33094__i;}
  args = new cljs.core.IndexedSeq(G__33094__a,0);
} 
return G__33093__delegate.call(this,args);};
G__33093.cljs$lang$maxFixedArity = 0;
G__33093.cljs$lang$applyTo = (function (arglist__33095){
var args = cljs.core.seq(arglist__33095);
return G__33093__delegate(args);
});
G__33093.cljs$core$IFn$_invoke$arity$variadic = G__33093__delegate;
return G__33093;
})()
;

return null;
});
