goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24504__i = 0, G__24504__a = new Array(arguments.length -  0);
while (G__24504__i < G__24504__a.length) {G__24504__a[G__24504__i] = arguments[G__24504__i + 0]; ++G__24504__i;}
  args = new cljs.core.IndexedSeq(G__24504__a,0);
} 
return G__24503__delegate.call(this,args);};
G__24503.cljs$lang$maxFixedArity = 0;
G__24503.cljs$lang$applyTo = (function (arglist__24505){
var args = cljs.core.seq(arglist__24505);
return G__24503__delegate(args);
});
G__24503.cljs$core$IFn$_invoke$arity$variadic = G__24503__delegate;
return G__24503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24507__i = 0, G__24507__a = new Array(arguments.length -  0);
while (G__24507__i < G__24507__a.length) {G__24507__a[G__24507__i] = arguments[G__24507__i + 0]; ++G__24507__i;}
  args = new cljs.core.IndexedSeq(G__24507__a,0);
} 
return G__24506__delegate.call(this,args);};
G__24506.cljs$lang$maxFixedArity = 0;
G__24506.cljs$lang$applyTo = (function (arglist__24508){
var args = cljs.core.seq(arglist__24508);
return G__24506__delegate(args);
});
G__24506.cljs$core$IFn$_invoke$arity$variadic = G__24506__delegate;
return G__24506;
})()
;

return null;
});
