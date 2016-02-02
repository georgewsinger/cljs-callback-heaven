goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19412__i = 0, G__19412__a = new Array(arguments.length -  0);
while (G__19412__i < G__19412__a.length) {G__19412__a[G__19412__i] = arguments[G__19412__i + 0]; ++G__19412__i;}
  args = new cljs.core.IndexedSeq(G__19412__a,0);
} 
return G__19411__delegate.call(this,args);};
G__19411.cljs$lang$maxFixedArity = 0;
G__19411.cljs$lang$applyTo = (function (arglist__19413){
var args = cljs.core.seq(arglist__19413);
return G__19411__delegate(args);
});
G__19411.cljs$core$IFn$_invoke$arity$variadic = G__19411__delegate;
return G__19411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19415__i = 0, G__19415__a = new Array(arguments.length -  0);
while (G__19415__i < G__19415__a.length) {G__19415__a[G__19415__i] = arguments[G__19415__i + 0]; ++G__19415__i;}
  args = new cljs.core.IndexedSeq(G__19415__a,0);
} 
return G__19414__delegate.call(this,args);};
G__19414.cljs$lang$maxFixedArity = 0;
G__19414.cljs$lang$applyTo = (function (arglist__19416){
var args = cljs.core.seq(arglist__19416);
return G__19414__delegate(args);
});
G__19414.cljs$core$IFn$_invoke$arity$variadic = G__19414__delegate;
return G__19414;
})()
;

return null;
});
