goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67647__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67648__i = 0, G__67648__a = new Array(arguments.length -  0);
while (G__67648__i < G__67648__a.length) {G__67648__a[G__67648__i] = arguments[G__67648__i + 0]; ++G__67648__i;}
  args = new cljs.core.IndexedSeq(G__67648__a,0);
} 
return G__67647__delegate.call(this,args);};
G__67647.cljs$lang$maxFixedArity = 0;
G__67647.cljs$lang$applyTo = (function (arglist__67649){
var args = cljs.core.seq(arglist__67649);
return G__67647__delegate(args);
});
G__67647.cljs$core$IFn$_invoke$arity$variadic = G__67647__delegate;
return G__67647;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67650__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67651__i = 0, G__67651__a = new Array(arguments.length -  0);
while (G__67651__i < G__67651__a.length) {G__67651__a[G__67651__i] = arguments[G__67651__i + 0]; ++G__67651__i;}
  args = new cljs.core.IndexedSeq(G__67651__a,0);
} 
return G__67650__delegate.call(this,args);};
G__67650.cljs$lang$maxFixedArity = 0;
G__67650.cljs$lang$applyTo = (function (arglist__67652){
var args = cljs.core.seq(arglist__67652);
return G__67650__delegate(args);
});
G__67650.cljs$core$IFn$_invoke$arity$variadic = G__67650__delegate;
return G__67650;
})()
;

return null;
});
