goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8687__i = 0, G__8687__a = new Array(arguments.length -  0);
while (G__8687__i < G__8687__a.length) {G__8687__a[G__8687__i] = arguments[G__8687__i + 0]; ++G__8687__i;}
  args = new cljs.core.IndexedSeq(G__8687__a,0);
} 
return G__8686__delegate.call(this,args);};
G__8686.cljs$lang$maxFixedArity = 0;
G__8686.cljs$lang$applyTo = (function (arglist__8688){
var args = cljs.core.seq(arglist__8688);
return G__8686__delegate(args);
});
G__8686.cljs$core$IFn$_invoke$arity$variadic = G__8686__delegate;
return G__8686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8690__i = 0, G__8690__a = new Array(arguments.length -  0);
while (G__8690__i < G__8690__a.length) {G__8690__a[G__8690__i] = arguments[G__8690__i + 0]; ++G__8690__i;}
  args = new cljs.core.IndexedSeq(G__8690__a,0);
} 
return G__8689__delegate.call(this,args);};
G__8689.cljs$lang$maxFixedArity = 0;
G__8689.cljs$lang$applyTo = (function (arglist__8691){
var args = cljs.core.seq(arglist__8691);
return G__8689__delegate(args);
});
G__8689.cljs$core$IFn$_invoke$arity$variadic = G__8689__delegate;
return G__8689;
})()
;

return null;
});
