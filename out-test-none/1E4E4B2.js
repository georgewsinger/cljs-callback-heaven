goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18848__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18849__i = 0, G__18849__a = new Array(arguments.length -  0);
while (G__18849__i < G__18849__a.length) {G__18849__a[G__18849__i] = arguments[G__18849__i + 0]; ++G__18849__i;}
  args = new cljs.core.IndexedSeq(G__18849__a,0);
} 
return G__18848__delegate.call(this,args);};
G__18848.cljs$lang$maxFixedArity = 0;
G__18848.cljs$lang$applyTo = (function (arglist__18850){
var args = cljs.core.seq(arglist__18850);
return G__18848__delegate(args);
});
G__18848.cljs$core$IFn$_invoke$arity$variadic = G__18848__delegate;
return G__18848;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18851__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18852__i = 0, G__18852__a = new Array(arguments.length -  0);
while (G__18852__i < G__18852__a.length) {G__18852__a[G__18852__i] = arguments[G__18852__i + 0]; ++G__18852__i;}
  args = new cljs.core.IndexedSeq(G__18852__a,0);
} 
return G__18851__delegate.call(this,args);};
G__18851.cljs$lang$maxFixedArity = 0;
G__18851.cljs$lang$applyTo = (function (arglist__18853){
var args = cljs.core.seq(arglist__18853);
return G__18851__delegate(args);
});
G__18851.cljs$core$IFn$_invoke$arity$variadic = G__18851__delegate;
return G__18851;
})()
;

return null;
});
