goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9412__i = 0, G__9412__a = new Array(arguments.length -  0);
while (G__9412__i < G__9412__a.length) {G__9412__a[G__9412__i] = arguments[G__9412__i + 0]; ++G__9412__i;}
  args = new cljs.core.IndexedSeq(G__9412__a,0);
} 
return G__9411__delegate.call(this,args);};
G__9411.cljs$lang$maxFixedArity = 0;
G__9411.cljs$lang$applyTo = (function (arglist__9413){
var args = cljs.core.seq(arglist__9413);
return G__9411__delegate(args);
});
G__9411.cljs$core$IFn$_invoke$arity$variadic = G__9411__delegate;
return G__9411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9415__i = 0, G__9415__a = new Array(arguments.length -  0);
while (G__9415__i < G__9415__a.length) {G__9415__a[G__9415__i] = arguments[G__9415__i + 0]; ++G__9415__i;}
  args = new cljs.core.IndexedSeq(G__9415__a,0);
} 
return G__9414__delegate.call(this,args);};
G__9414.cljs$lang$maxFixedArity = 0;
G__9414.cljs$lang$applyTo = (function (arglist__9416){
var args = cljs.core.seq(arglist__9416);
return G__9414__delegate(args);
});
G__9414.cljs$core$IFn$_invoke$arity$variadic = G__9414__delegate;
return G__9414;
})()
;

return null;
});
