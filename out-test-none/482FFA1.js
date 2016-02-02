goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22757__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22758__i = 0, G__22758__a = new Array(arguments.length -  0);
while (G__22758__i < G__22758__a.length) {G__22758__a[G__22758__i] = arguments[G__22758__i + 0]; ++G__22758__i;}
  args = new cljs.core.IndexedSeq(G__22758__a,0);
} 
return G__22757__delegate.call(this,args);};
G__22757.cljs$lang$maxFixedArity = 0;
G__22757.cljs$lang$applyTo = (function (arglist__22759){
var args = cljs.core.seq(arglist__22759);
return G__22757__delegate(args);
});
G__22757.cljs$core$IFn$_invoke$arity$variadic = G__22757__delegate;
return G__22757;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22760__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22761__i = 0, G__22761__a = new Array(arguments.length -  0);
while (G__22761__i < G__22761__a.length) {G__22761__a[G__22761__i] = arguments[G__22761__i + 0]; ++G__22761__i;}
  args = new cljs.core.IndexedSeq(G__22761__a,0);
} 
return G__22760__delegate.call(this,args);};
G__22760.cljs$lang$maxFixedArity = 0;
G__22760.cljs$lang$applyTo = (function (arglist__22762){
var args = cljs.core.seq(arglist__22762);
return G__22760__delegate(args);
});
G__22760.cljs$core$IFn$_invoke$arity$variadic = G__22760__delegate;
return G__22760;
})()
;

return null;
});
