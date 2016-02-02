goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15902__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15903__i = 0, G__15903__a = new Array(arguments.length -  0);
while (G__15903__i < G__15903__a.length) {G__15903__a[G__15903__i] = arguments[G__15903__i + 0]; ++G__15903__i;}
  args = new cljs.core.IndexedSeq(G__15903__a,0);
} 
return G__15902__delegate.call(this,args);};
G__15902.cljs$lang$maxFixedArity = 0;
G__15902.cljs$lang$applyTo = (function (arglist__15904){
var args = cljs.core.seq(arglist__15904);
return G__15902__delegate(args);
});
G__15902.cljs$core$IFn$_invoke$arity$variadic = G__15902__delegate;
return G__15902;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15905__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15906__i = 0, G__15906__a = new Array(arguments.length -  0);
while (G__15906__i < G__15906__a.length) {G__15906__a[G__15906__i] = arguments[G__15906__i + 0]; ++G__15906__i;}
  args = new cljs.core.IndexedSeq(G__15906__a,0);
} 
return G__15905__delegate.call(this,args);};
G__15905.cljs$lang$maxFixedArity = 0;
G__15905.cljs$lang$applyTo = (function (arglist__15907){
var args = cljs.core.seq(arglist__15907);
return G__15905__delegate(args);
});
G__15905.cljs$core$IFn$_invoke$arity$variadic = G__15905__delegate;
return G__15905;
})()
;

return null;
});
