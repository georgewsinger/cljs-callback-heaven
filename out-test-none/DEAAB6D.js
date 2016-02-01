goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14507__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14508__i = 0, G__14508__a = new Array(arguments.length -  0);
while (G__14508__i < G__14508__a.length) {G__14508__a[G__14508__i] = arguments[G__14508__i + 0]; ++G__14508__i;}
  args = new cljs.core.IndexedSeq(G__14508__a,0);
} 
return G__14507__delegate.call(this,args);};
G__14507.cljs$lang$maxFixedArity = 0;
G__14507.cljs$lang$applyTo = (function (arglist__14509){
var args = cljs.core.seq(arglist__14509);
return G__14507__delegate(args);
});
G__14507.cljs$core$IFn$_invoke$arity$variadic = G__14507__delegate;
return G__14507;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14510__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14511__i = 0, G__14511__a = new Array(arguments.length -  0);
while (G__14511__i < G__14511__a.length) {G__14511__a[G__14511__i] = arguments[G__14511__i + 0]; ++G__14511__i;}
  args = new cljs.core.IndexedSeq(G__14511__a,0);
} 
return G__14510__delegate.call(this,args);};
G__14510.cljs$lang$maxFixedArity = 0;
G__14510.cljs$lang$applyTo = (function (arglist__14512){
var args = cljs.core.seq(arglist__14512);
return G__14510__delegate(args);
});
G__14510.cljs$core$IFn$_invoke$arity$variadic = G__14510__delegate;
return G__14510;
})()
;

return null;
});
