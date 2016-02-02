goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32407__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32408__i = 0, G__32408__a = new Array(arguments.length -  0);
while (G__32408__i < G__32408__a.length) {G__32408__a[G__32408__i] = arguments[G__32408__i + 0]; ++G__32408__i;}
  args = new cljs.core.IndexedSeq(G__32408__a,0);
} 
return G__32407__delegate.call(this,args);};
G__32407.cljs$lang$maxFixedArity = 0;
G__32407.cljs$lang$applyTo = (function (arglist__32409){
var args = cljs.core.seq(arglist__32409);
return G__32407__delegate(args);
});
G__32407.cljs$core$IFn$_invoke$arity$variadic = G__32407__delegate;
return G__32407;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32410__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32411__i = 0, G__32411__a = new Array(arguments.length -  0);
while (G__32411__i < G__32411__a.length) {G__32411__a[G__32411__i] = arguments[G__32411__i + 0]; ++G__32411__i;}
  args = new cljs.core.IndexedSeq(G__32411__a,0);
} 
return G__32410__delegate.call(this,args);};
G__32410.cljs$lang$maxFixedArity = 0;
G__32410.cljs$lang$applyTo = (function (arglist__32412){
var args = cljs.core.seq(arglist__32412);
return G__32410__delegate(args);
});
G__32410.cljs$core$IFn$_invoke$arity$variadic = G__32410__delegate;
return G__32410;
})()
;

return null;
});
