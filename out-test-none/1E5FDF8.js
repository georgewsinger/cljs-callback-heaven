goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73692__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73693__i = 0, G__73693__a = new Array(arguments.length -  0);
while (G__73693__i < G__73693__a.length) {G__73693__a[G__73693__i] = arguments[G__73693__i + 0]; ++G__73693__i;}
  args = new cljs.core.IndexedSeq(G__73693__a,0);
} 
return G__73692__delegate.call(this,args);};
G__73692.cljs$lang$maxFixedArity = 0;
G__73692.cljs$lang$applyTo = (function (arglist__73694){
var args = cljs.core.seq(arglist__73694);
return G__73692__delegate(args);
});
G__73692.cljs$core$IFn$_invoke$arity$variadic = G__73692__delegate;
return G__73692;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73695__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73696__i = 0, G__73696__a = new Array(arguments.length -  0);
while (G__73696__i < G__73696__a.length) {G__73696__a[G__73696__i] = arguments[G__73696__i + 0]; ++G__73696__i;}
  args = new cljs.core.IndexedSeq(G__73696__a,0);
} 
return G__73695__delegate.call(this,args);};
G__73695.cljs$lang$maxFixedArity = 0;
G__73695.cljs$lang$applyTo = (function (arglist__73697){
var args = cljs.core.seq(arglist__73697);
return G__73695__delegate(args);
});
G__73695.cljs$core$IFn$_invoke$arity$variadic = G__73695__delegate;
return G__73695;
})()
;

return null;
});
