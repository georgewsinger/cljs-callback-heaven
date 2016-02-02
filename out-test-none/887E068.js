goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12274__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12275__i = 0, G__12275__a = new Array(arguments.length -  0);
while (G__12275__i < G__12275__a.length) {G__12275__a[G__12275__i] = arguments[G__12275__i + 0]; ++G__12275__i;}
  args = new cljs.core.IndexedSeq(G__12275__a,0);
} 
return G__12274__delegate.call(this,args);};
G__12274.cljs$lang$maxFixedArity = 0;
G__12274.cljs$lang$applyTo = (function (arglist__12276){
var args = cljs.core.seq(arglist__12276);
return G__12274__delegate(args);
});
G__12274.cljs$core$IFn$_invoke$arity$variadic = G__12274__delegate;
return G__12274;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12277__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12278__i = 0, G__12278__a = new Array(arguments.length -  0);
while (G__12278__i < G__12278__a.length) {G__12278__a[G__12278__i] = arguments[G__12278__i + 0]; ++G__12278__i;}
  args = new cljs.core.IndexedSeq(G__12278__a,0);
} 
return G__12277__delegate.call(this,args);};
G__12277.cljs$lang$maxFixedArity = 0;
G__12277.cljs$lang$applyTo = (function (arglist__12279){
var args = cljs.core.seq(arglist__12279);
return G__12277__delegate(args);
});
G__12277.cljs$core$IFn$_invoke$arity$variadic = G__12277__delegate;
return G__12277;
})()
;

return null;
});
