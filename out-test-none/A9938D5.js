goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38715__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38716__i = 0, G__38716__a = new Array(arguments.length -  0);
while (G__38716__i < G__38716__a.length) {G__38716__a[G__38716__i] = arguments[G__38716__i + 0]; ++G__38716__i;}
  args = new cljs.core.IndexedSeq(G__38716__a,0);
} 
return G__38715__delegate.call(this,args);};
G__38715.cljs$lang$maxFixedArity = 0;
G__38715.cljs$lang$applyTo = (function (arglist__38717){
var args = cljs.core.seq(arglist__38717);
return G__38715__delegate(args);
});
G__38715.cljs$core$IFn$_invoke$arity$variadic = G__38715__delegate;
return G__38715;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38718__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38719__i = 0, G__38719__a = new Array(arguments.length -  0);
while (G__38719__i < G__38719__a.length) {G__38719__a[G__38719__i] = arguments[G__38719__i + 0]; ++G__38719__i;}
  args = new cljs.core.IndexedSeq(G__38719__a,0);
} 
return G__38718__delegate.call(this,args);};
G__38718.cljs$lang$maxFixedArity = 0;
G__38718.cljs$lang$applyTo = (function (arglist__38720){
var args = cljs.core.seq(arglist__38720);
return G__38718__delegate(args);
});
G__38718.cljs$core$IFn$_invoke$arity$variadic = G__38718__delegate;
return G__38718;
})()
;

return null;
});
