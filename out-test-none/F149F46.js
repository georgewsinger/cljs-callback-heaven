goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10009__i = 0, G__10009__a = new Array(arguments.length -  0);
while (G__10009__i < G__10009__a.length) {G__10009__a[G__10009__i] = arguments[G__10009__i + 0]; ++G__10009__i;}
  args = new cljs.core.IndexedSeq(G__10009__a,0);
} 
return G__10008__delegate.call(this,args);};
G__10008.cljs$lang$maxFixedArity = 0;
G__10008.cljs$lang$applyTo = (function (arglist__10010){
var args = cljs.core.seq(arglist__10010);
return G__10008__delegate(args);
});
G__10008.cljs$core$IFn$_invoke$arity$variadic = G__10008__delegate;
return G__10008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10012__i = 0, G__10012__a = new Array(arguments.length -  0);
while (G__10012__i < G__10012__a.length) {G__10012__a[G__10012__i] = arguments[G__10012__i + 0]; ++G__10012__i;}
  args = new cljs.core.IndexedSeq(G__10012__a,0);
} 
return G__10011__delegate.call(this,args);};
G__10011.cljs$lang$maxFixedArity = 0;
G__10011.cljs$lang$applyTo = (function (arglist__10013){
var args = cljs.core.seq(arglist__10013);
return G__10011__delegate(args);
});
G__10011.cljs$core$IFn$_invoke$arity$variadic = G__10011__delegate;
return G__10011;
})()
;

return null;
});
