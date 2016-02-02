goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20165__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20166__i = 0, G__20166__a = new Array(arguments.length -  0);
while (G__20166__i < G__20166__a.length) {G__20166__a[G__20166__i] = arguments[G__20166__i + 0]; ++G__20166__i;}
  args = new cljs.core.IndexedSeq(G__20166__a,0);
} 
return G__20165__delegate.call(this,args);};
G__20165.cljs$lang$maxFixedArity = 0;
G__20165.cljs$lang$applyTo = (function (arglist__20167){
var args = cljs.core.seq(arglist__20167);
return G__20165__delegate(args);
});
G__20165.cljs$core$IFn$_invoke$arity$variadic = G__20165__delegate;
return G__20165;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20168__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20169__i = 0, G__20169__a = new Array(arguments.length -  0);
while (G__20169__i < G__20169__a.length) {G__20169__a[G__20169__i] = arguments[G__20169__i + 0]; ++G__20169__i;}
  args = new cljs.core.IndexedSeq(G__20169__a,0);
} 
return G__20168__delegate.call(this,args);};
G__20168.cljs$lang$maxFixedArity = 0;
G__20168.cljs$lang$applyTo = (function (arglist__20170){
var args = cljs.core.seq(arglist__20170);
return G__20168__delegate(args);
});
G__20168.cljs$core$IFn$_invoke$arity$variadic = G__20168__delegate;
return G__20168;
})()
;

return null;
});
