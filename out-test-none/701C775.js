goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31100__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31101__i = 0, G__31101__a = new Array(arguments.length -  0);
while (G__31101__i < G__31101__a.length) {G__31101__a[G__31101__i] = arguments[G__31101__i + 0]; ++G__31101__i;}
  args = new cljs.core.IndexedSeq(G__31101__a,0);
} 
return G__31100__delegate.call(this,args);};
G__31100.cljs$lang$maxFixedArity = 0;
G__31100.cljs$lang$applyTo = (function (arglist__31102){
var args = cljs.core.seq(arglist__31102);
return G__31100__delegate(args);
});
G__31100.cljs$core$IFn$_invoke$arity$variadic = G__31100__delegate;
return G__31100;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31103__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31104__i = 0, G__31104__a = new Array(arguments.length -  0);
while (G__31104__i < G__31104__a.length) {G__31104__a[G__31104__i] = arguments[G__31104__i + 0]; ++G__31104__i;}
  args = new cljs.core.IndexedSeq(G__31104__a,0);
} 
return G__31103__delegate.call(this,args);};
G__31103.cljs$lang$maxFixedArity = 0;
G__31103.cljs$lang$applyTo = (function (arglist__31105){
var args = cljs.core.seq(arglist__31105);
return G__31103__delegate(args);
});
G__31103.cljs$core$IFn$_invoke$arity$variadic = G__31103__delegate;
return G__31103;
})()
;

return null;
});
