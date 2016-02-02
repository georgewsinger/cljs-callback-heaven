goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__167896__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__167896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167897__i = 0, G__167897__a = new Array(arguments.length -  0);
while (G__167897__i < G__167897__a.length) {G__167897__a[G__167897__i] = arguments[G__167897__i + 0]; ++G__167897__i;}
  args = new cljs.core.IndexedSeq(G__167897__a,0);
} 
return G__167896__delegate.call(this,args);};
G__167896.cljs$lang$maxFixedArity = 0;
G__167896.cljs$lang$applyTo = (function (arglist__167898){
var args = cljs.core.seq(arglist__167898);
return G__167896__delegate(args);
});
G__167896.cljs$core$IFn$_invoke$arity$variadic = G__167896__delegate;
return G__167896;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__167899__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__167899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167900__i = 0, G__167900__a = new Array(arguments.length -  0);
while (G__167900__i < G__167900__a.length) {G__167900__a[G__167900__i] = arguments[G__167900__i + 0]; ++G__167900__i;}
  args = new cljs.core.IndexedSeq(G__167900__a,0);
} 
return G__167899__delegate.call(this,args);};
G__167899.cljs$lang$maxFixedArity = 0;
G__167899.cljs$lang$applyTo = (function (arglist__167901){
var args = cljs.core.seq(arglist__167901);
return G__167899__delegate(args);
});
G__167899.cljs$core$IFn$_invoke$arity$variadic = G__167899__delegate;
return G__167899;
})()
;

return null;
});
