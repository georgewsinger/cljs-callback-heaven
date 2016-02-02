goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__126355__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__126355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__126356__i = 0, G__126356__a = new Array(arguments.length -  0);
while (G__126356__i < G__126356__a.length) {G__126356__a[G__126356__i] = arguments[G__126356__i + 0]; ++G__126356__i;}
  args = new cljs.core.IndexedSeq(G__126356__a,0);
} 
return G__126355__delegate.call(this,args);};
G__126355.cljs$lang$maxFixedArity = 0;
G__126355.cljs$lang$applyTo = (function (arglist__126357){
var args = cljs.core.seq(arglist__126357);
return G__126355__delegate(args);
});
G__126355.cljs$core$IFn$_invoke$arity$variadic = G__126355__delegate;
return G__126355;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__126358__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__126358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__126359__i = 0, G__126359__a = new Array(arguments.length -  0);
while (G__126359__i < G__126359__a.length) {G__126359__a[G__126359__i] = arguments[G__126359__i + 0]; ++G__126359__i;}
  args = new cljs.core.IndexedSeq(G__126359__a,0);
} 
return G__126358__delegate.call(this,args);};
G__126358.cljs$lang$maxFixedArity = 0;
G__126358.cljs$lang$applyTo = (function (arglist__126360){
var args = cljs.core.seq(arglist__126360);
return G__126358__delegate(args);
});
G__126358.cljs$core$IFn$_invoke$arity$variadic = G__126358__delegate;
return G__126358;
})()
;

return null;
});
