goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10350__i = 0, G__10350__a = new Array(arguments.length -  0);
while (G__10350__i < G__10350__a.length) {G__10350__a[G__10350__i] = arguments[G__10350__i + 0]; ++G__10350__i;}
  args = new cljs.core.IndexedSeq(G__10350__a,0);
} 
return G__10349__delegate.call(this,args);};
G__10349.cljs$lang$maxFixedArity = 0;
G__10349.cljs$lang$applyTo = (function (arglist__10351){
var args = cljs.core.seq(arglist__10351);
return G__10349__delegate(args);
});
G__10349.cljs$core$IFn$_invoke$arity$variadic = G__10349__delegate;
return G__10349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10353__i = 0, G__10353__a = new Array(arguments.length -  0);
while (G__10353__i < G__10353__a.length) {G__10353__a[G__10353__i] = arguments[G__10353__i + 0]; ++G__10353__i;}
  args = new cljs.core.IndexedSeq(G__10353__a,0);
} 
return G__10352__delegate.call(this,args);};
G__10352.cljs$lang$maxFixedArity = 0;
G__10352.cljs$lang$applyTo = (function (arglist__10354){
var args = cljs.core.seq(arglist__10354);
return G__10352__delegate(args);
});
G__10352.cljs$core$IFn$_invoke$arity$variadic = G__10352__delegate;
return G__10352;
})()
;

return null;
});
