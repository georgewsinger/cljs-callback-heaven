goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19179__i = 0, G__19179__a = new Array(arguments.length -  0);
while (G__19179__i < G__19179__a.length) {G__19179__a[G__19179__i] = arguments[G__19179__i + 0]; ++G__19179__i;}
  args = new cljs.core.IndexedSeq(G__19179__a,0);
} 
return G__19178__delegate.call(this,args);};
G__19178.cljs$lang$maxFixedArity = 0;
G__19178.cljs$lang$applyTo = (function (arglist__19180){
var args = cljs.core.seq(arglist__19180);
return G__19178__delegate(args);
});
G__19178.cljs$core$IFn$_invoke$arity$variadic = G__19178__delegate;
return G__19178;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19182__i = 0, G__19182__a = new Array(arguments.length -  0);
while (G__19182__i < G__19182__a.length) {G__19182__a[G__19182__i] = arguments[G__19182__i + 0]; ++G__19182__i;}
  args = new cljs.core.IndexedSeq(G__19182__a,0);
} 
return G__19181__delegate.call(this,args);};
G__19181.cljs$lang$maxFixedArity = 0;
G__19181.cljs$lang$applyTo = (function (arglist__19183){
var args = cljs.core.seq(arglist__19183);
return G__19181__delegate(args);
});
G__19181.cljs$core$IFn$_invoke$arity$variadic = G__19181__delegate;
return G__19181;
})()
;

return null;
});
