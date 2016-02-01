goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9898__i = 0, G__9898__a = new Array(arguments.length -  0);
while (G__9898__i < G__9898__a.length) {G__9898__a[G__9898__i] = arguments[G__9898__i + 0]; ++G__9898__i;}
  args = new cljs.core.IndexedSeq(G__9898__a,0);
} 
return G__9897__delegate.call(this,args);};
G__9897.cljs$lang$maxFixedArity = 0;
G__9897.cljs$lang$applyTo = (function (arglist__9899){
var args = cljs.core.seq(arglist__9899);
return G__9897__delegate(args);
});
G__9897.cljs$core$IFn$_invoke$arity$variadic = G__9897__delegate;
return G__9897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9901__i = 0, G__9901__a = new Array(arguments.length -  0);
while (G__9901__i < G__9901__a.length) {G__9901__a[G__9901__i] = arguments[G__9901__i + 0]; ++G__9901__i;}
  args = new cljs.core.IndexedSeq(G__9901__a,0);
} 
return G__9900__delegate.call(this,args);};
G__9900.cljs$lang$maxFixedArity = 0;
G__9900.cljs$lang$applyTo = (function (arglist__9902){
var args = cljs.core.seq(arglist__9902);
return G__9900__delegate(args);
});
G__9900.cljs$core$IFn$_invoke$arity$variadic = G__9900__delegate;
return G__9900;
})()
;

return null;
});
