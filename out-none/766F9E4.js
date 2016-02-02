goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38816__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38817__i = 0, G__38817__a = new Array(arguments.length -  0);
while (G__38817__i < G__38817__a.length) {G__38817__a[G__38817__i] = arguments[G__38817__i + 0]; ++G__38817__i;}
  args = new cljs.core.IndexedSeq(G__38817__a,0);
} 
return G__38816__delegate.call(this,args);};
G__38816.cljs$lang$maxFixedArity = 0;
G__38816.cljs$lang$applyTo = (function (arglist__38818){
var args = cljs.core.seq(arglist__38818);
return G__38816__delegate(args);
});
G__38816.cljs$core$IFn$_invoke$arity$variadic = G__38816__delegate;
return G__38816;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38819__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38820__i = 0, G__38820__a = new Array(arguments.length -  0);
while (G__38820__i < G__38820__a.length) {G__38820__a[G__38820__i] = arguments[G__38820__i + 0]; ++G__38820__i;}
  args = new cljs.core.IndexedSeq(G__38820__a,0);
} 
return G__38819__delegate.call(this,args);};
G__38819.cljs$lang$maxFixedArity = 0;
G__38819.cljs$lang$applyTo = (function (arglist__38821){
var args = cljs.core.seq(arglist__38821);
return G__38819__delegate(args);
});
G__38819.cljs$core$IFn$_invoke$arity$variadic = G__38819__delegate;
return G__38819;
})()
;

return null;
});
