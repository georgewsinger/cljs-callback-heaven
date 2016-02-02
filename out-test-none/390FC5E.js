goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11740__i = 0, G__11740__a = new Array(arguments.length -  0);
while (G__11740__i < G__11740__a.length) {G__11740__a[G__11740__i] = arguments[G__11740__i + 0]; ++G__11740__i;}
  args = new cljs.core.IndexedSeq(G__11740__a,0);
} 
return G__11739__delegate.call(this,args);};
G__11739.cljs$lang$maxFixedArity = 0;
G__11739.cljs$lang$applyTo = (function (arglist__11741){
var args = cljs.core.seq(arglist__11741);
return G__11739__delegate(args);
});
G__11739.cljs$core$IFn$_invoke$arity$variadic = G__11739__delegate;
return G__11739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11743__i = 0, G__11743__a = new Array(arguments.length -  0);
while (G__11743__i < G__11743__a.length) {G__11743__a[G__11743__i] = arguments[G__11743__i + 0]; ++G__11743__i;}
  args = new cljs.core.IndexedSeq(G__11743__a,0);
} 
return G__11742__delegate.call(this,args);};
G__11742.cljs$lang$maxFixedArity = 0;
G__11742.cljs$lang$applyTo = (function (arglist__11744){
var args = cljs.core.seq(arglist__11744);
return G__11742__delegate(args);
});
G__11742.cljs$core$IFn$_invoke$arity$variadic = G__11742__delegate;
return G__11742;
})()
;

return null;
});
