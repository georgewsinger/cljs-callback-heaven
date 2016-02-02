goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35768__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35769__i = 0, G__35769__a = new Array(arguments.length -  0);
while (G__35769__i < G__35769__a.length) {G__35769__a[G__35769__i] = arguments[G__35769__i + 0]; ++G__35769__i;}
  args = new cljs.core.IndexedSeq(G__35769__a,0);
} 
return G__35768__delegate.call(this,args);};
G__35768.cljs$lang$maxFixedArity = 0;
G__35768.cljs$lang$applyTo = (function (arglist__35770){
var args = cljs.core.seq(arglist__35770);
return G__35768__delegate(args);
});
G__35768.cljs$core$IFn$_invoke$arity$variadic = G__35768__delegate;
return G__35768;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35771__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35772__i = 0, G__35772__a = new Array(arguments.length -  0);
while (G__35772__i < G__35772__a.length) {G__35772__a[G__35772__i] = arguments[G__35772__i + 0]; ++G__35772__i;}
  args = new cljs.core.IndexedSeq(G__35772__a,0);
} 
return G__35771__delegate.call(this,args);};
G__35771.cljs$lang$maxFixedArity = 0;
G__35771.cljs$lang$applyTo = (function (arglist__35773){
var args = cljs.core.seq(arglist__35773);
return G__35771__delegate(args);
});
G__35771.cljs$core$IFn$_invoke$arity$variadic = G__35771__delegate;
return G__35771;
})()
;

return null;
});
