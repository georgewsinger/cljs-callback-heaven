goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23106__i = 0, G__23106__a = new Array(arguments.length -  0);
while (G__23106__i < G__23106__a.length) {G__23106__a[G__23106__i] = arguments[G__23106__i + 0]; ++G__23106__i;}
  args = new cljs.core.IndexedSeq(G__23106__a,0);
} 
return G__23105__delegate.call(this,args);};
G__23105.cljs$lang$maxFixedArity = 0;
G__23105.cljs$lang$applyTo = (function (arglist__23107){
var args = cljs.core.seq(arglist__23107);
return G__23105__delegate(args);
});
G__23105.cljs$core$IFn$_invoke$arity$variadic = G__23105__delegate;
return G__23105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23109__i = 0, G__23109__a = new Array(arguments.length -  0);
while (G__23109__i < G__23109__a.length) {G__23109__a[G__23109__i] = arguments[G__23109__i + 0]; ++G__23109__i;}
  args = new cljs.core.IndexedSeq(G__23109__a,0);
} 
return G__23108__delegate.call(this,args);};
G__23108.cljs$lang$maxFixedArity = 0;
G__23108.cljs$lang$applyTo = (function (arglist__23110){
var args = cljs.core.seq(arglist__23110);
return G__23108__delegate(args);
});
G__23108.cljs$core$IFn$_invoke$arity$variadic = G__23108__delegate;
return G__23108;
})()
;

return null;
});
