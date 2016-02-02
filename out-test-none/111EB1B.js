goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15071__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15072__i = 0, G__15072__a = new Array(arguments.length -  0);
while (G__15072__i < G__15072__a.length) {G__15072__a[G__15072__i] = arguments[G__15072__i + 0]; ++G__15072__i;}
  args = new cljs.core.IndexedSeq(G__15072__a,0);
} 
return G__15071__delegate.call(this,args);};
G__15071.cljs$lang$maxFixedArity = 0;
G__15071.cljs$lang$applyTo = (function (arglist__15073){
var args = cljs.core.seq(arglist__15073);
return G__15071__delegate(args);
});
G__15071.cljs$core$IFn$_invoke$arity$variadic = G__15071__delegate;
return G__15071;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15074__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15075__i = 0, G__15075__a = new Array(arguments.length -  0);
while (G__15075__i < G__15075__a.length) {G__15075__a[G__15075__i] = arguments[G__15075__i + 0]; ++G__15075__i;}
  args = new cljs.core.IndexedSeq(G__15075__a,0);
} 
return G__15074__delegate.call(this,args);};
G__15074.cljs$lang$maxFixedArity = 0;
G__15074.cljs$lang$applyTo = (function (arglist__15076){
var args = cljs.core.seq(arglist__15076);
return G__15074__delegate(args);
});
G__15074.cljs$core$IFn$_invoke$arity$variadic = G__15074__delegate;
return G__15074;
})()
;

return null;
});
