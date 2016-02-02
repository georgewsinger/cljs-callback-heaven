goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10765__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10766__i = 0, G__10766__a = new Array(arguments.length -  0);
while (G__10766__i < G__10766__a.length) {G__10766__a[G__10766__i] = arguments[G__10766__i + 0]; ++G__10766__i;}
  args = new cljs.core.IndexedSeq(G__10766__a,0);
} 
return G__10765__delegate.call(this,args);};
G__10765.cljs$lang$maxFixedArity = 0;
G__10765.cljs$lang$applyTo = (function (arglist__10767){
var args = cljs.core.seq(arglist__10767);
return G__10765__delegate(args);
});
G__10765.cljs$core$IFn$_invoke$arity$variadic = G__10765__delegate;
return G__10765;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10768__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10769__i = 0, G__10769__a = new Array(arguments.length -  0);
while (G__10769__i < G__10769__a.length) {G__10769__a[G__10769__i] = arguments[G__10769__i + 0]; ++G__10769__i;}
  args = new cljs.core.IndexedSeq(G__10769__a,0);
} 
return G__10768__delegate.call(this,args);};
G__10768.cljs$lang$maxFixedArity = 0;
G__10768.cljs$lang$applyTo = (function (arglist__10770){
var args = cljs.core.seq(arglist__10770);
return G__10768__delegate(args);
});
G__10768.cljs$core$IFn$_invoke$arity$variadic = G__10768__delegate;
return G__10768;
})()
;

return null;
});
