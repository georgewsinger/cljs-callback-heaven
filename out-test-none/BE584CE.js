goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__213026__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__213026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__213027__i = 0, G__213027__a = new Array(arguments.length -  0);
while (G__213027__i < G__213027__a.length) {G__213027__a[G__213027__i] = arguments[G__213027__i + 0]; ++G__213027__i;}
  args = new cljs.core.IndexedSeq(G__213027__a,0);
} 
return G__213026__delegate.call(this,args);};
G__213026.cljs$lang$maxFixedArity = 0;
G__213026.cljs$lang$applyTo = (function (arglist__213028){
var args = cljs.core.seq(arglist__213028);
return G__213026__delegate(args);
});
G__213026.cljs$core$IFn$_invoke$arity$variadic = G__213026__delegate;
return G__213026;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__213029__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__213029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__213030__i = 0, G__213030__a = new Array(arguments.length -  0);
while (G__213030__i < G__213030__a.length) {G__213030__a[G__213030__i] = arguments[G__213030__i + 0]; ++G__213030__i;}
  args = new cljs.core.IndexedSeq(G__213030__a,0);
} 
return G__213029__delegate.call(this,args);};
G__213029.cljs$lang$maxFixedArity = 0;
G__213029.cljs$lang$applyTo = (function (arglist__213031){
var args = cljs.core.seq(arglist__213031);
return G__213029__delegate(args);
});
G__213029.cljs$core$IFn$_invoke$arity$variadic = G__213029__delegate;
return G__213029;
})()
;

return null;
});
