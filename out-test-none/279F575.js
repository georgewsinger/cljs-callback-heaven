goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18898__i = 0, G__18898__a = new Array(arguments.length -  0);
while (G__18898__i < G__18898__a.length) {G__18898__a[G__18898__i] = arguments[G__18898__i + 0]; ++G__18898__i;}
  args = new cljs.core.IndexedSeq(G__18898__a,0);
} 
return G__18897__delegate.call(this,args);};
G__18897.cljs$lang$maxFixedArity = 0;
G__18897.cljs$lang$applyTo = (function (arglist__18899){
var args = cljs.core.seq(arglist__18899);
return G__18897__delegate(args);
});
G__18897.cljs$core$IFn$_invoke$arity$variadic = G__18897__delegate;
return G__18897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18901__i = 0, G__18901__a = new Array(arguments.length -  0);
while (G__18901__i < G__18901__a.length) {G__18901__a[G__18901__i] = arguments[G__18901__i + 0]; ++G__18901__i;}
  args = new cljs.core.IndexedSeq(G__18901__a,0);
} 
return G__18900__delegate.call(this,args);};
G__18900.cljs$lang$maxFixedArity = 0;
G__18900.cljs$lang$applyTo = (function (arglist__18902){
var args = cljs.core.seq(arglist__18902);
return G__18900__delegate(args);
});
G__18900.cljs$core$IFn$_invoke$arity$variadic = G__18900__delegate;
return G__18900;
})()
;

return null;
});
