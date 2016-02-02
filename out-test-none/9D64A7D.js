goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31969__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31970__i = 0, G__31970__a = new Array(arguments.length -  0);
while (G__31970__i < G__31970__a.length) {G__31970__a[G__31970__i] = arguments[G__31970__i + 0]; ++G__31970__i;}
  args = new cljs.core.IndexedSeq(G__31970__a,0);
} 
return G__31969__delegate.call(this,args);};
G__31969.cljs$lang$maxFixedArity = 0;
G__31969.cljs$lang$applyTo = (function (arglist__31971){
var args = cljs.core.seq(arglist__31971);
return G__31969__delegate(args);
});
G__31969.cljs$core$IFn$_invoke$arity$variadic = G__31969__delegate;
return G__31969;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31972__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31973__i = 0, G__31973__a = new Array(arguments.length -  0);
while (G__31973__i < G__31973__a.length) {G__31973__a[G__31973__i] = arguments[G__31973__i + 0]; ++G__31973__i;}
  args = new cljs.core.IndexedSeq(G__31973__a,0);
} 
return G__31972__delegate.call(this,args);};
G__31972.cljs$lang$maxFixedArity = 0;
G__31972.cljs$lang$applyTo = (function (arglist__31974){
var args = cljs.core.seq(arglist__31974);
return G__31972__delegate(args);
});
G__31972.cljs$core$IFn$_invoke$arity$variadic = G__31972__delegate;
return G__31972;
})()
;

return null;
});
