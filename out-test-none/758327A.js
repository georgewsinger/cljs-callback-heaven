goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184852__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184853__i = 0, G__184853__a = new Array(arguments.length -  0);
while (G__184853__i < G__184853__a.length) {G__184853__a[G__184853__i] = arguments[G__184853__i + 0]; ++G__184853__i;}
  args = new cljs.core.IndexedSeq(G__184853__a,0);
} 
return G__184852__delegate.call(this,args);};
G__184852.cljs$lang$maxFixedArity = 0;
G__184852.cljs$lang$applyTo = (function (arglist__184854){
var args = cljs.core.seq(arglist__184854);
return G__184852__delegate(args);
});
G__184852.cljs$core$IFn$_invoke$arity$variadic = G__184852__delegate;
return G__184852;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184855__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184856__i = 0, G__184856__a = new Array(arguments.length -  0);
while (G__184856__i < G__184856__a.length) {G__184856__a[G__184856__i] = arguments[G__184856__i + 0]; ++G__184856__i;}
  args = new cljs.core.IndexedSeq(G__184856__a,0);
} 
return G__184855__delegate.call(this,args);};
G__184855.cljs$lang$maxFixedArity = 0;
G__184855.cljs$lang$applyTo = (function (arglist__184857){
var args = cljs.core.seq(arglist__184857);
return G__184855__delegate(args);
});
G__184855.cljs$core$IFn$_invoke$arity$variadic = G__184855__delegate;
return G__184855;
})()
;

return null;
});
