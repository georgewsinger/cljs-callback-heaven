goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59772__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59773__i = 0, G__59773__a = new Array(arguments.length -  0);
while (G__59773__i < G__59773__a.length) {G__59773__a[G__59773__i] = arguments[G__59773__i + 0]; ++G__59773__i;}
  args = new cljs.core.IndexedSeq(G__59773__a,0);
} 
return G__59772__delegate.call(this,args);};
G__59772.cljs$lang$maxFixedArity = 0;
G__59772.cljs$lang$applyTo = (function (arglist__59774){
var args = cljs.core.seq(arglist__59774);
return G__59772__delegate(args);
});
G__59772.cljs$core$IFn$_invoke$arity$variadic = G__59772__delegate;
return G__59772;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59775__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59776__i = 0, G__59776__a = new Array(arguments.length -  0);
while (G__59776__i < G__59776__a.length) {G__59776__a[G__59776__i] = arguments[G__59776__i + 0]; ++G__59776__i;}
  args = new cljs.core.IndexedSeq(G__59776__a,0);
} 
return G__59775__delegate.call(this,args);};
G__59775.cljs$lang$maxFixedArity = 0;
G__59775.cljs$lang$applyTo = (function (arglist__59777){
var args = cljs.core.seq(arglist__59777);
return G__59775__delegate(args);
});
G__59775.cljs$core$IFn$_invoke$arity$variadic = G__59775__delegate;
return G__59775;
})()
;

return null;
});
