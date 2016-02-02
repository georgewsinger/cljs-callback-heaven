goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31931__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31932__i = 0, G__31932__a = new Array(arguments.length -  0);
while (G__31932__i < G__31932__a.length) {G__31932__a[G__31932__i] = arguments[G__31932__i + 0]; ++G__31932__i;}
  args = new cljs.core.IndexedSeq(G__31932__a,0);
} 
return G__31931__delegate.call(this,args);};
G__31931.cljs$lang$maxFixedArity = 0;
G__31931.cljs$lang$applyTo = (function (arglist__31933){
var args = cljs.core.seq(arglist__31933);
return G__31931__delegate(args);
});
G__31931.cljs$core$IFn$_invoke$arity$variadic = G__31931__delegate;
return G__31931;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31934__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31935__i = 0, G__31935__a = new Array(arguments.length -  0);
while (G__31935__i < G__31935__a.length) {G__31935__a[G__31935__i] = arguments[G__31935__i + 0]; ++G__31935__i;}
  args = new cljs.core.IndexedSeq(G__31935__a,0);
} 
return G__31934__delegate.call(this,args);};
G__31934.cljs$lang$maxFixedArity = 0;
G__31934.cljs$lang$applyTo = (function (arglist__31936){
var args = cljs.core.seq(arglist__31936);
return G__31934__delegate(args);
});
G__31934.cljs$core$IFn$_invoke$arity$variadic = G__31934__delegate;
return G__31934;
})()
;

return null;
});
