goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11816__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11817__i = 0, G__11817__a = new Array(arguments.length -  0);
while (G__11817__i < G__11817__a.length) {G__11817__a[G__11817__i] = arguments[G__11817__i + 0]; ++G__11817__i;}
  args = new cljs.core.IndexedSeq(G__11817__a,0);
} 
return G__11816__delegate.call(this,args);};
G__11816.cljs$lang$maxFixedArity = 0;
G__11816.cljs$lang$applyTo = (function (arglist__11818){
var args = cljs.core.seq(arglist__11818);
return G__11816__delegate(args);
});
G__11816.cljs$core$IFn$_invoke$arity$variadic = G__11816__delegate;
return G__11816;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11819__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11820__i = 0, G__11820__a = new Array(arguments.length -  0);
while (G__11820__i < G__11820__a.length) {G__11820__a[G__11820__i] = arguments[G__11820__i + 0]; ++G__11820__i;}
  args = new cljs.core.IndexedSeq(G__11820__a,0);
} 
return G__11819__delegate.call(this,args);};
G__11819.cljs$lang$maxFixedArity = 0;
G__11819.cljs$lang$applyTo = (function (arglist__11821){
var args = cljs.core.seq(arglist__11821);
return G__11819__delegate(args);
});
G__11819.cljs$core$IFn$_invoke$arity$variadic = G__11819__delegate;
return G__11819;
})()
;

return null;
});
