goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332544__i = 0, G__332544__a = new Array(arguments.length -  0);
while (G__332544__i < G__332544__a.length) {G__332544__a[G__332544__i] = arguments[G__332544__i + 0]; ++G__332544__i;}
  args = new cljs.core.IndexedSeq(G__332544__a,0);
} 
return G__332543__delegate.call(this,args);};
G__332543.cljs$lang$maxFixedArity = 0;
G__332543.cljs$lang$applyTo = (function (arglist__332545){
var args = cljs.core.seq(arglist__332545);
return G__332543__delegate(args);
});
G__332543.cljs$core$IFn$_invoke$arity$variadic = G__332543__delegate;
return G__332543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332547__i = 0, G__332547__a = new Array(arguments.length -  0);
while (G__332547__i < G__332547__a.length) {G__332547__a[G__332547__i] = arguments[G__332547__i + 0]; ++G__332547__i;}
  args = new cljs.core.IndexedSeq(G__332547__a,0);
} 
return G__332546__delegate.call(this,args);};
G__332546.cljs$lang$maxFixedArity = 0;
G__332546.cljs$lang$applyTo = (function (arglist__332548){
var args = cljs.core.seq(arglist__332548);
return G__332546__delegate(args);
});
G__332546.cljs$core$IFn$_invoke$arity$variadic = G__332546__delegate;
return G__332546;
})()
;

return null;
});
