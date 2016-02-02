goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235650__i = 0, G__235650__a = new Array(arguments.length -  0);
while (G__235650__i < G__235650__a.length) {G__235650__a[G__235650__i] = arguments[G__235650__i + 0]; ++G__235650__i;}
  args = new cljs.core.IndexedSeq(G__235650__a,0);
} 
return G__235649__delegate.call(this,args);};
G__235649.cljs$lang$maxFixedArity = 0;
G__235649.cljs$lang$applyTo = (function (arglist__235651){
var args = cljs.core.seq(arglist__235651);
return G__235649__delegate(args);
});
G__235649.cljs$core$IFn$_invoke$arity$variadic = G__235649__delegate;
return G__235649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235653__i = 0, G__235653__a = new Array(arguments.length -  0);
while (G__235653__i < G__235653__a.length) {G__235653__a[G__235653__i] = arguments[G__235653__i + 0]; ++G__235653__i;}
  args = new cljs.core.IndexedSeq(G__235653__a,0);
} 
return G__235652__delegate.call(this,args);};
G__235652.cljs$lang$maxFixedArity = 0;
G__235652.cljs$lang$applyTo = (function (arglist__235654){
var args = cljs.core.seq(arglist__235654);
return G__235652__delegate(args);
});
G__235652.cljs$core$IFn$_invoke$arity$variadic = G__235652__delegate;
return G__235652;
})()
;

return null;
});
