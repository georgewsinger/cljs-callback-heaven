goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29275__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29276__i = 0, G__29276__a = new Array(arguments.length -  0);
while (G__29276__i < G__29276__a.length) {G__29276__a[G__29276__i] = arguments[G__29276__i + 0]; ++G__29276__i;}
  args = new cljs.core.IndexedSeq(G__29276__a,0);
} 
return G__29275__delegate.call(this,args);};
G__29275.cljs$lang$maxFixedArity = 0;
G__29275.cljs$lang$applyTo = (function (arglist__29277){
var args = cljs.core.seq(arglist__29277);
return G__29275__delegate(args);
});
G__29275.cljs$core$IFn$_invoke$arity$variadic = G__29275__delegate;
return G__29275;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29278__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29279__i = 0, G__29279__a = new Array(arguments.length -  0);
while (G__29279__i < G__29279__a.length) {G__29279__a[G__29279__i] = arguments[G__29279__i + 0]; ++G__29279__i;}
  args = new cljs.core.IndexedSeq(G__29279__a,0);
} 
return G__29278__delegate.call(this,args);};
G__29278.cljs$lang$maxFixedArity = 0;
G__29278.cljs$lang$applyTo = (function (arglist__29280){
var args = cljs.core.seq(arglist__29280);
return G__29278__delegate(args);
});
G__29278.cljs$core$IFn$_invoke$arity$variadic = G__29278__delegate;
return G__29278;
})()
;

return null;
});
