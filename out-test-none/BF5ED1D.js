goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26731__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26732__i = 0, G__26732__a = new Array(arguments.length -  0);
while (G__26732__i < G__26732__a.length) {G__26732__a[G__26732__i] = arguments[G__26732__i + 0]; ++G__26732__i;}
  args = new cljs.core.IndexedSeq(G__26732__a,0);
} 
return G__26731__delegate.call(this,args);};
G__26731.cljs$lang$maxFixedArity = 0;
G__26731.cljs$lang$applyTo = (function (arglist__26733){
var args = cljs.core.seq(arglist__26733);
return G__26731__delegate(args);
});
G__26731.cljs$core$IFn$_invoke$arity$variadic = G__26731__delegate;
return G__26731;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26734__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26735__i = 0, G__26735__a = new Array(arguments.length -  0);
while (G__26735__i < G__26735__a.length) {G__26735__a[G__26735__i] = arguments[G__26735__i + 0]; ++G__26735__i;}
  args = new cljs.core.IndexedSeq(G__26735__a,0);
} 
return G__26734__delegate.call(this,args);};
G__26734.cljs$lang$maxFixedArity = 0;
G__26734.cljs$lang$applyTo = (function (arglist__26736){
var args = cljs.core.seq(arglist__26736);
return G__26734__delegate(args);
});
G__26734.cljs$core$IFn$_invoke$arity$variadic = G__26734__delegate;
return G__26734;
})()
;

return null;
});
