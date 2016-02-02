goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10943__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10944__i = 0, G__10944__a = new Array(arguments.length -  0);
while (G__10944__i < G__10944__a.length) {G__10944__a[G__10944__i] = arguments[G__10944__i + 0]; ++G__10944__i;}
  args = new cljs.core.IndexedSeq(G__10944__a,0);
} 
return G__10943__delegate.call(this,args);};
G__10943.cljs$lang$maxFixedArity = 0;
G__10943.cljs$lang$applyTo = (function (arglist__10945){
var args = cljs.core.seq(arglist__10945);
return G__10943__delegate(args);
});
G__10943.cljs$core$IFn$_invoke$arity$variadic = G__10943__delegate;
return G__10943;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10946__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10947__i = 0, G__10947__a = new Array(arguments.length -  0);
while (G__10947__i < G__10947__a.length) {G__10947__a[G__10947__i] = arguments[G__10947__i + 0]; ++G__10947__i;}
  args = new cljs.core.IndexedSeq(G__10947__a,0);
} 
return G__10946__delegate.call(this,args);};
G__10946.cljs$lang$maxFixedArity = 0;
G__10946.cljs$lang$applyTo = (function (arglist__10948){
var args = cljs.core.seq(arglist__10948);
return G__10946__delegate(args);
});
G__10946.cljs$core$IFn$_invoke$arity$variadic = G__10946__delegate;
return G__10946;
})()
;

return null;
});
