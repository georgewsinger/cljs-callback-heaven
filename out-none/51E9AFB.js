goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31070__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31071__i = 0, G__31071__a = new Array(arguments.length -  0);
while (G__31071__i < G__31071__a.length) {G__31071__a[G__31071__i] = arguments[G__31071__i + 0]; ++G__31071__i;}
  args = new cljs.core.IndexedSeq(G__31071__a,0);
} 
return G__31070__delegate.call(this,args);};
G__31070.cljs$lang$maxFixedArity = 0;
G__31070.cljs$lang$applyTo = (function (arglist__31072){
var args = cljs.core.seq(arglist__31072);
return G__31070__delegate(args);
});
G__31070.cljs$core$IFn$_invoke$arity$variadic = G__31070__delegate;
return G__31070;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31073__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31074__i = 0, G__31074__a = new Array(arguments.length -  0);
while (G__31074__i < G__31074__a.length) {G__31074__a[G__31074__i] = arguments[G__31074__i + 0]; ++G__31074__i;}
  args = new cljs.core.IndexedSeq(G__31074__a,0);
} 
return G__31073__delegate.call(this,args);};
G__31073.cljs$lang$maxFixedArity = 0;
G__31073.cljs$lang$applyTo = (function (arglist__31075){
var args = cljs.core.seq(arglist__31075);
return G__31073__delegate(args);
});
G__31073.cljs$core$IFn$_invoke$arity$variadic = G__31073__delegate;
return G__31073;
})()
;

return null;
});
