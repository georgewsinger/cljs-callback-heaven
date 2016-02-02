goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39275__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39276__i = 0, G__39276__a = new Array(arguments.length -  0);
while (G__39276__i < G__39276__a.length) {G__39276__a[G__39276__i] = arguments[G__39276__i + 0]; ++G__39276__i;}
  args = new cljs.core.IndexedSeq(G__39276__a,0);
} 
return G__39275__delegate.call(this,args);};
G__39275.cljs$lang$maxFixedArity = 0;
G__39275.cljs$lang$applyTo = (function (arglist__39277){
var args = cljs.core.seq(arglist__39277);
return G__39275__delegate(args);
});
G__39275.cljs$core$IFn$_invoke$arity$variadic = G__39275__delegate;
return G__39275;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39278__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39279__i = 0, G__39279__a = new Array(arguments.length -  0);
while (G__39279__i < G__39279__a.length) {G__39279__a[G__39279__i] = arguments[G__39279__i + 0]; ++G__39279__i;}
  args = new cljs.core.IndexedSeq(G__39279__a,0);
} 
return G__39278__delegate.call(this,args);};
G__39278.cljs$lang$maxFixedArity = 0;
G__39278.cljs$lang$applyTo = (function (arglist__39280){
var args = cljs.core.seq(arglist__39280);
return G__39278__delegate(args);
});
G__39278.cljs$core$IFn$_invoke$arity$variadic = G__39278__delegate;
return G__39278;
})()
;

return null;
});
