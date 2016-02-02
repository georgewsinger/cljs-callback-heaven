goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36354__i = 0, G__36354__a = new Array(arguments.length -  0);
while (G__36354__i < G__36354__a.length) {G__36354__a[G__36354__i] = arguments[G__36354__i + 0]; ++G__36354__i;}
  args = new cljs.core.IndexedSeq(G__36354__a,0);
} 
return G__36353__delegate.call(this,args);};
G__36353.cljs$lang$maxFixedArity = 0;
G__36353.cljs$lang$applyTo = (function (arglist__36355){
var args = cljs.core.seq(arglist__36355);
return G__36353__delegate(args);
});
G__36353.cljs$core$IFn$_invoke$arity$variadic = G__36353__delegate;
return G__36353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36357__i = 0, G__36357__a = new Array(arguments.length -  0);
while (G__36357__i < G__36357__a.length) {G__36357__a[G__36357__i] = arguments[G__36357__i + 0]; ++G__36357__i;}
  args = new cljs.core.IndexedSeq(G__36357__a,0);
} 
return G__36356__delegate.call(this,args);};
G__36356.cljs$lang$maxFixedArity = 0;
G__36356.cljs$lang$applyTo = (function (arglist__36358){
var args = cljs.core.seq(arglist__36358);
return G__36356__delegate(args);
});
G__36356.cljs$core$IFn$_invoke$arity$variadic = G__36356__delegate;
return G__36356;
})()
;

return null;
});
