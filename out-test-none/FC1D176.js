goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__301959__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__301959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301960__i = 0, G__301960__a = new Array(arguments.length -  0);
while (G__301960__i < G__301960__a.length) {G__301960__a[G__301960__i] = arguments[G__301960__i + 0]; ++G__301960__i;}
  args = new cljs.core.IndexedSeq(G__301960__a,0);
} 
return G__301959__delegate.call(this,args);};
G__301959.cljs$lang$maxFixedArity = 0;
G__301959.cljs$lang$applyTo = (function (arglist__301961){
var args = cljs.core.seq(arglist__301961);
return G__301959__delegate(args);
});
G__301959.cljs$core$IFn$_invoke$arity$variadic = G__301959__delegate;
return G__301959;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__301962__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__301962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301963__i = 0, G__301963__a = new Array(arguments.length -  0);
while (G__301963__i < G__301963__a.length) {G__301963__a[G__301963__i] = arguments[G__301963__i + 0]; ++G__301963__i;}
  args = new cljs.core.IndexedSeq(G__301963__a,0);
} 
return G__301962__delegate.call(this,args);};
G__301962.cljs$lang$maxFixedArity = 0;
G__301962.cljs$lang$applyTo = (function (arglist__301964){
var args = cljs.core.seq(arglist__301964);
return G__301962__delegate(args);
});
G__301962.cljs$core$IFn$_invoke$arity$variadic = G__301962__delegate;
return G__301962;
})()
;

return null;
});
