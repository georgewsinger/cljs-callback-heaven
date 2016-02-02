goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22882__i = 0, G__22882__a = new Array(arguments.length -  0);
while (G__22882__i < G__22882__a.length) {G__22882__a[G__22882__i] = arguments[G__22882__i + 0]; ++G__22882__i;}
  args = new cljs.core.IndexedSeq(G__22882__a,0);
} 
return G__22881__delegate.call(this,args);};
G__22881.cljs$lang$maxFixedArity = 0;
G__22881.cljs$lang$applyTo = (function (arglist__22883){
var args = cljs.core.seq(arglist__22883);
return G__22881__delegate(args);
});
G__22881.cljs$core$IFn$_invoke$arity$variadic = G__22881__delegate;
return G__22881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22885__i = 0, G__22885__a = new Array(arguments.length -  0);
while (G__22885__i < G__22885__a.length) {G__22885__a[G__22885__i] = arguments[G__22885__i + 0]; ++G__22885__i;}
  args = new cljs.core.IndexedSeq(G__22885__a,0);
} 
return G__22884__delegate.call(this,args);};
G__22884.cljs$lang$maxFixedArity = 0;
G__22884.cljs$lang$applyTo = (function (arglist__22886){
var args = cljs.core.seq(arglist__22886);
return G__22884__delegate(args);
});
G__22884.cljs$core$IFn$_invoke$arity$variadic = G__22884__delegate;
return G__22884;
})()
;

return null;
});
