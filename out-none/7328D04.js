goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48732__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48733__i = 0, G__48733__a = new Array(arguments.length -  0);
while (G__48733__i < G__48733__a.length) {G__48733__a[G__48733__i] = arguments[G__48733__i + 0]; ++G__48733__i;}
  args = new cljs.core.IndexedSeq(G__48733__a,0);
} 
return G__48732__delegate.call(this,args);};
G__48732.cljs$lang$maxFixedArity = 0;
G__48732.cljs$lang$applyTo = (function (arglist__48734){
var args = cljs.core.seq(arglist__48734);
return G__48732__delegate(args);
});
G__48732.cljs$core$IFn$_invoke$arity$variadic = G__48732__delegate;
return G__48732;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48735__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48736__i = 0, G__48736__a = new Array(arguments.length -  0);
while (G__48736__i < G__48736__a.length) {G__48736__a[G__48736__i] = arguments[G__48736__i + 0]; ++G__48736__i;}
  args = new cljs.core.IndexedSeq(G__48736__a,0);
} 
return G__48735__delegate.call(this,args);};
G__48735.cljs$lang$maxFixedArity = 0;
G__48735.cljs$lang$applyTo = (function (arglist__48737){
var args = cljs.core.seq(arglist__48737);
return G__48735__delegate(args);
});
G__48735.cljs$core$IFn$_invoke$arity$variadic = G__48735__delegate;
return G__48735;
})()
;

return null;
});
