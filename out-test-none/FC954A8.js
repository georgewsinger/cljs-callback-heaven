goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14103__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14104__i = 0, G__14104__a = new Array(arguments.length -  0);
while (G__14104__i < G__14104__a.length) {G__14104__a[G__14104__i] = arguments[G__14104__i + 0]; ++G__14104__i;}
  args = new cljs.core.IndexedSeq(G__14104__a,0);
} 
return G__14103__delegate.call(this,args);};
G__14103.cljs$lang$maxFixedArity = 0;
G__14103.cljs$lang$applyTo = (function (arglist__14105){
var args = cljs.core.seq(arglist__14105);
return G__14103__delegate(args);
});
G__14103.cljs$core$IFn$_invoke$arity$variadic = G__14103__delegate;
return G__14103;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14106__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14107__i = 0, G__14107__a = new Array(arguments.length -  0);
while (G__14107__i < G__14107__a.length) {G__14107__a[G__14107__i] = arguments[G__14107__i + 0]; ++G__14107__i;}
  args = new cljs.core.IndexedSeq(G__14107__a,0);
} 
return G__14106__delegate.call(this,args);};
G__14106.cljs$lang$maxFixedArity = 0;
G__14106.cljs$lang$applyTo = (function (arglist__14108){
var args = cljs.core.seq(arglist__14108);
return G__14106__delegate(args);
});
G__14106.cljs$core$IFn$_invoke$arity$variadic = G__14106__delegate;
return G__14106;
})()
;

return null;
});
