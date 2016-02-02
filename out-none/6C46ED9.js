goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__79232__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__79232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79233__i = 0, G__79233__a = new Array(arguments.length -  0);
while (G__79233__i < G__79233__a.length) {G__79233__a[G__79233__i] = arguments[G__79233__i + 0]; ++G__79233__i;}
  args = new cljs.core.IndexedSeq(G__79233__a,0);
} 
return G__79232__delegate.call(this,args);};
G__79232.cljs$lang$maxFixedArity = 0;
G__79232.cljs$lang$applyTo = (function (arglist__79234){
var args = cljs.core.seq(arglist__79234);
return G__79232__delegate(args);
});
G__79232.cljs$core$IFn$_invoke$arity$variadic = G__79232__delegate;
return G__79232;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__79235__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__79235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79236__i = 0, G__79236__a = new Array(arguments.length -  0);
while (G__79236__i < G__79236__a.length) {G__79236__a[G__79236__i] = arguments[G__79236__i + 0]; ++G__79236__i;}
  args = new cljs.core.IndexedSeq(G__79236__a,0);
} 
return G__79235__delegate.call(this,args);};
G__79235.cljs$lang$maxFixedArity = 0;
G__79235.cljs$lang$applyTo = (function (arglist__79237){
var args = cljs.core.seq(arglist__79237);
return G__79235__delegate(args);
});
G__79235.cljs$core$IFn$_invoke$arity$variadic = G__79235__delegate;
return G__79235;
})()
;

return null;
});
