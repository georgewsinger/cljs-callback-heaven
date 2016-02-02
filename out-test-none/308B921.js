goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19315__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19316__i = 0, G__19316__a = new Array(arguments.length -  0);
while (G__19316__i < G__19316__a.length) {G__19316__a[G__19316__i] = arguments[G__19316__i + 0]; ++G__19316__i;}
  args = new cljs.core.IndexedSeq(G__19316__a,0);
} 
return G__19315__delegate.call(this,args);};
G__19315.cljs$lang$maxFixedArity = 0;
G__19315.cljs$lang$applyTo = (function (arglist__19317){
var args = cljs.core.seq(arglist__19317);
return G__19315__delegate(args);
});
G__19315.cljs$core$IFn$_invoke$arity$variadic = G__19315__delegate;
return G__19315;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19318__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19319__i = 0, G__19319__a = new Array(arguments.length -  0);
while (G__19319__i < G__19319__a.length) {G__19319__a[G__19319__i] = arguments[G__19319__i + 0]; ++G__19319__i;}
  args = new cljs.core.IndexedSeq(G__19319__a,0);
} 
return G__19318__delegate.call(this,args);};
G__19318.cljs$lang$maxFixedArity = 0;
G__19318.cljs$lang$applyTo = (function (arglist__19320){
var args = cljs.core.seq(arglist__19320);
return G__19318__delegate(args);
});
G__19318.cljs$core$IFn$_invoke$arity$variadic = G__19318__delegate;
return G__19318;
})()
;

return null;
});
