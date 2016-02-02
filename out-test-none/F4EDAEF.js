goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59383__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59384__i = 0, G__59384__a = new Array(arguments.length -  0);
while (G__59384__i < G__59384__a.length) {G__59384__a[G__59384__i] = arguments[G__59384__i + 0]; ++G__59384__i;}
  args = new cljs.core.IndexedSeq(G__59384__a,0);
} 
return G__59383__delegate.call(this,args);};
G__59383.cljs$lang$maxFixedArity = 0;
G__59383.cljs$lang$applyTo = (function (arglist__59385){
var args = cljs.core.seq(arglist__59385);
return G__59383__delegate(args);
});
G__59383.cljs$core$IFn$_invoke$arity$variadic = G__59383__delegate;
return G__59383;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59386__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59387__i = 0, G__59387__a = new Array(arguments.length -  0);
while (G__59387__i < G__59387__a.length) {G__59387__a[G__59387__i] = arguments[G__59387__i + 0]; ++G__59387__i;}
  args = new cljs.core.IndexedSeq(G__59387__a,0);
} 
return G__59386__delegate.call(this,args);};
G__59386.cljs$lang$maxFixedArity = 0;
G__59386.cljs$lang$applyTo = (function (arglist__59388){
var args = cljs.core.seq(arglist__59388);
return G__59386__delegate(args);
});
G__59386.cljs$core$IFn$_invoke$arity$variadic = G__59386__delegate;
return G__59386;
})()
;

return null;
});
