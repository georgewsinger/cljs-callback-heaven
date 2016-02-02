goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__354556__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__354556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354557__i = 0, G__354557__a = new Array(arguments.length -  0);
while (G__354557__i < G__354557__a.length) {G__354557__a[G__354557__i] = arguments[G__354557__i + 0]; ++G__354557__i;}
  args = new cljs.core.IndexedSeq(G__354557__a,0);
} 
return G__354556__delegate.call(this,args);};
G__354556.cljs$lang$maxFixedArity = 0;
G__354556.cljs$lang$applyTo = (function (arglist__354558){
var args = cljs.core.seq(arglist__354558);
return G__354556__delegate(args);
});
G__354556.cljs$core$IFn$_invoke$arity$variadic = G__354556__delegate;
return G__354556;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__354559__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__354559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354560__i = 0, G__354560__a = new Array(arguments.length -  0);
while (G__354560__i < G__354560__a.length) {G__354560__a[G__354560__i] = arguments[G__354560__i + 0]; ++G__354560__i;}
  args = new cljs.core.IndexedSeq(G__354560__a,0);
} 
return G__354559__delegate.call(this,args);};
G__354559.cljs$lang$maxFixedArity = 0;
G__354559.cljs$lang$applyTo = (function (arglist__354561){
var args = cljs.core.seq(arglist__354561);
return G__354559__delegate(args);
});
G__354559.cljs$core$IFn$_invoke$arity$variadic = G__354559__delegate;
return G__354559;
})()
;

return null;
});
