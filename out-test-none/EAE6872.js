goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15201__i = 0, G__15201__a = new Array(arguments.length -  0);
while (G__15201__i < G__15201__a.length) {G__15201__a[G__15201__i] = arguments[G__15201__i + 0]; ++G__15201__i;}
  args = new cljs.core.IndexedSeq(G__15201__a,0);
} 
return G__15200__delegate.call(this,args);};
G__15200.cljs$lang$maxFixedArity = 0;
G__15200.cljs$lang$applyTo = (function (arglist__15202){
var args = cljs.core.seq(arglist__15202);
return G__15200__delegate(args);
});
G__15200.cljs$core$IFn$_invoke$arity$variadic = G__15200__delegate;
return G__15200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15204__i = 0, G__15204__a = new Array(arguments.length -  0);
while (G__15204__i < G__15204__a.length) {G__15204__a[G__15204__i] = arguments[G__15204__i + 0]; ++G__15204__i;}
  args = new cljs.core.IndexedSeq(G__15204__a,0);
} 
return G__15203__delegate.call(this,args);};
G__15203.cljs$lang$maxFixedArity = 0;
G__15203.cljs$lang$applyTo = (function (arglist__15205){
var args = cljs.core.seq(arglist__15205);
return G__15203__delegate(args);
});
G__15203.cljs$core$IFn$_invoke$arity$variadic = G__15203__delegate;
return G__15203;
})()
;

return null;
});
