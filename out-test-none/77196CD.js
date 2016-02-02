goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10740__i = 0, G__10740__a = new Array(arguments.length -  0);
while (G__10740__i < G__10740__a.length) {G__10740__a[G__10740__i] = arguments[G__10740__i + 0]; ++G__10740__i;}
  args = new cljs.core.IndexedSeq(G__10740__a,0);
} 
return G__10739__delegate.call(this,args);};
G__10739.cljs$lang$maxFixedArity = 0;
G__10739.cljs$lang$applyTo = (function (arglist__10741){
var args = cljs.core.seq(arglist__10741);
return G__10739__delegate(args);
});
G__10739.cljs$core$IFn$_invoke$arity$variadic = G__10739__delegate;
return G__10739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10743__i = 0, G__10743__a = new Array(arguments.length -  0);
while (G__10743__i < G__10743__a.length) {G__10743__a[G__10743__i] = arguments[G__10743__i + 0]; ++G__10743__i;}
  args = new cljs.core.IndexedSeq(G__10743__a,0);
} 
return G__10742__delegate.call(this,args);};
G__10742.cljs$lang$maxFixedArity = 0;
G__10742.cljs$lang$applyTo = (function (arglist__10744){
var args = cljs.core.seq(arglist__10744);
return G__10742__delegate(args);
});
G__10742.cljs$core$IFn$_invoke$arity$variadic = G__10742__delegate;
return G__10742;
})()
;

return null;
});
