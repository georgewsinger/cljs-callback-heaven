goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17373__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17374__i = 0, G__17374__a = new Array(arguments.length -  0);
while (G__17374__i < G__17374__a.length) {G__17374__a[G__17374__i] = arguments[G__17374__i + 0]; ++G__17374__i;}
  args = new cljs.core.IndexedSeq(G__17374__a,0);
} 
return G__17373__delegate.call(this,args);};
G__17373.cljs$lang$maxFixedArity = 0;
G__17373.cljs$lang$applyTo = (function (arglist__17375){
var args = cljs.core.seq(arglist__17375);
return G__17373__delegate(args);
});
G__17373.cljs$core$IFn$_invoke$arity$variadic = G__17373__delegate;
return G__17373;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17376__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17377__i = 0, G__17377__a = new Array(arguments.length -  0);
while (G__17377__i < G__17377__a.length) {G__17377__a[G__17377__i] = arguments[G__17377__i + 0]; ++G__17377__i;}
  args = new cljs.core.IndexedSeq(G__17377__a,0);
} 
return G__17376__delegate.call(this,args);};
G__17376.cljs$lang$maxFixedArity = 0;
G__17376.cljs$lang$applyTo = (function (arglist__17378){
var args = cljs.core.seq(arglist__17378);
return G__17376__delegate(args);
});
G__17376.cljs$core$IFn$_invoke$arity$variadic = G__17376__delegate;
return G__17376;
})()
;

return null;
});
