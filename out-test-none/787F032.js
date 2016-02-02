goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9736__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9737__i = 0, G__9737__a = new Array(arguments.length -  0);
while (G__9737__i < G__9737__a.length) {G__9737__a[G__9737__i] = arguments[G__9737__i + 0]; ++G__9737__i;}
  args = new cljs.core.IndexedSeq(G__9737__a,0);
} 
return G__9736__delegate.call(this,args);};
G__9736.cljs$lang$maxFixedArity = 0;
G__9736.cljs$lang$applyTo = (function (arglist__9738){
var args = cljs.core.seq(arglist__9738);
return G__9736__delegate(args);
});
G__9736.cljs$core$IFn$_invoke$arity$variadic = G__9736__delegate;
return G__9736;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9739__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9740__i = 0, G__9740__a = new Array(arguments.length -  0);
while (G__9740__i < G__9740__a.length) {G__9740__a[G__9740__i] = arguments[G__9740__i + 0]; ++G__9740__i;}
  args = new cljs.core.IndexedSeq(G__9740__a,0);
} 
return G__9739__delegate.call(this,args);};
G__9739.cljs$lang$maxFixedArity = 0;
G__9739.cljs$lang$applyTo = (function (arglist__9741){
var args = cljs.core.seq(arglist__9741);
return G__9739__delegate(args);
});
G__9739.cljs$core$IFn$_invoke$arity$variadic = G__9739__delegate;
return G__9739;
})()
;

return null;
});
