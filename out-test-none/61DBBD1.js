goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13878__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13879__i = 0, G__13879__a = new Array(arguments.length -  0);
while (G__13879__i < G__13879__a.length) {G__13879__a[G__13879__i] = arguments[G__13879__i + 0]; ++G__13879__i;}
  args = new cljs.core.IndexedSeq(G__13879__a,0);
} 
return G__13878__delegate.call(this,args);};
G__13878.cljs$lang$maxFixedArity = 0;
G__13878.cljs$lang$applyTo = (function (arglist__13880){
var args = cljs.core.seq(arglist__13880);
return G__13878__delegate(args);
});
G__13878.cljs$core$IFn$_invoke$arity$variadic = G__13878__delegate;
return G__13878;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13881__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13882__i = 0, G__13882__a = new Array(arguments.length -  0);
while (G__13882__i < G__13882__a.length) {G__13882__a[G__13882__i] = arguments[G__13882__i + 0]; ++G__13882__i;}
  args = new cljs.core.IndexedSeq(G__13882__a,0);
} 
return G__13881__delegate.call(this,args);};
G__13881.cljs$lang$maxFixedArity = 0;
G__13881.cljs$lang$applyTo = (function (arglist__13883){
var args = cljs.core.seq(arglist__13883);
return G__13881__delegate(args);
});
G__13881.cljs$core$IFn$_invoke$arity$variadic = G__13881__delegate;
return G__13881;
})()
;

return null;
});
