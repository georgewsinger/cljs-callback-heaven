goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26760__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26761__i = 0, G__26761__a = new Array(arguments.length -  0);
while (G__26761__i < G__26761__a.length) {G__26761__a[G__26761__i] = arguments[G__26761__i + 0]; ++G__26761__i;}
  args = new cljs.core.IndexedSeq(G__26761__a,0);
} 
return G__26760__delegate.call(this,args);};
G__26760.cljs$lang$maxFixedArity = 0;
G__26760.cljs$lang$applyTo = (function (arglist__26762){
var args = cljs.core.seq(arglist__26762);
return G__26760__delegate(args);
});
G__26760.cljs$core$IFn$_invoke$arity$variadic = G__26760__delegate;
return G__26760;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26763__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26764__i = 0, G__26764__a = new Array(arguments.length -  0);
while (G__26764__i < G__26764__a.length) {G__26764__a[G__26764__i] = arguments[G__26764__i + 0]; ++G__26764__i;}
  args = new cljs.core.IndexedSeq(G__26764__a,0);
} 
return G__26763__delegate.call(this,args);};
G__26763.cljs$lang$maxFixedArity = 0;
G__26763.cljs$lang$applyTo = (function (arglist__26765){
var args = cljs.core.seq(arglist__26765);
return G__26763__delegate(args);
});
G__26763.cljs$core$IFn$_invoke$arity$variadic = G__26763__delegate;
return G__26763;
})()
;

return null;
});
