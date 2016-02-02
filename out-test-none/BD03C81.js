goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14259__i = 0, G__14259__a = new Array(arguments.length -  0);
while (G__14259__i < G__14259__a.length) {G__14259__a[G__14259__i] = arguments[G__14259__i + 0]; ++G__14259__i;}
  args = new cljs.core.IndexedSeq(G__14259__a,0);
} 
return G__14258__delegate.call(this,args);};
G__14258.cljs$lang$maxFixedArity = 0;
G__14258.cljs$lang$applyTo = (function (arglist__14260){
var args = cljs.core.seq(arglist__14260);
return G__14258__delegate(args);
});
G__14258.cljs$core$IFn$_invoke$arity$variadic = G__14258__delegate;
return G__14258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14262__i = 0, G__14262__a = new Array(arguments.length -  0);
while (G__14262__i < G__14262__a.length) {G__14262__a[G__14262__i] = arguments[G__14262__i + 0]; ++G__14262__i;}
  args = new cljs.core.IndexedSeq(G__14262__a,0);
} 
return G__14261__delegate.call(this,args);};
G__14261.cljs$lang$maxFixedArity = 0;
G__14261.cljs$lang$applyTo = (function (arglist__14263){
var args = cljs.core.seq(arglist__14263);
return G__14261__delegate(args);
});
G__14261.cljs$core$IFn$_invoke$arity$variadic = G__14261__delegate;
return G__14261;
})()
;

return null;
});
