goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22435__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22436__i = 0, G__22436__a = new Array(arguments.length -  0);
while (G__22436__i < G__22436__a.length) {G__22436__a[G__22436__i] = arguments[G__22436__i + 0]; ++G__22436__i;}
  args = new cljs.core.IndexedSeq(G__22436__a,0);
} 
return G__22435__delegate.call(this,args);};
G__22435.cljs$lang$maxFixedArity = 0;
G__22435.cljs$lang$applyTo = (function (arglist__22437){
var args = cljs.core.seq(arglist__22437);
return G__22435__delegate(args);
});
G__22435.cljs$core$IFn$_invoke$arity$variadic = G__22435__delegate;
return G__22435;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22438__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22439__i = 0, G__22439__a = new Array(arguments.length -  0);
while (G__22439__i < G__22439__a.length) {G__22439__a[G__22439__i] = arguments[G__22439__i + 0]; ++G__22439__i;}
  args = new cljs.core.IndexedSeq(G__22439__a,0);
} 
return G__22438__delegate.call(this,args);};
G__22438.cljs$lang$maxFixedArity = 0;
G__22438.cljs$lang$applyTo = (function (arglist__22440){
var args = cljs.core.seq(arglist__22440);
return G__22438__delegate(args);
});
G__22438.cljs$core$IFn$_invoke$arity$variadic = G__22438__delegate;
return G__22438;
})()
;

return null;
});
