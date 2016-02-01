goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16356__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16357__i = 0, G__16357__a = new Array(arguments.length -  0);
while (G__16357__i < G__16357__a.length) {G__16357__a[G__16357__i] = arguments[G__16357__i + 0]; ++G__16357__i;}
  args = new cljs.core.IndexedSeq(G__16357__a,0);
} 
return G__16356__delegate.call(this,args);};
G__16356.cljs$lang$maxFixedArity = 0;
G__16356.cljs$lang$applyTo = (function (arglist__16358){
var args = cljs.core.seq(arglist__16358);
return G__16356__delegate(args);
});
G__16356.cljs$core$IFn$_invoke$arity$variadic = G__16356__delegate;
return G__16356;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16359__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16360__i = 0, G__16360__a = new Array(arguments.length -  0);
while (G__16360__i < G__16360__a.length) {G__16360__a[G__16360__i] = arguments[G__16360__i + 0]; ++G__16360__i;}
  args = new cljs.core.IndexedSeq(G__16360__a,0);
} 
return G__16359__delegate.call(this,args);};
G__16359.cljs$lang$maxFixedArity = 0;
G__16359.cljs$lang$applyTo = (function (arglist__16361){
var args = cljs.core.seq(arglist__16361);
return G__16359__delegate(args);
});
G__16359.cljs$core$IFn$_invoke$arity$variadic = G__16359__delegate;
return G__16359;
})()
;

return null;
});
