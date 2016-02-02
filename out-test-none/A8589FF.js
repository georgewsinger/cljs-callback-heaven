goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18859__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18860__i = 0, G__18860__a = new Array(arguments.length -  0);
while (G__18860__i < G__18860__a.length) {G__18860__a[G__18860__i] = arguments[G__18860__i + 0]; ++G__18860__i;}
  args = new cljs.core.IndexedSeq(G__18860__a,0);
} 
return G__18859__delegate.call(this,args);};
G__18859.cljs$lang$maxFixedArity = 0;
G__18859.cljs$lang$applyTo = (function (arglist__18861){
var args = cljs.core.seq(arglist__18861);
return G__18859__delegate(args);
});
G__18859.cljs$core$IFn$_invoke$arity$variadic = G__18859__delegate;
return G__18859;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18862__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18863__i = 0, G__18863__a = new Array(arguments.length -  0);
while (G__18863__i < G__18863__a.length) {G__18863__a[G__18863__i] = arguments[G__18863__i + 0]; ++G__18863__i;}
  args = new cljs.core.IndexedSeq(G__18863__a,0);
} 
return G__18862__delegate.call(this,args);};
G__18862.cljs$lang$maxFixedArity = 0;
G__18862.cljs$lang$applyTo = (function (arglist__18864){
var args = cljs.core.seq(arglist__18864);
return G__18862__delegate(args);
});
G__18862.cljs$core$IFn$_invoke$arity$variadic = G__18862__delegate;
return G__18862;
})()
;

return null;
});
