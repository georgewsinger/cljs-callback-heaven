goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34937__i = 0, G__34937__a = new Array(arguments.length -  0);
while (G__34937__i < G__34937__a.length) {G__34937__a[G__34937__i] = arguments[G__34937__i + 0]; ++G__34937__i;}
  args = new cljs.core.IndexedSeq(G__34937__a,0);
} 
return G__34936__delegate.call(this,args);};
G__34936.cljs$lang$maxFixedArity = 0;
G__34936.cljs$lang$applyTo = (function (arglist__34938){
var args = cljs.core.seq(arglist__34938);
return G__34936__delegate(args);
});
G__34936.cljs$core$IFn$_invoke$arity$variadic = G__34936__delegate;
return G__34936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34940__i = 0, G__34940__a = new Array(arguments.length -  0);
while (G__34940__i < G__34940__a.length) {G__34940__a[G__34940__i] = arguments[G__34940__i + 0]; ++G__34940__i;}
  args = new cljs.core.IndexedSeq(G__34940__a,0);
} 
return G__34939__delegate.call(this,args);};
G__34939.cljs$lang$maxFixedArity = 0;
G__34939.cljs$lang$applyTo = (function (arglist__34941){
var args = cljs.core.seq(arglist__34941);
return G__34939__delegate(args);
});
G__34939.cljs$core$IFn$_invoke$arity$variadic = G__34939__delegate;
return G__34939;
})()
;

return null;
});
