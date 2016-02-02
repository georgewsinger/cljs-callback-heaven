goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__182037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__182037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__182038__i = 0, G__182038__a = new Array(arguments.length -  0);
while (G__182038__i < G__182038__a.length) {G__182038__a[G__182038__i] = arguments[G__182038__i + 0]; ++G__182038__i;}
  args = new cljs.core.IndexedSeq(G__182038__a,0);
} 
return G__182037__delegate.call(this,args);};
G__182037.cljs$lang$maxFixedArity = 0;
G__182037.cljs$lang$applyTo = (function (arglist__182039){
var args = cljs.core.seq(arglist__182039);
return G__182037__delegate(args);
});
G__182037.cljs$core$IFn$_invoke$arity$variadic = G__182037__delegate;
return G__182037;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__182040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__182040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__182041__i = 0, G__182041__a = new Array(arguments.length -  0);
while (G__182041__i < G__182041__a.length) {G__182041__a[G__182041__i] = arguments[G__182041__i + 0]; ++G__182041__i;}
  args = new cljs.core.IndexedSeq(G__182041__a,0);
} 
return G__182040__delegate.call(this,args);};
G__182040.cljs$lang$maxFixedArity = 0;
G__182040.cljs$lang$applyTo = (function (arglist__182042){
var args = cljs.core.seq(arglist__182042);
return G__182040__delegate(args);
});
G__182040.cljs$core$IFn$_invoke$arity$variadic = G__182040__delegate;
return G__182040;
})()
;

return null;
});
