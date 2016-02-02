goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80106__i = 0, G__80106__a = new Array(arguments.length -  0);
while (G__80106__i < G__80106__a.length) {G__80106__a[G__80106__i] = arguments[G__80106__i + 0]; ++G__80106__i;}
  args = new cljs.core.IndexedSeq(G__80106__a,0);
} 
return G__80105__delegate.call(this,args);};
G__80105.cljs$lang$maxFixedArity = 0;
G__80105.cljs$lang$applyTo = (function (arglist__80107){
var args = cljs.core.seq(arglist__80107);
return G__80105__delegate(args);
});
G__80105.cljs$core$IFn$_invoke$arity$variadic = G__80105__delegate;
return G__80105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80109__i = 0, G__80109__a = new Array(arguments.length -  0);
while (G__80109__i < G__80109__a.length) {G__80109__a[G__80109__i] = arguments[G__80109__i + 0]; ++G__80109__i;}
  args = new cljs.core.IndexedSeq(G__80109__a,0);
} 
return G__80108__delegate.call(this,args);};
G__80108.cljs$lang$maxFixedArity = 0;
G__80108.cljs$lang$applyTo = (function (arglist__80110){
var args = cljs.core.seq(arglist__80110);
return G__80108__delegate(args);
});
G__80108.cljs$core$IFn$_invoke$arity$variadic = G__80108__delegate;
return G__80108;
})()
;

return null;
});
