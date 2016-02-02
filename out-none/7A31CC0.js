goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36585__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36586__i = 0, G__36586__a = new Array(arguments.length -  0);
while (G__36586__i < G__36586__a.length) {G__36586__a[G__36586__i] = arguments[G__36586__i + 0]; ++G__36586__i;}
  args = new cljs.core.IndexedSeq(G__36586__a,0);
} 
return G__36585__delegate.call(this,args);};
G__36585.cljs$lang$maxFixedArity = 0;
G__36585.cljs$lang$applyTo = (function (arglist__36587){
var args = cljs.core.seq(arglist__36587);
return G__36585__delegate(args);
});
G__36585.cljs$core$IFn$_invoke$arity$variadic = G__36585__delegate;
return G__36585;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36588__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36589__i = 0, G__36589__a = new Array(arguments.length -  0);
while (G__36589__i < G__36589__a.length) {G__36589__a[G__36589__i] = arguments[G__36589__i + 0]; ++G__36589__i;}
  args = new cljs.core.IndexedSeq(G__36589__a,0);
} 
return G__36588__delegate.call(this,args);};
G__36588.cljs$lang$maxFixedArity = 0;
G__36588.cljs$lang$applyTo = (function (arglist__36590){
var args = cljs.core.seq(arglist__36590);
return G__36588__delegate(args);
});
G__36588.cljs$core$IFn$_invoke$arity$variadic = G__36588__delegate;
return G__36588;
})()
;

return null;
});
