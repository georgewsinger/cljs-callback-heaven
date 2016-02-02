goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24749__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24750__i = 0, G__24750__a = new Array(arguments.length -  0);
while (G__24750__i < G__24750__a.length) {G__24750__a[G__24750__i] = arguments[G__24750__i + 0]; ++G__24750__i;}
  args = new cljs.core.IndexedSeq(G__24750__a,0);
} 
return G__24749__delegate.call(this,args);};
G__24749.cljs$lang$maxFixedArity = 0;
G__24749.cljs$lang$applyTo = (function (arglist__24751){
var args = cljs.core.seq(arglist__24751);
return G__24749__delegate(args);
});
G__24749.cljs$core$IFn$_invoke$arity$variadic = G__24749__delegate;
return G__24749;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24752__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24753__i = 0, G__24753__a = new Array(arguments.length -  0);
while (G__24753__i < G__24753__a.length) {G__24753__a[G__24753__i] = arguments[G__24753__i + 0]; ++G__24753__i;}
  args = new cljs.core.IndexedSeq(G__24753__a,0);
} 
return G__24752__delegate.call(this,args);};
G__24752.cljs$lang$maxFixedArity = 0;
G__24752.cljs$lang$applyTo = (function (arglist__24754){
var args = cljs.core.seq(arglist__24754);
return G__24752__delegate(args);
});
G__24752.cljs$core$IFn$_invoke$arity$variadic = G__24752__delegate;
return G__24752;
})()
;

return null;
});
