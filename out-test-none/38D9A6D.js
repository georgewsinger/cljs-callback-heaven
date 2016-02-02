goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__294452__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__294452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294453__i = 0, G__294453__a = new Array(arguments.length -  0);
while (G__294453__i < G__294453__a.length) {G__294453__a[G__294453__i] = arguments[G__294453__i + 0]; ++G__294453__i;}
  args = new cljs.core.IndexedSeq(G__294453__a,0);
} 
return G__294452__delegate.call(this,args);};
G__294452.cljs$lang$maxFixedArity = 0;
G__294452.cljs$lang$applyTo = (function (arglist__294454){
var args = cljs.core.seq(arglist__294454);
return G__294452__delegate(args);
});
G__294452.cljs$core$IFn$_invoke$arity$variadic = G__294452__delegate;
return G__294452;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__294455__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__294455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294456__i = 0, G__294456__a = new Array(arguments.length -  0);
while (G__294456__i < G__294456__a.length) {G__294456__a[G__294456__i] = arguments[G__294456__i + 0]; ++G__294456__i;}
  args = new cljs.core.IndexedSeq(G__294456__a,0);
} 
return G__294455__delegate.call(this,args);};
G__294455.cljs$lang$maxFixedArity = 0;
G__294455.cljs$lang$applyTo = (function (arglist__294457){
var args = cljs.core.seq(arglist__294457);
return G__294455__delegate(args);
});
G__294455.cljs$core$IFn$_invoke$arity$variadic = G__294455__delegate;
return G__294455;
})()
;

return null;
});
