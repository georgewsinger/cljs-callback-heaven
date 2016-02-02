goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__135329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__135329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135330__i = 0, G__135330__a = new Array(arguments.length -  0);
while (G__135330__i < G__135330__a.length) {G__135330__a[G__135330__i] = arguments[G__135330__i + 0]; ++G__135330__i;}
  args = new cljs.core.IndexedSeq(G__135330__a,0);
} 
return G__135329__delegate.call(this,args);};
G__135329.cljs$lang$maxFixedArity = 0;
G__135329.cljs$lang$applyTo = (function (arglist__135331){
var args = cljs.core.seq(arglist__135331);
return G__135329__delegate(args);
});
G__135329.cljs$core$IFn$_invoke$arity$variadic = G__135329__delegate;
return G__135329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__135332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__135332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135333__i = 0, G__135333__a = new Array(arguments.length -  0);
while (G__135333__i < G__135333__a.length) {G__135333__a[G__135333__i] = arguments[G__135333__i + 0]; ++G__135333__i;}
  args = new cljs.core.IndexedSeq(G__135333__a,0);
} 
return G__135332__delegate.call(this,args);};
G__135332.cljs$lang$maxFixedArity = 0;
G__135332.cljs$lang$applyTo = (function (arglist__135334){
var args = cljs.core.seq(arglist__135334);
return G__135332__delegate(args);
});
G__135332.cljs$core$IFn$_invoke$arity$variadic = G__135332__delegate;
return G__135332;
})()
;

return null;
});
