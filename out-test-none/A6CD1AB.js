goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27284__i = 0, G__27284__a = new Array(arguments.length -  0);
while (G__27284__i < G__27284__a.length) {G__27284__a[G__27284__i] = arguments[G__27284__i + 0]; ++G__27284__i;}
  args = new cljs.core.IndexedSeq(G__27284__a,0);
} 
return G__27283__delegate.call(this,args);};
G__27283.cljs$lang$maxFixedArity = 0;
G__27283.cljs$lang$applyTo = (function (arglist__27285){
var args = cljs.core.seq(arglist__27285);
return G__27283__delegate(args);
});
G__27283.cljs$core$IFn$_invoke$arity$variadic = G__27283__delegate;
return G__27283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27287__i = 0, G__27287__a = new Array(arguments.length -  0);
while (G__27287__i < G__27287__a.length) {G__27287__a[G__27287__i] = arguments[G__27287__i + 0]; ++G__27287__i;}
  args = new cljs.core.IndexedSeq(G__27287__a,0);
} 
return G__27286__delegate.call(this,args);};
G__27286.cljs$lang$maxFixedArity = 0;
G__27286.cljs$lang$applyTo = (function (arglist__27288){
var args = cljs.core.seq(arglist__27288);
return G__27286__delegate(args);
});
G__27286.cljs$core$IFn$_invoke$arity$variadic = G__27286__delegate;
return G__27286;
})()
;

return null;
});
