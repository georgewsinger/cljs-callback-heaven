goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14708__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14709__i = 0, G__14709__a = new Array(arguments.length -  0);
while (G__14709__i < G__14709__a.length) {G__14709__a[G__14709__i] = arguments[G__14709__i + 0]; ++G__14709__i;}
  args = new cljs.core.IndexedSeq(G__14709__a,0);
} 
return G__14708__delegate.call(this,args);};
G__14708.cljs$lang$maxFixedArity = 0;
G__14708.cljs$lang$applyTo = (function (arglist__14710){
var args = cljs.core.seq(arglist__14710);
return G__14708__delegate(args);
});
G__14708.cljs$core$IFn$_invoke$arity$variadic = G__14708__delegate;
return G__14708;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14711__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14712__i = 0, G__14712__a = new Array(arguments.length -  0);
while (G__14712__i < G__14712__a.length) {G__14712__a[G__14712__i] = arguments[G__14712__i + 0]; ++G__14712__i;}
  args = new cljs.core.IndexedSeq(G__14712__a,0);
} 
return G__14711__delegate.call(this,args);};
G__14711.cljs$lang$maxFixedArity = 0;
G__14711.cljs$lang$applyTo = (function (arglist__14713){
var args = cljs.core.seq(arglist__14713);
return G__14711__delegate(args);
});
G__14711.cljs$core$IFn$_invoke$arity$variadic = G__14711__delegate;
return G__14711;
})()
;

return null;
});
