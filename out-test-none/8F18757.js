goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37580__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37581__i = 0, G__37581__a = new Array(arguments.length -  0);
while (G__37581__i < G__37581__a.length) {G__37581__a[G__37581__i] = arguments[G__37581__i + 0]; ++G__37581__i;}
  args = new cljs.core.IndexedSeq(G__37581__a,0);
} 
return G__37580__delegate.call(this,args);};
G__37580.cljs$lang$maxFixedArity = 0;
G__37580.cljs$lang$applyTo = (function (arglist__37582){
var args = cljs.core.seq(arglist__37582);
return G__37580__delegate(args);
});
G__37580.cljs$core$IFn$_invoke$arity$variadic = G__37580__delegate;
return G__37580;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37583__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37584__i = 0, G__37584__a = new Array(arguments.length -  0);
while (G__37584__i < G__37584__a.length) {G__37584__a[G__37584__i] = arguments[G__37584__i + 0]; ++G__37584__i;}
  args = new cljs.core.IndexedSeq(G__37584__a,0);
} 
return G__37583__delegate.call(this,args);};
G__37583.cljs$lang$maxFixedArity = 0;
G__37583.cljs$lang$applyTo = (function (arglist__37585){
var args = cljs.core.seq(arglist__37585);
return G__37583__delegate(args);
});
G__37583.cljs$core$IFn$_invoke$arity$variadic = G__37583__delegate;
return G__37583;
})()
;

return null;
});
