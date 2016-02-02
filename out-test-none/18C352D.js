goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38179__i = 0, G__38179__a = new Array(arguments.length -  0);
while (G__38179__i < G__38179__a.length) {G__38179__a[G__38179__i] = arguments[G__38179__i + 0]; ++G__38179__i;}
  args = new cljs.core.IndexedSeq(G__38179__a,0);
} 
return G__38178__delegate.call(this,args);};
G__38178.cljs$lang$maxFixedArity = 0;
G__38178.cljs$lang$applyTo = (function (arglist__38180){
var args = cljs.core.seq(arglist__38180);
return G__38178__delegate(args);
});
G__38178.cljs$core$IFn$_invoke$arity$variadic = G__38178__delegate;
return G__38178;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38182__i = 0, G__38182__a = new Array(arguments.length -  0);
while (G__38182__i < G__38182__a.length) {G__38182__a[G__38182__i] = arguments[G__38182__i + 0]; ++G__38182__i;}
  args = new cljs.core.IndexedSeq(G__38182__a,0);
} 
return G__38181__delegate.call(this,args);};
G__38181.cljs$lang$maxFixedArity = 0;
G__38181.cljs$lang$applyTo = (function (arglist__38183){
var args = cljs.core.seq(arglist__38183);
return G__38181__delegate(args);
});
G__38181.cljs$core$IFn$_invoke$arity$variadic = G__38181__delegate;
return G__38181;
})()
;

return null;
});