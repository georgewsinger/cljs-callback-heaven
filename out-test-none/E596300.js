goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27822__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27823__i = 0, G__27823__a = new Array(arguments.length -  0);
while (G__27823__i < G__27823__a.length) {G__27823__a[G__27823__i] = arguments[G__27823__i + 0]; ++G__27823__i;}
  args = new cljs.core.IndexedSeq(G__27823__a,0);
} 
return G__27822__delegate.call(this,args);};
G__27822.cljs$lang$maxFixedArity = 0;
G__27822.cljs$lang$applyTo = (function (arglist__27824){
var args = cljs.core.seq(arglist__27824);
return G__27822__delegate(args);
});
G__27822.cljs$core$IFn$_invoke$arity$variadic = G__27822__delegate;
return G__27822;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27825__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27826__i = 0, G__27826__a = new Array(arguments.length -  0);
while (G__27826__i < G__27826__a.length) {G__27826__a[G__27826__i] = arguments[G__27826__i + 0]; ++G__27826__i;}
  args = new cljs.core.IndexedSeq(G__27826__a,0);
} 
return G__27825__delegate.call(this,args);};
G__27825.cljs$lang$maxFixedArity = 0;
G__27825.cljs$lang$applyTo = (function (arglist__27827){
var args = cljs.core.seq(arglist__27827);
return G__27825__delegate(args);
});
G__27825.cljs$core$IFn$_invoke$arity$variadic = G__27825__delegate;
return G__27825;
})()
;

return null;
});
