goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10316__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10317__i = 0, G__10317__a = new Array(arguments.length -  0);
while (G__10317__i < G__10317__a.length) {G__10317__a[G__10317__i] = arguments[G__10317__i + 0]; ++G__10317__i;}
  args = new cljs.core.IndexedSeq(G__10317__a,0);
} 
return G__10316__delegate.call(this,args);};
G__10316.cljs$lang$maxFixedArity = 0;
G__10316.cljs$lang$applyTo = (function (arglist__10318){
var args = cljs.core.seq(arglist__10318);
return G__10316__delegate(args);
});
G__10316.cljs$core$IFn$_invoke$arity$variadic = G__10316__delegate;
return G__10316;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10319__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10320__i = 0, G__10320__a = new Array(arguments.length -  0);
while (G__10320__i < G__10320__a.length) {G__10320__a[G__10320__i] = arguments[G__10320__i + 0]; ++G__10320__i;}
  args = new cljs.core.IndexedSeq(G__10320__a,0);
} 
return G__10319__delegate.call(this,args);};
G__10319.cljs$lang$maxFixedArity = 0;
G__10319.cljs$lang$applyTo = (function (arglist__10321){
var args = cljs.core.seq(arglist__10321);
return G__10319__delegate(args);
});
G__10319.cljs$core$IFn$_invoke$arity$variadic = G__10319__delegate;
return G__10319;
})()
;

return null;
});
