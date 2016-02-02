goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12661__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12662__i = 0, G__12662__a = new Array(arguments.length -  0);
while (G__12662__i < G__12662__a.length) {G__12662__a[G__12662__i] = arguments[G__12662__i + 0]; ++G__12662__i;}
  args = new cljs.core.IndexedSeq(G__12662__a,0);
} 
return G__12661__delegate.call(this,args);};
G__12661.cljs$lang$maxFixedArity = 0;
G__12661.cljs$lang$applyTo = (function (arglist__12663){
var args = cljs.core.seq(arglist__12663);
return G__12661__delegate(args);
});
G__12661.cljs$core$IFn$_invoke$arity$variadic = G__12661__delegate;
return G__12661;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12664__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12665__i = 0, G__12665__a = new Array(arguments.length -  0);
while (G__12665__i < G__12665__a.length) {G__12665__a[G__12665__i] = arguments[G__12665__i + 0]; ++G__12665__i;}
  args = new cljs.core.IndexedSeq(G__12665__a,0);
} 
return G__12664__delegate.call(this,args);};
G__12664.cljs$lang$maxFixedArity = 0;
G__12664.cljs$lang$applyTo = (function (arglist__12666){
var args = cljs.core.seq(arglist__12666);
return G__12664__delegate(args);
});
G__12664.cljs$core$IFn$_invoke$arity$variadic = G__12664__delegate;
return G__12664;
})()
;

return null;
});
