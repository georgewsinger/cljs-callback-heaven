goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15359__i = 0, G__15359__a = new Array(arguments.length -  0);
while (G__15359__i < G__15359__a.length) {G__15359__a[G__15359__i] = arguments[G__15359__i + 0]; ++G__15359__i;}
  args = new cljs.core.IndexedSeq(G__15359__a,0);
} 
return G__15358__delegate.call(this,args);};
G__15358.cljs$lang$maxFixedArity = 0;
G__15358.cljs$lang$applyTo = (function (arglist__15360){
var args = cljs.core.seq(arglist__15360);
return G__15358__delegate(args);
});
G__15358.cljs$core$IFn$_invoke$arity$variadic = G__15358__delegate;
return G__15358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15362__i = 0, G__15362__a = new Array(arguments.length -  0);
while (G__15362__i < G__15362__a.length) {G__15362__a[G__15362__i] = arguments[G__15362__i + 0]; ++G__15362__i;}
  args = new cljs.core.IndexedSeq(G__15362__a,0);
} 
return G__15361__delegate.call(this,args);};
G__15361.cljs$lang$maxFixedArity = 0;
G__15361.cljs$lang$applyTo = (function (arglist__15363){
var args = cljs.core.seq(arglist__15363);
return G__15361__delegate(args);
});
G__15361.cljs$core$IFn$_invoke$arity$variadic = G__15361__delegate;
return G__15361;
})()
;

return null;
});
