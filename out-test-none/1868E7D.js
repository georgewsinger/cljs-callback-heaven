goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15355__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15356__i = 0, G__15356__a = new Array(arguments.length -  0);
while (G__15356__i < G__15356__a.length) {G__15356__a[G__15356__i] = arguments[G__15356__i + 0]; ++G__15356__i;}
  args = new cljs.core.IndexedSeq(G__15356__a,0);
} 
return G__15355__delegate.call(this,args);};
G__15355.cljs$lang$maxFixedArity = 0;
G__15355.cljs$lang$applyTo = (function (arglist__15357){
var args = cljs.core.seq(arglist__15357);
return G__15355__delegate(args);
});
G__15355.cljs$core$IFn$_invoke$arity$variadic = G__15355__delegate;
return G__15355;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15358__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15359__i = 0, G__15359__a = new Array(arguments.length -  0);
while (G__15359__i < G__15359__a.length) {G__15359__a[G__15359__i] = arguments[G__15359__i + 0]; ++G__15359__i;}
  args = new cljs.core.IndexedSeq(G__15359__a,0);
} 
return G__15358__delegate.call(this,args);};
G__15358.cljs$lang$maxFixedArity = 0;
G__15358.cljs$lang$applyTo = (function (arglist__15360){
var args = cljs.core.seq(arglist__15360);
return G__15358__delegate(args);
});
G__15358.cljs$core$IFn$_invoke$arity$variadic = G__15358__delegate;
return G__15358;
})()
;

return null;
});
