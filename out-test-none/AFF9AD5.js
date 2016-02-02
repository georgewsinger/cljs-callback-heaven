goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36971__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36972__i = 0, G__36972__a = new Array(arguments.length -  0);
while (G__36972__i < G__36972__a.length) {G__36972__a[G__36972__i] = arguments[G__36972__i + 0]; ++G__36972__i;}
  args = new cljs.core.IndexedSeq(G__36972__a,0);
} 
return G__36971__delegate.call(this,args);};
G__36971.cljs$lang$maxFixedArity = 0;
G__36971.cljs$lang$applyTo = (function (arglist__36973){
var args = cljs.core.seq(arglist__36973);
return G__36971__delegate(args);
});
G__36971.cljs$core$IFn$_invoke$arity$variadic = G__36971__delegate;
return G__36971;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36974__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36975__i = 0, G__36975__a = new Array(arguments.length -  0);
while (G__36975__i < G__36975__a.length) {G__36975__a[G__36975__i] = arguments[G__36975__i + 0]; ++G__36975__i;}
  args = new cljs.core.IndexedSeq(G__36975__a,0);
} 
return G__36974__delegate.call(this,args);};
G__36974.cljs$lang$maxFixedArity = 0;
G__36974.cljs$lang$applyTo = (function (arglist__36976){
var args = cljs.core.seq(arglist__36976);
return G__36974__delegate(args);
});
G__36974.cljs$core$IFn$_invoke$arity$variadic = G__36974__delegate;
return G__36974;
})()
;

return null;
});
