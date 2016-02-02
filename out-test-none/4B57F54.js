goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39839__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39840__i = 0, G__39840__a = new Array(arguments.length -  0);
while (G__39840__i < G__39840__a.length) {G__39840__a[G__39840__i] = arguments[G__39840__i + 0]; ++G__39840__i;}
  args = new cljs.core.IndexedSeq(G__39840__a,0);
} 
return G__39839__delegate.call(this,args);};
G__39839.cljs$lang$maxFixedArity = 0;
G__39839.cljs$lang$applyTo = (function (arglist__39841){
var args = cljs.core.seq(arglist__39841);
return G__39839__delegate(args);
});
G__39839.cljs$core$IFn$_invoke$arity$variadic = G__39839__delegate;
return G__39839;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39842__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39843__i = 0, G__39843__a = new Array(arguments.length -  0);
while (G__39843__i < G__39843__a.length) {G__39843__a[G__39843__i] = arguments[G__39843__i + 0]; ++G__39843__i;}
  args = new cljs.core.IndexedSeq(G__39843__a,0);
} 
return G__39842__delegate.call(this,args);};
G__39842.cljs$lang$maxFixedArity = 0;
G__39842.cljs$lang$applyTo = (function (arglist__39844){
var args = cljs.core.seq(arglist__39844);
return G__39842__delegate(args);
});
G__39842.cljs$core$IFn$_invoke$arity$variadic = G__39842__delegate;
return G__39842;
})()
;

return null;
});
