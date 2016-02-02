goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55229__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55230__i = 0, G__55230__a = new Array(arguments.length -  0);
while (G__55230__i < G__55230__a.length) {G__55230__a[G__55230__i] = arguments[G__55230__i + 0]; ++G__55230__i;}
  args = new cljs.core.IndexedSeq(G__55230__a,0);
} 
return G__55229__delegate.call(this,args);};
G__55229.cljs$lang$maxFixedArity = 0;
G__55229.cljs$lang$applyTo = (function (arglist__55231){
var args = cljs.core.seq(arglist__55231);
return G__55229__delegate(args);
});
G__55229.cljs$core$IFn$_invoke$arity$variadic = G__55229__delegate;
return G__55229;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55232__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55233__i = 0, G__55233__a = new Array(arguments.length -  0);
while (G__55233__i < G__55233__a.length) {G__55233__a[G__55233__i] = arguments[G__55233__i + 0]; ++G__55233__i;}
  args = new cljs.core.IndexedSeq(G__55233__a,0);
} 
return G__55232__delegate.call(this,args);};
G__55232.cljs$lang$maxFixedArity = 0;
G__55232.cljs$lang$applyTo = (function (arglist__55234){
var args = cljs.core.seq(arglist__55234);
return G__55232__delegate(args);
});
G__55232.cljs$core$IFn$_invoke$arity$variadic = G__55232__delegate;
return G__55232;
})()
;

return null;
});
