goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39644__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39645__i = 0, G__39645__a = new Array(arguments.length -  0);
while (G__39645__i < G__39645__a.length) {G__39645__a[G__39645__i] = arguments[G__39645__i + 0]; ++G__39645__i;}
  args = new cljs.core.IndexedSeq(G__39645__a,0);
} 
return G__39644__delegate.call(this,args);};
G__39644.cljs$lang$maxFixedArity = 0;
G__39644.cljs$lang$applyTo = (function (arglist__39646){
var args = cljs.core.seq(arglist__39646);
return G__39644__delegate(args);
});
G__39644.cljs$core$IFn$_invoke$arity$variadic = G__39644__delegate;
return G__39644;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39647__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39648__i = 0, G__39648__a = new Array(arguments.length -  0);
while (G__39648__i < G__39648__a.length) {G__39648__a[G__39648__i] = arguments[G__39648__i + 0]; ++G__39648__i;}
  args = new cljs.core.IndexedSeq(G__39648__a,0);
} 
return G__39647__delegate.call(this,args);};
G__39647.cljs$lang$maxFixedArity = 0;
G__39647.cljs$lang$applyTo = (function (arglist__39649){
var args = cljs.core.seq(arglist__39649);
return G__39647__delegate(args);
});
G__39647.cljs$core$IFn$_invoke$arity$variadic = G__39647__delegate;
return G__39647;
})()
;

return null;
});
