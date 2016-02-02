goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22447__i = 0, G__22447__a = new Array(arguments.length -  0);
while (G__22447__i < G__22447__a.length) {G__22447__a[G__22447__i] = arguments[G__22447__i + 0]; ++G__22447__i;}
  args = new cljs.core.IndexedSeq(G__22447__a,0);
} 
return G__22446__delegate.call(this,args);};
G__22446.cljs$lang$maxFixedArity = 0;
G__22446.cljs$lang$applyTo = (function (arglist__22448){
var args = cljs.core.seq(arglist__22448);
return G__22446__delegate(args);
});
G__22446.cljs$core$IFn$_invoke$arity$variadic = G__22446__delegate;
return G__22446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22450__i = 0, G__22450__a = new Array(arguments.length -  0);
while (G__22450__i < G__22450__a.length) {G__22450__a[G__22450__i] = arguments[G__22450__i + 0]; ++G__22450__i;}
  args = new cljs.core.IndexedSeq(G__22450__a,0);
} 
return G__22449__delegate.call(this,args);};
G__22449.cljs$lang$maxFixedArity = 0;
G__22449.cljs$lang$applyTo = (function (arglist__22451){
var args = cljs.core.seq(arglist__22451);
return G__22449__delegate(args);
});
G__22449.cljs$core$IFn$_invoke$arity$variadic = G__22449__delegate;
return G__22449;
})()
;

return null;
});
