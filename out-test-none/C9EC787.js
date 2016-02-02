goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32496__i = 0, G__32496__a = new Array(arguments.length -  0);
while (G__32496__i < G__32496__a.length) {G__32496__a[G__32496__i] = arguments[G__32496__i + 0]; ++G__32496__i;}
  args = new cljs.core.IndexedSeq(G__32496__a,0);
} 
return G__32495__delegate.call(this,args);};
G__32495.cljs$lang$maxFixedArity = 0;
G__32495.cljs$lang$applyTo = (function (arglist__32497){
var args = cljs.core.seq(arglist__32497);
return G__32495__delegate(args);
});
G__32495.cljs$core$IFn$_invoke$arity$variadic = G__32495__delegate;
return G__32495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32499__i = 0, G__32499__a = new Array(arguments.length -  0);
while (G__32499__i < G__32499__a.length) {G__32499__a[G__32499__i] = arguments[G__32499__i + 0]; ++G__32499__i;}
  args = new cljs.core.IndexedSeq(G__32499__a,0);
} 
return G__32498__delegate.call(this,args);};
G__32498.cljs$lang$maxFixedArity = 0;
G__32498.cljs$lang$applyTo = (function (arglist__32500){
var args = cljs.core.seq(arglist__32500);
return G__32498__delegate(args);
});
G__32498.cljs$core$IFn$_invoke$arity$variadic = G__32498__delegate;
return G__32498;
})()
;

return null;
});
