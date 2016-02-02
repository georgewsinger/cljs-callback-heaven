goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16782__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16783__i = 0, G__16783__a = new Array(arguments.length -  0);
while (G__16783__i < G__16783__a.length) {G__16783__a[G__16783__i] = arguments[G__16783__i + 0]; ++G__16783__i;}
  args = new cljs.core.IndexedSeq(G__16783__a,0);
} 
return G__16782__delegate.call(this,args);};
G__16782.cljs$lang$maxFixedArity = 0;
G__16782.cljs$lang$applyTo = (function (arglist__16784){
var args = cljs.core.seq(arglist__16784);
return G__16782__delegate(args);
});
G__16782.cljs$core$IFn$_invoke$arity$variadic = G__16782__delegate;
return G__16782;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16785__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16786__i = 0, G__16786__a = new Array(arguments.length -  0);
while (G__16786__i < G__16786__a.length) {G__16786__a[G__16786__i] = arguments[G__16786__i + 0]; ++G__16786__i;}
  args = new cljs.core.IndexedSeq(G__16786__a,0);
} 
return G__16785__delegate.call(this,args);};
G__16785.cljs$lang$maxFixedArity = 0;
G__16785.cljs$lang$applyTo = (function (arglist__16787){
var args = cljs.core.seq(arglist__16787);
return G__16785__delegate(args);
});
G__16785.cljs$core$IFn$_invoke$arity$variadic = G__16785__delegate;
return G__16785;
})()
;

return null;
});
