goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21566__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21567__i = 0, G__21567__a = new Array(arguments.length -  0);
while (G__21567__i < G__21567__a.length) {G__21567__a[G__21567__i] = arguments[G__21567__i + 0]; ++G__21567__i;}
  args = new cljs.core.IndexedSeq(G__21567__a,0);
} 
return G__21566__delegate.call(this,args);};
G__21566.cljs$lang$maxFixedArity = 0;
G__21566.cljs$lang$applyTo = (function (arglist__21568){
var args = cljs.core.seq(arglist__21568);
return G__21566__delegate(args);
});
G__21566.cljs$core$IFn$_invoke$arity$variadic = G__21566__delegate;
return G__21566;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21569__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21570__i = 0, G__21570__a = new Array(arguments.length -  0);
while (G__21570__i < G__21570__a.length) {G__21570__a[G__21570__i] = arguments[G__21570__i + 0]; ++G__21570__i;}
  args = new cljs.core.IndexedSeq(G__21570__a,0);
} 
return G__21569__delegate.call(this,args);};
G__21569.cljs$lang$maxFixedArity = 0;
G__21569.cljs$lang$applyTo = (function (arglist__21571){
var args = cljs.core.seq(arglist__21571);
return G__21569__delegate(args);
});
G__21569.cljs$core$IFn$_invoke$arity$variadic = G__21569__delegate;
return G__21569;
})()
;

return null;
});
