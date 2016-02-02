goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31137__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31138__i = 0, G__31138__a = new Array(arguments.length -  0);
while (G__31138__i < G__31138__a.length) {G__31138__a[G__31138__i] = arguments[G__31138__i + 0]; ++G__31138__i;}
  args = new cljs.core.IndexedSeq(G__31138__a,0);
} 
return G__31137__delegate.call(this,args);};
G__31137.cljs$lang$maxFixedArity = 0;
G__31137.cljs$lang$applyTo = (function (arglist__31139){
var args = cljs.core.seq(arglist__31139);
return G__31137__delegate(args);
});
G__31137.cljs$core$IFn$_invoke$arity$variadic = G__31137__delegate;
return G__31137;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31140__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31141__i = 0, G__31141__a = new Array(arguments.length -  0);
while (G__31141__i < G__31141__a.length) {G__31141__a[G__31141__i] = arguments[G__31141__i + 0]; ++G__31141__i;}
  args = new cljs.core.IndexedSeq(G__31141__a,0);
} 
return G__31140__delegate.call(this,args);};
G__31140.cljs$lang$maxFixedArity = 0;
G__31140.cljs$lang$applyTo = (function (arglist__31142){
var args = cljs.core.seq(arglist__31142);
return G__31140__delegate(args);
});
G__31140.cljs$core$IFn$_invoke$arity$variadic = G__31140__delegate;
return G__31140;
})()
;

return null;
});
