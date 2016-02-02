goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55717__i = 0, G__55717__a = new Array(arguments.length -  0);
while (G__55717__i < G__55717__a.length) {G__55717__a[G__55717__i] = arguments[G__55717__i + 0]; ++G__55717__i;}
  args = new cljs.core.IndexedSeq(G__55717__a,0);
} 
return G__55716__delegate.call(this,args);};
G__55716.cljs$lang$maxFixedArity = 0;
G__55716.cljs$lang$applyTo = (function (arglist__55718){
var args = cljs.core.seq(arglist__55718);
return G__55716__delegate(args);
});
G__55716.cljs$core$IFn$_invoke$arity$variadic = G__55716__delegate;
return G__55716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55720__i = 0, G__55720__a = new Array(arguments.length -  0);
while (G__55720__i < G__55720__a.length) {G__55720__a[G__55720__i] = arguments[G__55720__i + 0]; ++G__55720__i;}
  args = new cljs.core.IndexedSeq(G__55720__a,0);
} 
return G__55719__delegate.call(this,args);};
G__55719.cljs$lang$maxFixedArity = 0;
G__55719.cljs$lang$applyTo = (function (arglist__55721){
var args = cljs.core.seq(arglist__55721);
return G__55719__delegate(args);
});
G__55719.cljs$core$IFn$_invoke$arity$variadic = G__55719__delegate;
return G__55719;
})()
;

return null;
});
