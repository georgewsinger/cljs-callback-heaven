goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14348__i = 0, G__14348__a = new Array(arguments.length -  0);
while (G__14348__i < G__14348__a.length) {G__14348__a[G__14348__i] = arguments[G__14348__i + 0]; ++G__14348__i;}
  args = new cljs.core.IndexedSeq(G__14348__a,0);
} 
return G__14347__delegate.call(this,args);};
G__14347.cljs$lang$maxFixedArity = 0;
G__14347.cljs$lang$applyTo = (function (arglist__14349){
var args = cljs.core.seq(arglist__14349);
return G__14347__delegate(args);
});
G__14347.cljs$core$IFn$_invoke$arity$variadic = G__14347__delegate;
return G__14347;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14351__i = 0, G__14351__a = new Array(arguments.length -  0);
while (G__14351__i < G__14351__a.length) {G__14351__a[G__14351__i] = arguments[G__14351__i + 0]; ++G__14351__i;}
  args = new cljs.core.IndexedSeq(G__14351__a,0);
} 
return G__14350__delegate.call(this,args);};
G__14350.cljs$lang$maxFixedArity = 0;
G__14350.cljs$lang$applyTo = (function (arglist__14352){
var args = cljs.core.seq(arglist__14352);
return G__14350__delegate(args);
});
G__14350.cljs$core$IFn$_invoke$arity$variadic = G__14350__delegate;
return G__14350;
})()
;

return null;
});
