goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37692__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37693__i = 0, G__37693__a = new Array(arguments.length -  0);
while (G__37693__i < G__37693__a.length) {G__37693__a[G__37693__i] = arguments[G__37693__i + 0]; ++G__37693__i;}
  args = new cljs.core.IndexedSeq(G__37693__a,0);
} 
return G__37692__delegate.call(this,args);};
G__37692.cljs$lang$maxFixedArity = 0;
G__37692.cljs$lang$applyTo = (function (arglist__37694){
var args = cljs.core.seq(arglist__37694);
return G__37692__delegate(args);
});
G__37692.cljs$core$IFn$_invoke$arity$variadic = G__37692__delegate;
return G__37692;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37695__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37696__i = 0, G__37696__a = new Array(arguments.length -  0);
while (G__37696__i < G__37696__a.length) {G__37696__a[G__37696__i] = arguments[G__37696__i + 0]; ++G__37696__i;}
  args = new cljs.core.IndexedSeq(G__37696__a,0);
} 
return G__37695__delegate.call(this,args);};
G__37695.cljs$lang$maxFixedArity = 0;
G__37695.cljs$lang$applyTo = (function (arglist__37697){
var args = cljs.core.seq(arglist__37697);
return G__37695__delegate(args);
});
G__37695.cljs$core$IFn$_invoke$arity$variadic = G__37695__delegate;
return G__37695;
})()
;

return null;
});
