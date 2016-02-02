goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__86540__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__86540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86541__i = 0, G__86541__a = new Array(arguments.length -  0);
while (G__86541__i < G__86541__a.length) {G__86541__a[G__86541__i] = arguments[G__86541__i + 0]; ++G__86541__i;}
  args = new cljs.core.IndexedSeq(G__86541__a,0);
} 
return G__86540__delegate.call(this,args);};
G__86540.cljs$lang$maxFixedArity = 0;
G__86540.cljs$lang$applyTo = (function (arglist__86542){
var args = cljs.core.seq(arglist__86542);
return G__86540__delegate(args);
});
G__86540.cljs$core$IFn$_invoke$arity$variadic = G__86540__delegate;
return G__86540;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__86543__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__86543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86544__i = 0, G__86544__a = new Array(arguments.length -  0);
while (G__86544__i < G__86544__a.length) {G__86544__a[G__86544__i] = arguments[G__86544__i + 0]; ++G__86544__i;}
  args = new cljs.core.IndexedSeq(G__86544__a,0);
} 
return G__86543__delegate.call(this,args);};
G__86543.cljs$lang$maxFixedArity = 0;
G__86543.cljs$lang$applyTo = (function (arglist__86545){
var args = cljs.core.seq(arglist__86545);
return G__86543__delegate(args);
});
G__86543.cljs$core$IFn$_invoke$arity$variadic = G__86543__delegate;
return G__86543;
})()
;

return null;
});
