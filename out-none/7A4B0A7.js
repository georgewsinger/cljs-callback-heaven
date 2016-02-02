goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50386__i = 0, G__50386__a = new Array(arguments.length -  0);
while (G__50386__i < G__50386__a.length) {G__50386__a[G__50386__i] = arguments[G__50386__i + 0]; ++G__50386__i;}
  args = new cljs.core.IndexedSeq(G__50386__a,0);
} 
return G__50385__delegate.call(this,args);};
G__50385.cljs$lang$maxFixedArity = 0;
G__50385.cljs$lang$applyTo = (function (arglist__50387){
var args = cljs.core.seq(arglist__50387);
return G__50385__delegate(args);
});
G__50385.cljs$core$IFn$_invoke$arity$variadic = G__50385__delegate;
return G__50385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50389__i = 0, G__50389__a = new Array(arguments.length -  0);
while (G__50389__i < G__50389__a.length) {G__50389__a[G__50389__i] = arguments[G__50389__i + 0]; ++G__50389__i;}
  args = new cljs.core.IndexedSeq(G__50389__a,0);
} 
return G__50388__delegate.call(this,args);};
G__50388.cljs$lang$maxFixedArity = 0;
G__50388.cljs$lang$applyTo = (function (arglist__50390){
var args = cljs.core.seq(arglist__50390);
return G__50388__delegate(args);
});
G__50388.cljs$core$IFn$_invoke$arity$variadic = G__50388__delegate;
return G__50388;
})()
;

return null;
});
