goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44895__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44896__i = 0, G__44896__a = new Array(arguments.length -  0);
while (G__44896__i < G__44896__a.length) {G__44896__a[G__44896__i] = arguments[G__44896__i + 0]; ++G__44896__i;}
  args = new cljs.core.IndexedSeq(G__44896__a,0);
} 
return G__44895__delegate.call(this,args);};
G__44895.cljs$lang$maxFixedArity = 0;
G__44895.cljs$lang$applyTo = (function (arglist__44897){
var args = cljs.core.seq(arglist__44897);
return G__44895__delegate(args);
});
G__44895.cljs$core$IFn$_invoke$arity$variadic = G__44895__delegate;
return G__44895;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44898__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44899__i = 0, G__44899__a = new Array(arguments.length -  0);
while (G__44899__i < G__44899__a.length) {G__44899__a[G__44899__i] = arguments[G__44899__i + 0]; ++G__44899__i;}
  args = new cljs.core.IndexedSeq(G__44899__a,0);
} 
return G__44898__delegate.call(this,args);};
G__44898.cljs$lang$maxFixedArity = 0;
G__44898.cljs$lang$applyTo = (function (arglist__44900){
var args = cljs.core.seq(arglist__44900);
return G__44898__delegate(args);
});
G__44898.cljs$core$IFn$_invoke$arity$variadic = G__44898__delegate;
return G__44898;
})()
;

return null;
});
