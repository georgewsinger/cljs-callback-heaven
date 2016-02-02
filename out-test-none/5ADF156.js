goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162255__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162256__i = 0, G__162256__a = new Array(arguments.length -  0);
while (G__162256__i < G__162256__a.length) {G__162256__a[G__162256__i] = arguments[G__162256__i + 0]; ++G__162256__i;}
  args = new cljs.core.IndexedSeq(G__162256__a,0);
} 
return G__162255__delegate.call(this,args);};
G__162255.cljs$lang$maxFixedArity = 0;
G__162255.cljs$lang$applyTo = (function (arglist__162257){
var args = cljs.core.seq(arglist__162257);
return G__162255__delegate(args);
});
G__162255.cljs$core$IFn$_invoke$arity$variadic = G__162255__delegate;
return G__162255;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162258__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162259__i = 0, G__162259__a = new Array(arguments.length -  0);
while (G__162259__i < G__162259__a.length) {G__162259__a[G__162259__i] = arguments[G__162259__i + 0]; ++G__162259__i;}
  args = new cljs.core.IndexedSeq(G__162259__a,0);
} 
return G__162258__delegate.call(this,args);};
G__162258.cljs$lang$maxFixedArity = 0;
G__162258.cljs$lang$applyTo = (function (arglist__162260){
var args = cljs.core.seq(arglist__162260);
return G__162258__delegate(args);
});
G__162258.cljs$core$IFn$_invoke$arity$variadic = G__162258__delegate;
return G__162258;
})()
;

return null;
});
