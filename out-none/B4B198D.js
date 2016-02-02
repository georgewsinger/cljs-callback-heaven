goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15525__i = 0, G__15525__a = new Array(arguments.length -  0);
while (G__15525__i < G__15525__a.length) {G__15525__a[G__15525__i] = arguments[G__15525__i + 0]; ++G__15525__i;}
  args = new cljs.core.IndexedSeq(G__15525__a,0);
} 
return G__15524__delegate.call(this,args);};
G__15524.cljs$lang$maxFixedArity = 0;
G__15524.cljs$lang$applyTo = (function (arglist__15526){
var args = cljs.core.seq(arglist__15526);
return G__15524__delegate(args);
});
G__15524.cljs$core$IFn$_invoke$arity$variadic = G__15524__delegate;
return G__15524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15528__i = 0, G__15528__a = new Array(arguments.length -  0);
while (G__15528__i < G__15528__a.length) {G__15528__a[G__15528__i] = arguments[G__15528__i + 0]; ++G__15528__i;}
  args = new cljs.core.IndexedSeq(G__15528__a,0);
} 
return G__15527__delegate.call(this,args);};
G__15527.cljs$lang$maxFixedArity = 0;
G__15527.cljs$lang$applyTo = (function (arglist__15529){
var args = cljs.core.seq(arglist__15529);
return G__15527__delegate(args);
});
G__15527.cljs$core$IFn$_invoke$arity$variadic = G__15527__delegate;
return G__15527;
})()
;

return null;
});
