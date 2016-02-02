goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13343__i = 0, G__13343__a = new Array(arguments.length -  0);
while (G__13343__i < G__13343__a.length) {G__13343__a[G__13343__i] = arguments[G__13343__i + 0]; ++G__13343__i;}
  args = new cljs.core.IndexedSeq(G__13343__a,0);
} 
return G__13342__delegate.call(this,args);};
G__13342.cljs$lang$maxFixedArity = 0;
G__13342.cljs$lang$applyTo = (function (arglist__13344){
var args = cljs.core.seq(arglist__13344);
return G__13342__delegate(args);
});
G__13342.cljs$core$IFn$_invoke$arity$variadic = G__13342__delegate;
return G__13342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13346__i = 0, G__13346__a = new Array(arguments.length -  0);
while (G__13346__i < G__13346__a.length) {G__13346__a[G__13346__i] = arguments[G__13346__i + 0]; ++G__13346__i;}
  args = new cljs.core.IndexedSeq(G__13346__a,0);
} 
return G__13345__delegate.call(this,args);};
G__13345.cljs$lang$maxFixedArity = 0;
G__13345.cljs$lang$applyTo = (function (arglist__13347){
var args = cljs.core.seq(arglist__13347);
return G__13345__delegate(args);
});
G__13345.cljs$core$IFn$_invoke$arity$variadic = G__13345__delegate;
return G__13345;
})()
;

return null;
});
